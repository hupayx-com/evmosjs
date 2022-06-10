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
    { name: 'init_deposit', type: 'TypeDeposit' },
    { name: 'proposer', type: 'string' },
  ],
  TypeContent: [
    { name: 'value', type: 'TypeValue' },
  ],
  TypeValue:[
    { name: 'title', type: 'string' },
    { name: 'description', type: 'string' },
  ],
  TypeDeposit: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
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
  denom: string,
  amount: string,
  proposer: string,
) {
  console.log(amount);
  return {
    type: 'cosmos-sdk/MsgSubmitProposal',
    value: {
      content: createMsgTextProposal(content.title, content.description),
      init_deposit:
        {
          amount,
          denom,
        },
      proposer,
    },
  }
}
