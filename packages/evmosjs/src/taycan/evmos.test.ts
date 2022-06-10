import { EvmosWallet }  from './wallet';
import { EvmosNetwork }  from './network';
import { Evmos }  from './evmos';

describe("evmos get test", () => {
    var mnemonic = "balcony write theme rent arrange surround elephant dish observe color long quantum potato rhythm day unlock pink humble beyond square tail beef know tree";

    const network = new EvmosNetwork(2023, "http://10.30.11.53:1317", "asfl");

    it("get test", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        // await evmos.getProposals();
        // await evmos.getAllValidator();
        // console.log("--------account");
        // console.log(await evmos.getAccount());
        // console.log("--------balance");
        // console.log(await evmos.getBalance());
        // console.log("--------delegations");
        // console.log(await evmos.getDelegations());
        // console.log("--------unbonding delegations");
        // console.log(await evmos.getUnbondingDelegations());

        // console.log(await evmos.sendCoin("evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a", "1sfl", '0', '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890', true));
        // console.log(await evmos.sendCoin("evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a", "2sfl", '400000000000000000', '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890', false));
        // await delay(5000);

        console.log(await evmos.delegateCoin("evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v", "1sfl", '0.4sfl', '', true));
        console.log(await evmos.delegateCoin("evmosvaloper1h84c0nj2z72ma3u5nlql8fy9l07ncfjh4pma0v", "1sfl", '0.4sfl', '', false));
    });

    it("tx test", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log("--------sendCoin");
        console.log(await evmos.sendCoin("evmos1xgj9yaup8k5j6zwjym3zl22n894sa5hxlgcw6a", "2asfl"));

        await delay(5000);

        console.log("--------staking");
        console.log(await evmos.delegateCoin("evmosvaloper1xgj9yaup8k5j6zwjym3zl22n894sa5hxjxh7mq",  "2sfl"));

        await delay(5000);

        console.log("--------vote");
        console.log(await evmos.voteAction(1, 1));
    });

    it("tx proposal", async() => {
        const wallet = await EvmosWallet.init(mnemonic);
        console.log(wallet);
        const evmos = new Evmos(wallet, network);
        console.log("--------sendCoin");
        console.log(await evmos.textProposal());
    });



});

async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
