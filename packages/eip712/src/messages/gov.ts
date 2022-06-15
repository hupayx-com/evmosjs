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
    { name: 'initial_deposit', type: 'TypeAmount[]' },
    { name: 'proposer', type: 'string' },
  ],
  TypeAmount: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
  TypeContent: [
    { name: 'value', type: 'TypeValue' },
  ],
  TypeValue:[
    { name: 'title', type: 'string' },
    { name: 'description', type: 'string' },
  ],
}

export function createMsgTextProposal(
  title: string,
  description: string,
) {
  return {
    type: 'cosmos-sdk/TextProposal',
    value: {
      title,
      description
    }
  }
}

export function createMsgSubmitProposal(
  content: any,
  // denom: string,
  // amount: string,
  proposer: string,
) {
  return {
    type: 'cosmos-sdk/MsgSubmitProposal',
    value: {
      content: createMsgTextProposal(content.title, content.description),
      initial_deposit:[
        {
          amount: "101000000000000000000",
          denom: "asfl",
        }],
      proposer,
    },
  }
}
