import * as addrConverter from '@tharsis/address-converter';
import { ethers }  from 'ethers';
import { Sender } from '@tharsis/transactions';

export interface Wallet { // ethers.wallet이 있는데 내용이 중복된다.
    // mnemonic : string;
    // privateKey : Buffer;
    ethAddress : string;
    accountAddress : string;
}

export class EvmosWallet implements Wallet, Sender {
    public mnemonic : string; // Wallet
    private privateKey : Buffer; // Wallet
    public ethAddress : string; // Wallet
    public wallet: ethers.Wallet;
    public pubkey : string ;
    public pubkey2 : string ;
    public accountAddress : string; // Sender Wallet
    public accountNumber: number = 0; // Sender
    public sequence : number = 0; // Sender
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

    public static async init(mnemonic : string = "", pathCnt : string = '0') : Promise<EvmosWallet> {
        let path = `m/44'/60'/0'/0/${pathCnt}`
        let wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
        if(mnemonic == "") {
            wallet = ethers.Wallet.createRandom();
        }

        const ethAddress = wallet.address;
        const evmosAddress = this.getEvmosAddress(wallet.address);
        const privateKey = Buffer.from(wallet.privateKey.substring(2), 'hex')
        const publicKey  = this.getPublicKey(wallet);// Buffer.from(wallet._signingKey().compressedPublicKey.substring(2), 'hex').toString('base64')
        const publicKey2  = this.getPublicKey2(wallet);// Buffer.from(wallet._signingKey().publicKey.substring(2), 'hex').toString('base64')
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

    public getPrivateKey() : Buffer {
        return this.privateKey;
    }
    public static getPublicKey(wallet : ethers.Wallet) : string {
        return Buffer.from(wallet._signingKey().compressedPublicKey.substring(2), 'hex').toString('base64');
    }

    public static getPublicKey2(wallet : ethers.Wallet) : string {
        return Buffer.from(wallet._signingKey().publicKey.substring(2), 'hex').toString('base64')
    }

}
