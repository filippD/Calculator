const operate = (total, current, operator) => {
  switch(operator) {
    case '+':
    return Number(total) + Number(current);
    case '-':
    return Number(total) - Number(current);
    case 'x':
    return Number(total) * Number(current);
    case ':':
    return Number(total) / Number(current);
  }
}

export default operate;