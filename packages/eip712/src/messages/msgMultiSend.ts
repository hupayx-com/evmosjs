export const MSG_MULTI_SEND_TYPES = {
    MsgValue: [
      { name: 'creator', type: 'string' },
      { name: 'receivers', type: 'TypeReceiver[]' },
    ],
    TypeReceiver: [
      { name: 'to', type: 'string' },
      { name: 'amount', type: 'TypeAmount[]' },
    ],
    TypeAmount: [
        {name: 'denom', type: 'string' },
        {name: 'amount', type: 'string' },
    ]
  }

  export function createMsgMultiSend(
    creator: string,
    receivers: any[],
  ) {
    console.log("receivers-------")
    console.log( JSON.stringify(receivers, null, 3))
    console.log("receivers-------")

    return {
      type: 'multicoinsend/CoinSend',
      value: {
        creator: creator,
        receivers: [{
          to: receivers[0].to,
          amount: [{
            amount: receivers[0].amount[0].amount,
            denom: receivers[0].amount[0].denom
          }]
        }]
      },
    }
  }
