import { Coin }  from '@taycan/provider';
import BigNumber from 'bignumber.js';
const tokenUnits = {
    baseDenom : "asfl",
    displayDenom : "sfl",
    exponent : 18
}
const wei = '1000000000000000000';
export const formatDenom = (amount: string ): Coin => {
  var amountValue = amount.substring(0, amount.indexOf(tokenUnits.baseDenom));

  if(amount.indexOf(tokenUnits.baseDenom) == -1) {
      var amountValue = amount.substring(0, amount.indexOf(tokenUnits.displayDenom));
      amountValue = new BigNumber(amountValue).multipliedBy(wei).toFixed();
  }

  return {
      denom: tokenUnits.baseDenom,
      amount: amountValue
  }
}
