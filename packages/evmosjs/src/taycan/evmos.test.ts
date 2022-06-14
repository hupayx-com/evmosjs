import { EvmosWallet }  from './wallet';
import { EvmosNetwork }  from './network';
import { Evmos }  from './evmos';
// import * as evmosType from './evmosType'

describe("evmos get test", () => {
    var mnemonic = "balcony write theme rent arrange surround elephant dish observe color long quantum potato rhythm day unlock pink humble beyond square tail beef know tree";

    const network = new EvmosNetwork(2023, "http://10.30.11.53:1317", "asfl");

    it("get test!!!", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log('------------ accounts');
        console.log(await evmos.getEvmosCall('accounts'));
        console.log('------------ balances');
        console.log(await evmos.getEvmosCall('balances'));
        console.log('------------ proposals');
        console.log(await evmos.getEvmosCall('proposals', {page: 0, pageLimit: 5}));
        console.log('------------ proposalTally');
        console.log(await evmos.getEvmosCall('proposalTally', {proposalId : 1}));
        console.log('------------ rewards');
        console.log(await evmos.getEvmosCall('rewards'));
        console.log('------------ validators');
        console.log(await evmos.getEvmosCall('validators', {page: 0, pageLimit: 5}));
        console.log('------------ delegation');
        console.log(await evmos.getEvmosCall('delegation'));
        console.log('------------ unDelegations');
        console.log(await evmos.getEvmosCall('unDelegations'));
        console.log('------------ txs');
        console.log(await evmos.getEvmosCall('txs', {txs: '89FD58ECE6824E1FC7E62E6658BFFDB0C8BAF101CA4C61F23ABC6578DF3B732C'}));
    });


    it("get test", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log(await evmos.delegate("evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v", "1sfl", '', true));
        console.log(await evmos.delegate("evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v", "1sfl", '', false));
    });

    it("tx test", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log("--------sendCoin");
        console.log(await evmos.sendCoin("evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a", "2asfl", '', false));

        // await delay(5000);

        // console.log("--------staking");
        // console.log(await evmos.delegate("evmosvaloper1xgj9yaup8k5j6zwjym3zl22n894sa5hxjxh7mq", "2sfl", '', false));

        // await delay(5000);

        // console.log("--------vote");
        // console.log(await evmos.voteAction(1, evmosType.VoteOption.VOTE_OPTION_YES, '', false));
    });

    it("tx textProposal", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log(await evmos.textProposal());

    });


    it("tx multiSend", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        let receivers = [];

        receivers.push({
            to:'evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a',
            amount : [{denom:'sfl', amount:'1'}]
        });

        // console.log(await evmos.sendCoin("evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a", "2asfl", '', false));
        console.log(await evmos.multiSend(receivers, '', false));
    });



});

// async function delay(ms: number) {
//     return new Promise( resolve => setTimeout(resolve, ms) );
// }
