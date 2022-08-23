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

  /**
   * TODO
   * eip712로 다중 전송을 하진 않고 있지만, 사용하게 된다면
   * to: receivers[0].to 0번 고정이 아닌
   * 루프로 순회 하면서 체워야 함
   */
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
