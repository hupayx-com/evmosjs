
import { generatePostBodyBroadcast, generateEndpointBroadcast, TxToSend} from '@taycan/provider'
import {generateEndpointSimulate, generatePostBodySimulate} from '@taycan/provider'
import { Chain, Fee } from '@taycan/transactions';
const fetch = require("node-fetch");
// import { fetch } from '@taycan/provider'

// export const EVMOS_REST = {
//     ACCOUNT:  `/cosmos/auth/v1beta1/accounts/{}`,
//     BALANCES: `/cosmos/bank/v1beta1/balances/{}`,
//     PROPOSALS: `/cosmos/gov/v1beta1/proposals/`,
//     PROPOSALTALLY: `/cosmos/gov/v1beta1/proposals/{}/tally`,
//     REWARDS: `/cosmos/staking/v1beta1/delegations/{}/rewards`,
//     VALIDATORS: `/cosmos/staking/v1beta1/validators?pagination.offset={}&pagination.limit={}`,
//     DELEGATION: `/cosmos/distribution/v1beta1/delegators/{}`,
//     UNDELEGATION: `/cosmos/staking/v1beta1/delegators/{}/unbonding_delegations`,
//     TXS:`/cosmos/tx/v1beta1/txs/`,
// };

export interface Network {
    chainId : number;
    rpcUrl : string ;
    // restUrl : string;
    baseDnome : string;
    tendermintUrl : string;
    broadcastPost(rawTx : TxToSend) : Promise<any>;
    getFee() : Fee;
    callEvmosGet(uri : String) : Promise<any>
}

export class EvmosNetwork implements Network, Chain {
    public chainId : number;
    public rpcUrl : string ;
    // public restUrl : string;
    public baseDnome : string;
    public tendermintUrl : string;
    public cosmosChainId : string;
    public gas: string = '200000';

    constructor(chainId : number, rpcUrl : string,  baseDnome: string, tendermintUrl : string="https://taycan-rpc.hupayx.io:26657", id : number = 1) {
        this.chainId = chainId;
        // this.restUrl = restUrl;
        this.rpcUrl = rpcUrl;
        this.baseDnome = baseDnome;
        this.tendermintUrl = tendermintUrl;
        this.cosmosChainId = "evmos_"+this.chainId+"-"+id
    }


    public async broadcastPostString(rawTx : string) : Promise<any> {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"jsonrpc":"2.0","id":495531792215,"method":"broadcast_tx_sync","params":{"tx":"${rawTx}"}}`
        };

        let broadcastPost = await fetch(
            this.tendermintUrl,
            postOptions
        );

        // console.log(broadcastPost) ;
        return broadcastPost.json();
    }


    public async broadcastPost(rawTx : TxToSend) : Promise<any> {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: generatePostBodyBroadcast(rawTx),
        };

        let broadcastPost = await fetch(
            `${this.rpcUrl}${generateEndpointBroadcast()}`,
            postOptions
        );

        return broadcastPost.json();
    }

    public async simulatePost(rawTx : TxToSend) : Promise<any> {
        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: generatePostBodySimulate(rawTx),
        };

        let broadcastPost = await fetch(
            `${this.rpcUrl}${generateEndpointSimulate()}`,
            postOptions
        );

        return broadcastPost.json();
    }


    public getFee(amount : string = '1000000000000000000', gas : string = '200000') : Fee {
        return {
            amount: amount,
            denom: this.baseDnome,
            gas: gas,
        }
    }


    public async callEvmosGet(uri : String) : Promise<any> {

        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        let addrRawData = await fetch(
            `${this.rpcUrl}${uri}`,
            options
        );
        let addrData = await addrRawData.json();
        return addrData;
    }

    // public async callEvmosGet(uri : String) : Promise<any> {
    //     const res = await fetch(`${this.rpcUrl}${uri}`)
    //     return JSON.parse(res)
    // }

    // public async callEvmosPageGet(uri : String, offset : number) : Promise<any> {
    //     const res = await fetch(`${this.rpcUrl}${uri}?pagination.offset=${offset}&pagination.limit=5`)
    //     return JSON.parse(res)
    // }

}
