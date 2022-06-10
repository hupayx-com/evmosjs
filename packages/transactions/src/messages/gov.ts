import {
  createMsgVote as protoCreateMsgVote,
  createSubmitProposal,
  createTransaction,
} from '@tharsis/proto'

import {
  createEIP712,
  generateFee,
  generateMessage,
  generateTypes,
  createMsgVote,
  MSG_VOTE_TYPES,
  createMsgSubmitProposal,
  MSG_SUBMIT_PROPOSAL,
} from '@tharsis/eip712'

import { Chain, Fee, Sender } from './common'

export interface MessageMsgVote {
  proposalId: number
  option: number
}

export function createTxMsgVote(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgVote,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_VOTE_TYPES)

  const msg = createMsgVote(
    params.proposalId,
    params.option,
    sender.accountAddress,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgCosmos = protoCreateMsgVote(
    params.proposalId,
    params.option,
    sender.accountAddress,
  )
  const tx = createTransaction(
    msgCosmos,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export interface MessageProposal {
  content: any
  denom: string
  amount: string
  proposer: string
}

export function createTxMsgSubmitProposal(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageProposal,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_SUBMIT_PROPOSAL)

  const msg = createMsgSubmitProposal(
    params.content,
    params.denom,
    params.amount,
    sender.accountAddress,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgCosmos = createSubmitProposal(
    params.content,
    params.amount,
    params.denom,
    sender.accountAddress,
  )
  const tx = createTransaction(
    msgCosmos,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}
