import { Coin }  from '@taycan/provider';
import BigNumber from 'bignumber.js';
const tokenUnits = {
    baseDenom : "asfl",
    displayDenom : "sfl",
    exponent : 18
}
const wei = '1000000000000000000';
// testnet baseDenom: atsfl
// mainnet baseDenom: asfl
export const formatDenom = (amount: string, baseDenom: string): Coin => {
  var amountValue = amount.substring(0, amount.indexOf(baseDenom));

  if(amount.indexOf(baseDenom) == -1) {
      var amountValue = amount.substring(0, amount.indexOf(tokenUnits.displayDenom));
      amountValue = new BigNumber(amountValue).multipliedBy(wei).toFixed();
  }

  return {
      denom: baseDenom,
      amount: amountValue
  }
}
