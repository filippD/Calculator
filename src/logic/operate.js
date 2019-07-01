import Big from 'big.js'
const operate = (total, current, operator) => {
  switch(operator) {
    case '+':
    return Big(total).plus(Big(current))
    case '-':
    return Big(total).minus(Big(current))
    case 'x':
    return Big(total).times(Big(current))
    case ':':
    return Big(total).div(Big(current))
  }
}

export default operate;