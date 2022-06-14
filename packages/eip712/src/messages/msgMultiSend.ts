export const MSG_MULTI_SEND_TYPES = {
    MsgValue: [
      { name: 'creator', type: 'string' },
      { name: 'receivers', type: 'TypeReceiver[]' },
    ],
    TypeReceiver: [
      { name: 'to', type: 'string' },
      { name: 'amount', type: 'TypeCoin[]' },
    ],
    TypeCoin: [
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
        receivers: receivers
      },
    }
  }
