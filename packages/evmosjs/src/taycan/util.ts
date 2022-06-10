import { Coin }  from '@tharsis/provider';

const tokenUnits = {
    baseDenom : "asfl",
    displayDenom : "sfl",
    exponent : 18
}

export const formatDenom = (amount: string ): Coin => {
  var amountValue = Number(amount.substring(0, amount.indexOf(tokenUnits.baseDenom)));

  if(amount.indexOf(tokenUnits.baseDenom) == -1) {
      var amountValue = Number(amount.substring(0, amount.indexOf(tokenUnits.displayDenom)));
      amountValue *= 10 ** tokenUnits.exponent;
  } 

  return {
      denom: tokenUnits.baseDenom,
      amount: amountValue.toString()
  }
}