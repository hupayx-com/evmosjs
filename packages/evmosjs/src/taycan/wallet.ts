import * as addrConverter from '@tharsis/address-converter';
import { ethers }  from 'ethers';
import { Sender } from '@tharsis/transactions';

export interface Wallet {
    mnemonic : string;
    privateKey : Buffer;
    ethAddress : string;
    accountAddress : string;
}

export class EvmosWallet implements Wallet, Sender {
    public mnemonic : string;
    public privateKey : Buffer;
    public ethAddress : string;
    public wallet: ethers.Wallet;
    public pubkey : string ;
    public pubkey2 : string ;
    public accountAddress : string;
    public accountNumber: number = 0;
    public sequence : number = 0;
    public lockedCoin: string = "";
    public accountType : string = "";

    constructor(mnemonic : string = "", privateKey : Buffer = Buffer.from(""), publicKey: string ="", publicKey2: string ="", ethAddress : string ="" , evmosAddress : string ="", wallet: ethers.Wallet) {
        this.wallet = wallet;
        this.mnemonic = mnemonic;
        this.pubkey = publicKey;
        this.pubkey2 = publicKey2;
        this.privateKey = privateKey;
        this.ethAddress = ethAddress;
        this.accountAddress = evmosAddress;
    }

    public static async init(mnemonic : string = "") : Promise<EvmosWallet> {
        let wallet = ethers.Wallet.fromMnemonic(mnemonic);
        if(mnemonic == "") {
            wallet = ethers.Wallet.createRandom();
        }

        const ethAddress = wallet.address;
        const evmosAddress = this.getEvmosAddress(ethAddress);
        // wallet.mnemonic.phrase
        const privateKey = Buffer.from(wallet.privateKey.substring(2), 'hex')
        const publicKey  = Buffer.from(wallet._signingKey().compressedPublicKey.substring(2), 'hex').toString('base64')
        const publicKey2  = Buffer.from(wallet._signingKey().publicKey.substring(2), 'hex').toString('base64')
        return new EvmosWallet(wallet.mnemonic.phrase, privateKey, publicKey, publicKey2, ethAddress, evmosAddress, wallet);
    }

    public static getEvmosAddress(address : string) : string {
        return addrConverter.ethToEvmos(address)
    }

    public static getEthAddress(address : string) : string {
        return addrConverter.evmosToEth(address)
    }

    public getSender() : Sender {
        return this
    }

}
