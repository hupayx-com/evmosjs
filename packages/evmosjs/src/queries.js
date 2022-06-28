/**
 * evmos에서 사용가능한 기능 목록
 * Evmos.js queries 호출 할 때 사용되는 기능
 * ex) 이름: url
 * 이름: 기능의 설명
 *      ??? 이나 영어: 정확한 기능인지 잘 모름 -> 기능이 확인되면 한국어로 설명
 *      $$: pagination 있는 쿼리 (사용 안하면 전체 조회, 필수 아님 선택)
 *      pagination = {
 *          key : string($byte), // 다음 페이지 쿼리 를 시작하기 위해 PageResponse.next_key에 반환된 값 (offset이나 key 중 하나 선택)
 *          offset : string($uint64), // 페이지
 *          limit : string($uint64), // 한 페이지의 나타낼 범위
 *          count_total : boolean($boolean), // ? offset일 때 사용, key는 무시됨
 *          reverse : boolean($boolean) // 내림차순 true
 *      }
 * url: 실제 호출할 때 사용되는 쿼리
 *
 * 변수: 의미 없음(에러 처리를 위한 임시 선언)
 * 순서 상관 없음
 */
const address = null // 지갑 주소
const hash = null // transaction hash
exports.AUTH = {
  '$$ 존재하는 모든 계정 리스트': `/cosmos/auth/v1beta1/accounts`,
  '계정 상세 정보': `/cosmos/auth/v1beta1/accounts/${address}`,
  'Params queries all parameters.': `/cosmos/auth/v1beta1/params`,
  '(추가해야함 완성 아님)txs 조회': `/cosmos/tx/v1beta1/txs`,
  tx조회: `/cosmos/tx/v1beta1/txs/${hash}`,
  '마지막 블록 조회': `/cosmos/base/tendermint/v1beta1/blocks/latest`,
  'validatorsets/latest': `/cosmos/base/tendermint/v1beta1/validatorsets/latest`,
}

const proposalId = null // 제안 아이디(투표)
const voter = null // 투표자
exports.GOV = {
  '$$ 제안 전체 목록': `/cosmos/gov/v1beta1/proposals`,
  '제안 상세 보기': `/cosmos/gov/v1beta1/proposals/${proposalId}`,
  '투표 현황(찬성, 반대, 기권)': `/cosmos/gov/v1beta1/proposals/${proposalId}/tally`,
  '$$ Deposits queries all deposits of a single proposal': `/cosmos/gov/v1beta1/proposals/${proposalId}/deposits`,
  '$$ Votes queries votes of a given proposal.': `/cosmos/gov/v1beta1/proposals/${proposalId}/votes`,
  'Vote queries voted information based on proposalID, voterAddr.': `/cosmos/gov/v1beta1/proposals/${proposalId}/votes/${voter}`,
}

const validatorAddr = null // 검증인 주소(String)
const delegatorAddr = null // 위임자 주소(String)
exports.STAKING = {
  // ----------- validate
  '$$ 검증인 전체 목록': '/cosmos/staking/v1beta1/validators',
  '검증인 상세 정보': `/cosmos/staking/v1beta1/validators/${validatorAddr}`,
  '$$ 특정 검증인에 위임한 전체 지갑주소(위임주소)': `/cosmos/staking/v1beta1/validators/${validatorAddr}/delegations`,
  '특정 검증인에 위임한 특정 지갑주소(위임주소)': `/cosmos/staking/v1beta1/validators/${validatorAddr}/delegations/${delegatorAddr}`,
  '$$ 검증인에 위임해제 중인 전체 지갑주소(위임주소)': `/cosmos/staking/v1beta1/validators/${validatorAddr}/unbonding_delegations`,
  '특정 검증인에 위임해제 중인 특정 지갑주소(위임주소)': `/cosmos/staking/v1beta1/validators/${validatorAddr}/delegations/${delegatorAddr}/unbonding_delegation`,
  '검증인 수수료': `/cosmos/distribution/v1beta1/validators/${validatorAddr}/commission`,

  // ----------- delegate
  '$$ 위임한 검증인 목록 및 위임 수량': `/cosmos/staking/v1beta1/delegations/${delegatorAddr}`,
  '$$ 위임 해제 중인 목록 및 수량': `/cosmos/staking/v1beta1/delegators/${delegatorAddr}/unbonding_delegations`,
  '위임한 검증인 정보': `/cosmos/staking/v1beta1/delegators/${delegatorAddr}/validators`,

  // ----------- reward
  ' 수령 가능한 리워드': `/cosmos/distribution/v1beta1/delegators/${delegatorAddr}/rewards/${validatorAddr}`,
  '수령 가능한 리워드 목록 및 합계': `/cosmos/distribution/v1beta1/delegators/${delegatorAddr}/rewards`,
  '??? 처리되지 않는 검증인 주소의 보상????': `/cosmos/distribution/v1beta1/validators/${validatorAddr}/outstanding_rewards`,
}
