
import { EvmosWallet }  from './wallet';
import { EvmosNetwork }  from './network';
import { formatDenom }  from './util';

import { generateEndpointGetValidators,    // 검증인 전체
         generateEndpointGetDelegations,   // 위임중인 수량
         generateEndpointGetUndelegations,
         generateEndpointDistributionRewardsByAddress,
         generateEndpointProposals,
         Coin, // 위임해제가능 수량
        }  from '@tharsis/provider';

import { createMessageSend, createTxMsgVote, createTxMsgDelegate, createTxMsgSubmitProposal } from '@tharsis/transactions' // createTxIBCMsgTransfer
import { createTxRawEIP712, signatureToWeb3Extension } from '@tharsis/transactions'

import { generateEndpointAccount, generateEndpointBalances, AccountResponse } from '@tharsis/provider';

import { signTypedData, SignTypedDataVersion } from '@metamask/eth-sig-util';

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
        const account = this.getAccount();
        this.wallet.accountNumber = Number((await account).account.base_account.account_number);
        this.wallet.sequence = Number((await account).account.base_account.sequence);
        console.log("init wallet done")
    }

    // 계정조회
    async getAccount() : Promise<AccountResponse> {
        return this.network.callEvmosGet(generateEndpointAccount(this.wallet.accountAddress));
    }

    // 잔액조회
    async getBalance() : Promise<any> {
        return this.network.callEvmosGet(generateEndpointBalances(this.wallet.accountAddress));
    }

    // 검증인 조회
    async getAllValidator(page : number = 0,
                          pageLimit: number = 5)  : Promise<any> {
        console.log(page)
        return this.network.callEvmosGet(generateEndpointGetValidators() + `pagination.offset=${page}&pagination.limit=${pageLimit}`)
    }

    // 리워드 조회
    async getRewards() : Promise<any> {
        return this.network.callEvmosGet(generateEndpointDistributionRewardsByAddress(this.wallet.accountAddress));
    }

    // 위임수량 조회
    async getDelegations() : Promise<any> {
        return this.network.callEvmosGet(generateEndpointGetDelegations(this.wallet.accountAddress));
    }

    async getProposals() : Promise<any> {
        return this.network.callEvmosGet(generateEndpointProposals());
    }

    // 언본딩 위임수량 조회
    async getUnbondingDelegations()  : Promise<any> {
        return this.network.callEvmosGet(generateEndpointGetUndelegations(this.wallet.accountAddress));
    }

    async broadcast(msg : any,
                    isSimulate: Boolean = false)  : Promise<any> {
        var signature = signTypedData({"privateKey": this.wallet.privateKey, "data" : msg.eipToSign, "version": SignTypedDataVersion.V4});

        let extension = signatureToWeb3Extension(this.network, this.wallet, signature);
        let rawTx = createTxRawEIP712(msg.legacyAmino.body, msg.legacyAmino.authInfo, extension);

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

    // 보상 인출
    withdrawRewards(validatorAddr : string) {
        console.log(validatorAddr)
    }

    async sendCoin(toAddr : string,
                  coinStr : string,
                  fee : string = '400000000000000000',
                  memo : string = "",
                  isSimulate: Boolean = false)  : Promise<any> {
        const coin :Coin = formatDenom(coinStr);

        const sendParams = {
            destinationAddress : toAddr,
            amount : coin.amount,
            denom : coin.denom,
        }

        await this.initWallet(); // sequence
        const msg : any = createMessageSend(this.network, this.wallet, this.network.getFee(fee), memo, sendParams);
        return await this.broadcast(msg, isSimulate);
    }

    async delegateCoin(
        validatorAddr : string,
        coinStr : string,
        fee : string = "400000000000000000",
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
        const msg : any = createTxMsgDelegate(this.network, this.wallet, this.network.getFee(fee), memo, delegateParam);
        return await this.broadcast(msg, isSimulate);
    }

    async voteAction(id : number, option : number, fee : string = "", memo : string = "")  : Promise<any> {
        const voteParam = {
            proposalId : id,
            option : option,
        }
        await this.initWallet();
        const msg : any = createTxMsgVote(this.network, this.wallet, this.network.getFee(fee), memo, voteParam);
        return await this.broadcast(msg);
    }

    async textProposal(memo : string = "")  : Promise<any> {

        await this.initWallet(); // sequence
        const params = {
                content : {
                    title: "Test Proposal",
                    description: "My awesome proposal"
                },
                denom: "sfl",
                amount: "101",
                proposer: this.wallet.accountAddress,
        }

        const msg : any = createTxMsgSubmitProposal(this.network, this.wallet, this.network.getFee(), memo, params);


        // console.log(msg.signDirect.body);
        // logger.debug("signDocDirect ============================\n\n\n\n\n");
        // const s : Uint8Array = new Uint8Array(Buffer.from(msg.signDirect.signBytes, "base64"));

        // const signDocDirect = msg.signDirect.signDocDirect;
        // // logger.debug(signDocDirect.serializeBinary());

        // const hash = crypto.createHash("sha256").update(signDocDirect.serializeBinary()).digest();
        // // logger.debug("hash---------");
        // // logger.debug(hash);

		// const sig = secp256k1.sign(hash, this.wallet.privateKey);

        // logger.debug("sig---------");
        // logger.debug(Buffer.from(sig.signature).toString('base64') + " : " +  msg.signDirect.signBytes);


        // const txRaw  :any = createTxRaw(msg.signDirect.body.serializeBinary(), msg.signDirect.authInfo.serializeBinary(), [s] )

        // // logger.debug("============================\n\n\n\n\n");
        return await this.broadcast(msg, false);
    }
}
