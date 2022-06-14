import * as multi from '../proto/multicoinsend/tx'
import * as coin from '../proto/cosmos/base/v1beta1/coin'

export function createMsgMultiSend(
        creator: string,
        receivers: any[] ,
    ) {

    let arrReceivers = []

    for (const r of receivers) {
        const amount = new coin.cosmos.base.v1beta1.Coin({
            denom: r.denom,
            amount: r.amount,
        })

        const receiver = new multi.hupayxcom.multicoinsend.multicoinsend.Receiver({
            to: r.addr,
            amount: [amount],
        });

        arrReceivers.push(receiver)
    }

    const message = new multi.hupayxcom.multicoinsend.multicoinsend.MsgCoinSend({
        creator,
        receivers: arrReceivers,
    })

  return {
      message,
      path: 'hupayxcom.multicoinsend.multicoinsend.MsgCoinSend'
  }
}
