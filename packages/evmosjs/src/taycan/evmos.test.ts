import { EvmosWallet }  from './wallet';
import { EvmosNetwork }  from './network';
import { Evmos }  from './evmos';
// import * as evmosType from './evmosType'

describe("evmos get test", () => {
    var mnemonic = "balcony write theme rent arrange surround elephant dish observe color long quantum potato rhythm day unlock pink humble beyond square tail beef know tree";

    // var mnemonic = "mail equip setup excess skate crew auction chunk method trouble weekend wonder gown correct regret boil slogan science leader identify pool banner odor present";

    const network = new EvmosNetwork(2023, "http://10.30.11.53:1317", "asfl");

    it("get test!!!", async() => {
        const wallet = await EvmosWallet.init(mnemonic, '2');
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log(await evmos.getEvmosCall('address'));
        // console.log('------------ accounts');
        // console.log(await evmos.getEvmosCall('accounts'));
        // console.log('------------ balances');
        // console.log(await evmos.getEvmosCall('balances'));
        // console.log('------------ proposals');
        // console.log(await evmos.getEvmosCall('proposals', {page: 0, pageLimit: 5}));
        // console.log('------------ proposalTally');
        // console.log(await evmos.getEvmosCall('proposalTally', {proposalId : 1}));
        // console.log('------------ rewards');
        // console.log(await evmos.getEvmosCall('rewards'));
        // console.log('------------ validators');
        // console.log(await evmos.getEvmosCall('validators', {page: 0, pageLimit: 5}));
        // console.log('------------ delegation');
        // console.log(await evmos.getEvmosCall('delegation'));
        // console.log('------------ unDelegations');
        // console.log(await evmos.getEvmosCall('unDelegations'));
        // console.log('------------ txs');
        // console.log(await evmos.getEvmosCall('txs', {txs: '89FD58ECE6824E1FC7E62E6658BFFDB0C8BAF101CA4C61F23ABC6578DF3B732C'}));
    });
    it("create wallet test", async () => {
      const wallet = await EvmosWallet.init();
      console.log(wallet);
      const evmos = new Evmos(wallet, network);
      console.log(evmos);
    });
    it("validation wallet test", async () => {
      const mnemonic = 'effort wood left finish stumble laugh flat arch memory renew worth dilemma traffic response either project sell bone regret canyon that metal save blanket'
      const wallet = await EvmosWallet.init(mnemonic);
      const evmos = new Evmos(wallet, network);
      const address = wallet.accountAddress;
      const params = { url: `/cosmos/auth/v1beta1/accounts/${address}`};
        let re = await evmos.getEvmosCall('queries', params);
        console.log(re);
    });


    it("get test", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        // console.log(await evmos.delegate("evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v", "1sfl", '', true));
        console.log(await evmos.delegate("evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v", "1sfl", '', false));
    });

    it("tx test", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log("--------sendCoin");
        console.log(await evmos.sendCoin("evmos1t5zfr74gpx98jwey7cpvgey0azug047kegjuah", "2asfl", '', false));

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
        const title = 'Test Proposal1 asdf';
        const description = 'My awesome proposal1 asdasdasd';
        console.log(await evmos.textProposal(title, description, '10sfl'));

    });


    it("tx multiSend", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        let receivers = [];

        receivers.push({
            to: 'evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a',
            amount : [{denom: 'asfl', amount:'1000000000000000000'}]
        },
        {
            to: 'evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a',
            amount : [{denom:'asfl', amount:'2000000000000000000'}]
        },
        {
            to: 'evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a',
            amount : [{denom:'asfl', amount:'3000000000000000000'}]
        },
        );
        console.log(receivers);

        // console.log(await evmos.sendCoin("evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a", "2asfl", '', false));
        console.log(await evmos.multiSend(receivers));
    });

    it("undelegate, 위임해제", async () => {
        const wallet = await EvmosWallet.init(mnemonic);
        const evmos = new Evmos(wallet, network);
        // gas가 200000 이면 부족하여 250000 변경
        // gas를 250000 로 변경하면 amount도 변경해야 함
        console.log(await evmos.unDelegate('evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v', '1.5sfl'));
    });

    it("reward 리워드 수령", async () => {
        const wallet = await EvmosWallet.init(mnemonic);
        const evmos = new Evmos(wallet, network);
        console.log(await evmos.withdrawReward('evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v'));
    });

    it("multiWithdrawReward 다중 리워드 수령", async () => {
        const wallet = await EvmosWallet.init(mnemonic);
        const evmos = new Evmos(wallet, network);
        const validators : string[]  = [];
        validators.push('evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v');
        console.log(await evmos.multiWithdrawReward(validators));
    })

    it("etc queries", async () => {
        const wallet = await EvmosWallet.init(mnemonic);
        const evmos = new Evmos(wallet, network);

        // 제안 상세 보기
        // const proposalId = '2';
        // const params = { url: `/cosmos/gov/v1beta1/proposals/${proposalId}`};
        const params = { url: `/cosmos/staking/v1beta1/validators` };
        console.log(`제안 상세 보기`);
        // console.log(await evmos.getEvmosCall('queries', params));
        const re = await evmos.getEvmosCall('queries', params)
        console.log(`re ${JSON.stringify(re, null, 4)}`);
    });

    it("tx 타입 확인", async () => {
        const wallet = await EvmosWallet.init(mnemonic);
        const evmos = new Evmos(wallet, network);

        // let type = 'events=tx.height=574067'; // 해당 블록에 있는 tx 조회
        const type = `?events=transfer.sender=evmos1w3xt5cx0gkulxetvetztcj78ft0cwdcp8xjdae`
        // transfer.recipient='cosmos1tu8d7czlzskxpr0yd0gcexyv9hd2ytesvthqc0'
        const params = { url: `/cosmos/tx/v1beta1/txs?${type}`};
        let re = await evmos.getEvmosCall('queries', params);
        console.log(re);
    });

});

// async function delay(ms: number) {
//     return new Promise( resolve => setTimeout(resolve, ms) );
// }
