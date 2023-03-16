
import { EvmosWallet }  from './wallet';
import { EvmosNetwork }  from './network';

import { createTxRawEIP712, signatureToWeb3Extension } from '@taycan/transactions'

import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util';

import { formatDenom }  from './util';

import { Coin }  from '@taycan/provider';

import { createMessageSend } from '@taycan/transactions' // createTxIBCMsgTransfer

import { createTxMsgVote, createTxMsgSubmitProposal } from '@taycan/transactions' // createTxIBCMsgTransfer

import { createTxMsgDelegate, createTxMsgUndelegate, createTxMsgBeginRedelegate, createTxMsgWithdrawDelegatorReward, createTxMsgMultipleWithdrawDelegatorReward } from '@taycan/transactions'

import { createMessageMultiSend } from '@taycan/transactions'

import * as evmosType from './evmosType'

// import { Secp256k1, Keccak256 } from '@cosmjs/crypto'
import { encodeSecp256k1Signature } from "@cosmjs/amino";

import { createTxRaw } from '@taycan/proto';
import { keccak256 } from 'ethers/lib/utils';
import * as BytesUtils from "@ethersproject/bytes";

import Bignumber from 'bignumber.js';


export class Evmos {
    public wallet :  EvmosWallet;
    public network : EvmosNetwork;

    constructor(wallet : EvmosWallet, network : EvmosNetwork) {
        this.wallet = wallet;
        this.network = network;
        this.initWallet();
    }

    setNetwork(network : EvmosNetwork) {
        this.network = network;
        this.initWallet();
    }

    setWallet(wallet : EvmosWallet) {
        this.wallet = wallet;
        this.initWallet();
    }

    async initWallet() {
      await this.getEvmosCall('accounts').then((item) => {
        if (item.account?.base_vesting_account) {
          this.wallet.accountNumber = Number(item.account.base_vesting_account.base_account.account_number);
          this.wallet.sequence = Number(item.account.base_vesting_account.base_account.sequence);
        } else {
          this.wallet.accountNumber = Number(item.account.base_account.account_number);
          this.wallet.sequence = Number(item.account.base_account.sequence);
        }
      }).catch(() => {
        this.wallet.accountNumber = 0;
        this.wallet.sequence = 0;
      });
    }

    async broadcastDirect(msg: any) : Promise<any> {// multisend, proposal에서만 사용
        // // const s : Uint8Array = new Uint8Array(Buffer.from(msg.signDirect.signBytes, "base64"));
        // // const signDocDirect = msg.signDirect.signDocDirect;
        // // const hash = crypto.createHash("sha256").update(signDocDirect.serializeBinary()).digest();
    // // const sig = secp256k1.sign(hash, this.wallet.privateKey);
        // //

        // const hashedMessage = new Keccak256(msg.signDirect.signBytes).digest();
        // const signature = await Secp256k1.createSignature(hashedMessage, this.wallet.privateKey);
        // const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
        // console.log(signatureBytes);

        // //-------------
        // const test = await this.wallet.wallet.signMessage(msg.signDirect.signBytes)
        // const testByte = Buffer.from(test.substring(2), 'hex')
        // console.log('---------------- testByte');
        // console.log(testByte);
        // //-------------

        //-------------
        const test2 = await this.wallet.wallet._signingKey().signDigest(keccak256(msg.signDirect.signDocBytes))
        const splitSignature = BytesUtils.splitSignature(test2);
        const sing = BytesUtils.arrayify(BytesUtils.concat([splitSignature.r, splitSignature.s]));
        // console.log('---------------- test2');
        // console.log(sing);
        //-------------


        // const signatureTest = Buffer.from('WYtT7FiQsM9zIkBSoVjYJ1WAIWja2R56nPoxKO3YGblp7rp78TCfCo3ivOzvk7Rof5uemxbzx8pJfGlTJmGb4QE=', 'base64')


        // 공통??
        const stdSignature = encodeSecp256k1Signature(Buffer.from(this.wallet.pubkey, 'base64'), sing);

        // console.log(stdSignature.signature);
        const txRaw  :any = createTxRaw(msg.signDirect.body.serializeBinary(), msg.signDirect.authInfo.serializeBinary(), [Buffer.from(stdSignature.signature, 'base64')] )
        // const txRaw  :any = createTxRaw(msg.signDirect.body.serializeBinary(), msg.signDirect.authInfo.serializeBinary(), [Buffer.from('WYtT7FiQsM9zIkBSoVjYJ1WAIWja2R56nPoxKO3YGblp7rp78TCfCo3ivOzvk7Rof5uemxbzx8pJfGlTJmGb4QE=', 'base64')] )
        // console.log(Buffer.from(txRaw.message.serializeBinary()).toString('base64'));

        // console.log('---------------- ether sign');
        // console.log(this.wallet.wallet.signMessage(msg.signDirect.signBytes));
        // console.log('---------------- ether sign');
        // console.log('---------------- rawtx');
        const rawtx = Buffer.from(txRaw.message.serializeBinary()).toString('base64')

        return await this.network.broadcastPostString(rawtx);
    }

    async broadcast(msg : any, isSimulate: Boolean = false)  : Promise<any> {
        // console.log("signature")
        var signature = signTypedData({"privateKey": this.wallet.getPrivateKey(), "data" : msg.eipToSign, "version": SignTypedDataVersion.V4});
        // console.log(JSON.stringify(signature, null, 3))
        // console.log("extension")
        let extension = signatureToWeb3Extension(this.network, this.wallet, signature);
        // console.log(JSON.stringify(extension, null, 3))
        // console.log("rawTx")
        let rawTx = createTxRawEIP712(msg.legacyAmino.body, msg.legacyAmino.authInfo, extension);
        // console.log(JSON.stringify(rawTx, null, 3))


        if(isSimulate) {
            // console.log(`isSimulate : ${isSimulate}`)
            let broadcastPost = await this.network.simulatePost(rawTx);
            return broadcastPost
        } else {
            let broadcastPost = await this.network.broadcastPost(rawTx);
            return broadcastPost;
        }
    }

    // get action

    async getEvmosCall(type: String, params: any = {}) :Promise<any> {
        switch (type) {
            case 'accounts': { // 계정조회
                // console.log(type);
                return this.network.callEvmosGet(`/cosmos/auth/v1beta1/accounts/${this.wallet.accountAddress}`);
            }
            case 'balances': { // 잔고조회
                // 지갑 주소만 가지고 어느 계정 타입인지 모르기에 계정 조회 후 타입 반환
                const re : any = await this.getEvmosCall('accounts');
                if (re.account?.base_vesting_account) {
                    return await this.vestingBalances(re.account);
                }
                // console.log(type);
                return this.network.callEvmosGet(`/cosmos/bank/v1beta1/balances/${this.wallet.accountAddress}`);
            }
            case 'queries': // 각종 조회관련 호출 묶음
                return this.network.callEvmosGet(params.url); // string
        }
    }

    //bank -----------------------------------------

    async sendCoin(toAddr : string, coinStr : string,
        memo : string = "",
        isSimulate?: Boolean)  : Promise<any> {

        const coin :Coin = formatDenom(coinStr, this.network.baseDnome);

        const sendParams = {
            destinationAddress : toAddr,
            amount : coin.amount,
            denom : coin.denom,
        }
        await this.initWallet(); // sequence
        const msg : any = createMessageSend(this.network, this.wallet, this.network.getFee(), memo, sendParams);
        console.log(isSimulate);
        return await this.broadcastDirect(msg)
        // return await this.broadcast(msg, isSimulate);
    }


    //gov -----------------------------------------

    async textProposal(title: string, description: string, coinStr : string, memo : string = "")  : Promise<any> {
        await this.initWallet(); // sequence
        const coin : Coin = formatDenom(coinStr, this.network.baseDnome);
        const params = {
                content : {
                    title: title,// "Test Proposal",
                    description: description// "My awesome proposal"
                },
                denom: coin.denom, // "sfl",
                amount: coin.amount, // "101",
                proposer: this.wallet.accountAddress,
        }

        const msg : any = createTxMsgSubmitProposal(this.network, this.wallet, this.network.getFee('1000000000000000000'), memo, params);

        return await this.broadcastDirect(msg);
        // return await this.broadcast(msg, false);
    }

    async voteAction(id : number, option : evmosType.VoteOption, memo : string = "", isSimulate: Boolean = false)  : Promise<any> {
        const voteParam = {
            proposalId : id,
            option : option,
        }
        await this.initWallet();
        const msg : any = createTxMsgVote(this.network, this.wallet, this.network.getFee(), memo, voteParam);
        return await this.broadcast(msg, isSimulate);
    }

    //staking -------------------------------------

    async delegate(
        validatorAddr : string,
        coinStr : string,
        memo : string = "",
        isSimulate: Boolean = false): Promise<any> {
        const coin :Coin = formatDenom(coinStr, this.network.baseDnome);
        const delegateParam = {
            validatorAddress : validatorAddr,
            amount : coin.amount,
            denom : coin.denom,
        }
        await this.initWallet();
        // console.log("message start : " + this.wallet.sequence);
        const msg = await this.simulateData(createTxMsgDelegate, memo, delegateParam, false);
        return await this.broadcast(msg, isSimulate);
    }

    async unDelegate(
        validatorAddr: string,
        coinStr: string,
        memo: string = "",
        isSimulate: Boolean = false): Promise<any> {
        const coin :Coin = formatDenom(coinStr, this.network.baseDnome);

        const unDelegateParam = {
            validatorAddress: validatorAddr,
            amount: coin.amount,
            denom: coin.denom,
        }

        await this.initWallet();
        // console.log("message start : " + this.wallet.sequence);
        const msg = await this.simulateData(createTxMsgUndelegate, memo, unDelegateParam, false);
        return await this.broadcast(msg, isSimulate);
    }

    async reDelegate(
        valiSrcAddr: string,
        valiDstAddr: string,
        coinStr: string,
        memo: string = "",
        isSimulate: Boolean = false): Promise<any> {

        const coin :Coin = formatDenom(coinStr, this.network.baseDnome);

        const redelegateParams = {
            validatorSrcAddress: valiSrcAddr,
            validatorDstAddress: valiDstAddr,
            amount: coin.amount,
            denom: coin.denom,
        }

        await this.initWallet();
        // console.log("message start : " + this.wallet.sequence);
        const msg : any = createTxMsgBeginRedelegate(this.network, this.wallet, this.network.getFee(), memo, redelegateParams);
        return await this.broadcast(msg, isSimulate);
    }

    async withdrawReward(
     validatorAddr: string,
     memo: string = "",
     isSimulate: Boolean = false): Promise<any>  {

        const rewardParam = {
            delegatorAddress: this.wallet.accountAddress,
            validatorAddress: validatorAddr
        }

        await this.initWallet();
        const msg : any = createTxMsgWithdrawDelegatorReward(this.network, this.wallet, this.network.getFee(), memo, rewardParam);
        return await this.broadcast(msg, isSimulate);
    }

    // multi reward
    async multiWithdrawReward(
        validatorAddresses: string[],
        memo: string = "",
        isSimulate: Boolean = false) : Promise<any> {

        const rewardParam = {
            delegatorAddress: this.wallet.accountAddress,
            validatorAddresses: validatorAddresses
        }

        await this.initWallet();
        const msg = await this.simulateData(createTxMsgMultipleWithdrawDelegatorReward, memo, rewardParam, false);
        return await this.broadcast(msg, isSimulate);
      }

    // multiSend -------------------------------------
    async multiSend(
        receivers: any[],
        memo: string = "",
        isSimulate: Boolean = false): Promise<any> {

        const multiSendParam = {
            creator: this.wallet.accountAddress,
            receivers: receivers,
        }

        console.log(isSimulate);
        await this.initWallet();
        // console.log('createMessage------------------- multi send !!!!')
        const msg = await this.simulateData(createMessageMultiSend, memo, multiSendParam, false);
        return await this.broadcastDirect(msg);
    }

    // vesting balance
    async vestingBalances(account: any) : Promise<any> {
        console.log('--------------vesting account');
        const item = account.base_vesting_account.original_vesting.find((item: { denom: string; amount: any; }) => {
            return item.denom === this.network.baseDnome;
        });
        const end_time : string = account.base_vesting_account.end_time + '000';
        const start_time : string = account.lockup_periods[0].length + '000';
        // vesting 잔액 조회
        const payload = { url: `/evmos/vesting/v1/balances/${account.base_vesting_account.base_account.address}` }
        const re = await this.getEvmosCall('queries', payload);
        // 일반 잔액 조회 (잠김 + 보유, 스테이킹 x)
        const balance_payload = { url: `/cosmos/bank/v1beta1/balances/${account.base_vesting_account.base_account.address}` }
        const { balances: base_balance } = await this.getEvmosCall('queries', balance_payload);
        const base_symbol = this.network.baseDnome;

        const able_amt = base_balance[0].denom === base_symbol ? base_balance[0].amount : '0';
        const locked_amt = re.locked.length !== 0 ? re.locked[0].denom === base_symbol ? re.locked[0].amount : '0' : '0';
        const total_amt = re.vested.length !== 0 ? re.vested[0].denom === base_symbol ? re.vested[0].amount : '0' : '0' // 전체 수량
        const sendPayload = { url: `/cosmos/bank/v1beta1/spendable_balances/${account.base_vesting_account.base_account.address}` }
        const { balances: reSend } = await this.getEvmosCall('queries', sendPayload);
        const able_send_amt = reSend[0].denom === this.network.baseDnome ? reSend[0].amount : '0';

        const balances = [{
            type: "vesting",
            denom: item.denom, // 기본 심볼
            start_time, // 시작시간
            end_time, // 종료시간
            able_amt, // 보유 잔고 + 잠긴 수량(전송 불가, 스테이킹 가능)
            able_send_amt, // 전송 가능
            unvested_amt: re.unvested.length !== 0 ? re.unvested[0].denom === base_symbol ? re.unvested[0].amount : '0' : '0',
            unlocked_amt: new Bignumber(total_amt).minus(locked_amt).toFixed(), // 해제 수량
            locked_amt, // 잠긴 수량
            total_amt // 전체 수량
        }];
        console.log('vesting balances');
        console.log(balances);
        return { balances };
    }

    async simulateData (aCreateMsg : any , aMemo : string , aParams : object, isUseFeeAmt : boolean ) : Promise<any> {
        const msgSimulate : any = aCreateMsg(this.network, this.wallet, this.network.getFee(), aMemo, aParams);
        const re = await this.broadcast(msgSimulate, true);
        let gas_used: string = '300000';
        if (re.code === '0') {
          gas_used = re.gas_info.gas_used;
        }

        const baseFee = await this.network.baseFees()
        const feeAmt = new Bignumber(gas_used).multipliedBy(baseFee).toFixed();
        console.log(`baseFee: ${baseFee}`);
        console.log(`gas_used: ${gas_used}`);
        console.log(`feeAmt:${feeAmt}`);
        console.log(isUseFeeAmt);
        // const gasAmount = isUseFeeAmt === true ? feeAmt : undefined
        const msg : any = aCreateMsg(this.network, this.wallet, this.network.getFee(undefined, gas_used), aMemo, aParams);

        return msg;
    }

    // swap -------------------------------------

}
