import Big from 'big.js'
const operate = (numberOne, numberTwo, operation) => {
  switch(operation) {
    case '+':
    return Big(numberOne).plus(Big(numberTwo))
    case '-':
    return Big(numberOne).minus(Big(numberTwo))
    case 'x':
    return Big(numberOne).times(Big(numberTwo))
    case ':':
    return Big(numberOne).div(Big(numberTwo))
    default:
    return "0"
  }
}

export default operate;