
import { generatePostBodyBroadcast, generateEndpointBroadcast, TxToSend} from '@tharsis/provider'
import {generateEndpointSimulate, generatePostBodySimulate} from '@tharsis/provider'
import { Chain, Fee } from '@tharsis/transactions';
const fetch = require("node-fetch");

export interface Network {
    chainId : number;
    rpcUrl : string ;
    // restUrl : string;
    baseDnome : string;
    broadcastPost(rawTx : TxToSend) : Promise<any>;
    getFee() : Fee;
    callEvmosGet(uri : String) : Promise<any>
}

export class EvmosNetwork implements Network, Chain {
    public chainId : number;
    public rpcUrl : string ;
    // public restUrl : string;
    public baseDnome : string;
    public cosmosChainId : string;
    public gas: string = '21000';

    constructor(chainId : number, rpcUrl : string,  baseDnome: string, id : number = 1) {
        this.chainId = chainId;
        // this.restUrl = restUrl;
        this.rpcUrl = rpcUrl;
        this.baseDnome = baseDnome;
        this.cosmosChainId = "evmos_"+this.chainId+"-"+id
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


    public getFee(amount : string = '400000000000000000') : Fee {
        return {
            amount: amount,
            denom: this.baseDnome,
            gas: '200000',
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

}
