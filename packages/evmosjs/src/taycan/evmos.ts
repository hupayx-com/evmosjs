
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
import { keccak256, formatUnits } from 'ethers/lib/utils';
import * as BytesUtils from "@ethersproject/bytes";

import Bignumber from 'bignumber.js';

// interface txParam {
//     fee: string,
//     memo: string,
//     isSimulate: boolean
// }

// let txBaseParam: txParam = {
//     fee : '400000000000000000',
//     memo : "",
//     isSimulate : false
// }

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
        const account = await this.getEvmosCall('accounts');
        this.wallet.accountNumber = Number((await account).account.base_account.account_number);
        this.wallet.sequence = Number((await account).account.base_account.sequence);
        // console.log("init wallet done")
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
        console.log('---------------- rawtx');
        const rawtx = Buffer.from(txRaw.message.serializeBinary()).toString('base64')

        return await this.network.broadcastPostString(rawtx);
    }

    async broadcast(msg : any, isSimulate: Boolean = false)  : Promise<any> {
        console.log("signature")
        var signature = signTypedData({"privateKey": this.wallet.getPrivateKey(), "data" : msg.eipToSign, "version": SignTypedDataVersion.V4});
        // console.log(JSON.stringify(signature, null, 3))
        console.log("extension")
        let extension = signatureToWeb3Extension(this.network, this.wallet, signature);
        // console.log(JSON.stringify(extension, null, 3))
        console.log("rawTx")
        let rawTx = createTxRawEIP712(msg.legacyAmino.body, msg.legacyAmino.authInfo, extension);
        // console.log(JSON.stringify(rawTx, null, 3))

        console.log(isSimulate)

        if(isSimulate) {
            console.log(`isSimulate : ${isSimulate}`)
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
                console.log(type);
                return this.network.callEvmosGet(`/cosmos/auth/v1beta1/accounts/${this.wallet.accountAddress}`);
            }
            case 'balances': { // 잔고조회
                // 지갑 주소만 가지고 어느 계정 타입인지 모르기에 계정 조회 후 타입 반환
                const re : any = await this.getEvmosCall('accounts');
                console.log(re);
                // @@##$$ 계정 타입이 vesting 계정인지 확인
                if (re.account?.base_vesting_account) {
                    return await this.vestingBalances(re.account);
                }
                console.log(type);
                return this.network.callEvmosGet(`/cosmos/bank/v1beta1/balances/${this.wallet.accountAddress}`);
            }
            // case 'proposals': // 제안 전체 목록 @@
            //     console.log(type);
            //     return this.network.callEvmosGet(`/cosmos/gov/v1beta1/proposals?pagination.offset=${params.page}&pagination.limit=${params.pageLimit}`);
            // case 'proposalTally': // 투표현황 @@
            //     console.log(type);
            //     return this.network.callEvmosGet(`/cosmos/gov/v1beta1/proposals/${params.proposalId}/tally`);
            // case 'rewards': // 보상내역 @@
            //     console.log(type);
            //     return this.network.callEvmosGet(`/cosmos/distribution/v1beta1/delegators/${this.wallet.accountAddress}/rewards`);
            // case 'validators': // 검증인 조회 @@
            //     console.log(type);
            //     return this.network.callEvmosGet(`/cosmos/staking/v1beta1/validators?pagination.offset=${params.page}&pagination.limit=${params.pageLimit}`);
            // case 'delegation': // 위임내역 @@
            //     console.log(type);
            //     return this.network.callEvmosGet(`/cosmos/staking/v1beta1/delegations/${this.wallet.accountAddress}`);
            // case 'unDelegations': // 언본딩 @@
            //     console.log(type);
            //     return this.network.callEvmosGet(`/cosmos/staking/v1beta1/delegators/${this.wallet.accountAddress}/unbonding_delegations`);
            // case 'txs': // 트랜잭션 해쉬 조회 @@
            //     console.log(type);
            //     return this.network.callEvmosGet(`/cosmos/tx/v1beta1/txs/${params.txs}`);
            case 'queries': // 각종 조회관련 호출 묶음
                return this.network.callEvmosGet(params.url); // string
        }
    }

    //bank -----------------------------------------

    async sendCoin(toAddr : string, coinStr : string,
        memo : string = "",
        isSimulate?: Boolean)  : Promise<any> {

        const coin :Coin = formatDenom(coinStr);

        const sendParams = {
            destinationAddress : toAddr,
            amount : coin.amount,
            denom : coin.denom,
        }
        await this.initWallet(); // sequence
        const msg : any = createMessageSend(this.network, this.wallet, this.network.getFee(), memo, sendParams);
        console.log(isSimulate)
        console.log('1')
        console.log(JSON.stringify(msg.signDirect, null, 3))


        return await this.broadcastDirect(msg)
        // return await this.broadcast(msg, isSimulate);
    }


    //gov -----------------------------------------

    async textProposal(title: string, description: string, coinStr : string, memo : string = "")  : Promise<any> {

        await this.initWallet(); // sequence
        const coin : Coin = formatDenom(coinStr);
        const params = {
                content : {
                    title: title,// "Test Proposal",
                    description: description// "My awesome proposal"
                },
                denom: coin.amount, // "sfl",
                amount: coin.denom, // "101",
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
        const coin :Coin = formatDenom(coinStr);
        const delegateParam = {
            validatorAddress : validatorAddr,
            amount : coin.amount,
            denom : coin.denom,
        }
        await this.initWallet();
        console.log("message start : " + this.wallet.sequence);
        const msg : any = createTxMsgDelegate(this.network, this.wallet, this.network.getFee(), memo, delegateParam);
        return await this.broadcast(msg, isSimulate);
    }

    async unDelegate(
        validatorAddr: string,
        coinStr: string,
        memo: string = "",
        isSimulate: Boolean = false): Promise<any> {
        const coin :Coin = formatDenom(coinStr);

        const unDelegateParam = {
            validatorAddress: validatorAddr,
            amount: coin.amount,
            denom: coin.denom,
        }

        await this.initWallet();
        console.log("message start : " + this.wallet.sequence);
        // gas가 200000 이면 부족하여 실패처리 됨, 250000 변경
        // gas를 250000 로 변경하면 최소 수량을 625000000000000000 amount도 변경해야 함
        const msgSimulate : any = createTxMsgUndelegate(this.network, this.wallet, this.network.getFee(), memo, unDelegateParam);
        const re = await this.broadcast(msgSimulate, true);
        console.log(re);
        const msg : any = createTxMsgUndelegate(this.network, this.wallet, this.network.getFee('600000000000000000', re.gas_info.gas_used), memo, unDelegateParam);

        return await this.broadcast(msg, isSimulate);
    }

    async reDelegate(
        valiSrcAddr: string,
        valiDstAddr: string,
        coinStr: string,
        memo: string = "",
        isSimulate: Boolean = false): Promise<any> {

        const coin :Coin = formatDenom(coinStr);

        const redelegateParams = {
            validatorSrcAddress: valiSrcAddr,
            validatorDstAddress: valiDstAddr,
            amount: coin.amount,
            denom: coin.denom,
        }

        await this.initWallet();
        console.log("message start : " + this.wallet.sequence);
        const msg : any = createTxMsgBeginRedelegate(this.network, this.wallet, this.network.getFee(), memo, redelegateParams);
        return await this.broadcast(msg, isSimulate);
    }

    async withdrawReward(
     validatorAddr: string,
     memo: string = "",
     isSimulate: Boolean = false) {

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
        isSimulate: Boolean = false) {

        const rewardParam = {
            delegatorAddress: this.wallet.accountAddress,
            validatorAddresses: validatorAddresses
        }
        await this.initWallet();
        const msg : any = createTxMsgMultipleWithdrawDelegatorReward(this.network, this.wallet, this.network.getFee(), memo, rewardParam);
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

        await this.initWallet();
        console.log('createMessage------------------- multi send !!!!')
        const msgSimulate : any = createMessageMultiSend(this.network, this.wallet, this.network.getFee(), memo, multiSendParam);
        const re = await this.broadcast(msgSimulate, true);
        const msg : any = createMessageMultiSend(this.network, this.wallet, this.network.getFee(undefined, re.gas_info.gas_used), memo, multiSendParam);
        console.log(isSimulate)
        console.log('1')
        // console.log(JSON.stringify(msg.signDirect, null, 3))
        // console.log('2')
        // console.log(JSON.stringify(msg.legacyAmino, null, 3))
        // console.log('3')
        // console.log(JSON.stringify(msg.eipToSign, null, 3))


        // // console.log( JSON.stringify(msg, null, 3));
        // console.log('createMessage------------------- multi send ###')
        // console.log('broadcast....')
        // return await this.broadcast(msg, isSimulate);
        return await this.broadcastDirect(msg);
        // return null
    }

    // vesting balance
    async vestingBalances(account: any) {
        console.log('--------------vesting account');
        /**
         * 계산 식
         * 초당 vesting = amount / (end_time - start_time);
         * vesting amount = (now_time - start_time) * 초당 vesting
         * 잠긴 수량 = (end_time - now_time) * 초당 vesting
         */
        const nowTime : string = String(new Date().getTime()/1000);
        const item = account.base_vesting_account.original_vesting.find((item: { denom: string; amount: any; }) => {
            return item.denom === 'asfl';
        });
        const amount : string = String(formatUnits(item.amount));
        // const amount : string = String(item.amount); // vestingAccount.account.base_vesting_account.original_vesting[0].amount // sfl
        const end_time : string = account.base_vesting_account.end_time;
        const start_time : string = account.start_time // re.account.start_time;

        const vesting_ms = (new Bignumber(amount).dividedBy(new Bignumber(end_time).minus(start_time))).toFixed();
        const vesting_amt = new Bignumber(vesting_ms).multipliedBy(new Bignumber(nowTime).minus(start_time)).toFixed();
        const vesting_locked_amt = new Bignumber(vesting_ms).multipliedBy(new Bignumber(end_time).minus(nowTime)).toFixed();
        const vesting_total_amt = new Bignumber(vesting_amt).plus(vesting_locked_amt).toFixed();
        const balances = [{ // 수량이 asfl인지 sfl인지 확인 해 볼 것
            type: "vesting",
            denom: item.denom, // 기본 심볼
            start_time, // 시작시간
            end_time, // 종료시간
            vesting_ms, // 초당 수량
            vesting_amt, // 가용 수량
            vesting_locked_amt, // 잠긴 금액
            vesting_total_amt // 전체 금액
        }];
        return { balances };
    }


    // swap -------------------------------------

}
