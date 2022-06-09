export const MSG_VOTE_TYPES = {
  MsgValue: [
    { name: 'proposal_id', type: 'uint64' },
    { name: 'voter', type: 'string' },
    { name: 'option', type: 'int32' },
  ],
}

export function createMsgVote(
  proposalId: number,
  option: number,
  sender: string,
) {
  return {
    type: 'cosmos-sdk/MsgVote',
    value: {
      proposal_id: proposalId,
      voter: sender,
      option,
    },
  }
}

// ---- MSG_SUBMIT_PROPOSAL

export const MSG_SUBMIT_PROPOSAL = {
  MsgValue: [
    { name: 'content', type: 'TypeContent' },
    { name: 'init_deposit', type: 'TypeDeposit[]' },
    { name: 'proposer', type: 'string' },
  ],
  TypeContent: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'string' },
  ],
  TypeDeposit: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
}

export function createMsgSubmitProposal(
  content: any,
  denom: string,
  amount: string,
  proposer: string,
) {
  return {
    type: 'cosmos-sdk/MsgSubmitProposal',
    value: {
      content,
      init_deposit: [
        {
          amount,
          denom,
        },
      ],
      proposer,
    },
  }
}
