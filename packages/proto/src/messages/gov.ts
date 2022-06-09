// eslint-disable-next-line import/namespace
import * as gov from '../proto/cosmos/gov/v1beta1/tx'
import * as govParm from '../proto/cosmos/gov/v1beta1/gov'
import * as coin from '../proto/cosmos/base/v1beta1/coin'
import { createAnyMessage, MessageGenerated } from './utils'

export function createSubmitProposal(
  content: any,
  amount: string,
  denom: string,
  proposer: string,
) {
  const contentMsg: MessageGenerated = {
    message: new govParm.cosmos.gov.v1beta1.TextProposal({
      title: content.title,
      description: content.description,
    }),
    path: 'cosmos.gov.v1beta1.TextProposal',
  }

  const value = new coin.cosmos.base.v1beta1.Coin({
    denom,
    amount,
  })

  const message = new gov.cosmos.gov.v1beta1.MsgSubmitProposal({
    content: createAnyMessage(contentMsg),
    initial_deposit: [value],
    proposer,
  })

  return {
    message,
    path: 'cosmos.gov.v1beta1.MsgSubmitProposal',
  }
}
