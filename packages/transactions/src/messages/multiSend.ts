import {
    createMsgMultiSend as protoMsgMultiSend,
    createTransaction,
  } from '@taycan/proto'

  import {
    createEIP712,
    generateFee,
    generateMessage,
    generateTypes,
    createMsgMultiSend,
    MSG_MULTI_SEND_TYPES,
  } from '@taycan/eip712'

  import { Chain, Fee, Sender } from './common'

  export interface MessageMultiSendParams {
    creator: string
    receivers: any[]
  }

  export function createMessageMultiSend(
    chain: Chain,
    sender: Sender,
    fee: Fee,
    memo: string,
    params: MessageMultiSendParams,
  ) {
    // EIP712
    const feeObject = generateFee(
      fee.amount,
      fee.denom,
      fee.gas,
      sender.accountAddress,
    )

    const types = generateTypes(MSG_MULTI_SEND_TYPES)

    const msg = createMsgMultiSend(
      sender.accountAddress,
      params.receivers
    )

    console.log(msg)

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
    const msgMultiSend = protoMsgMultiSend(
      sender.accountAddress,
      params.receivers
    )

    console.log(msgMultiSend)

    const tx = createTransaction(
      msgMultiSend,
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
