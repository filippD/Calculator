import operate from './operate'

const calculate = (data, btnName) => {
	if (data.calculation === "Infinity") {
		data = {
			calculation: '0',
			total: '',
			current: '',
			operator: ''
		}
	}
	const newData = data
	switch(btnName) {
        case '+':
        case '-':
        case 'x':
        case ':':
        if(data.operator.length && data.current.length) {
          const result = operate(data.total, data.current, data.operator)
          newData.operator = btnName;
          newData.calculation = result + btnName;
          newData.total = `${result}`
          newData.current = ''
        } else if (data.current.length) {
          newData.operator = btnName;
          newData.calculation = data.current + btnName;
          newData.total =  data.current
          newData.current = ''
        } else if (data.operator.length && !data.current.length) {
          newData.calculation = data.total + btnName;
          newData.operator = btnName;
        }	
        break;
        case '=':
        if (data.current.length && data.operator.length) {
          const result = operate(data.total, data.current, data.operator)
          newData.operator = '';
          newData.calculation = `${result}`;
          newData.total =  ''
          newData.current = `${result}`
        }
        break;
        case '+/-':
        if (data.current.length) {
          let number = Number(data.current)*-1;
          let newstring
          if (number < 0) {
            newstring = data.total + data.operator + `(${number})`
          } else {
            newstring = data.total + data.operator + `${number}`
          }
          newData.current = `${number}`;
          newData.calculation = newstring;
        } 
        break;
        case '%':
        if (data.current.length) {
          let number = Number(data.current)/100;
          newData.current = `${number}`;
          newData.calculation = data.calculation + '%';
        }
        break;
        case 'AC':
        newData.operator = '';
        newData.calculation = '0';
        newData.total = '';
        newData.current = '';
        break;
        default:
        const num = data.current + btnName;
        const calculation = data.total + data.operator + data.current + btnName;
        newData.current = num;
        newData.calculation = calculation;
        break;
      }
      return newData
}

export default calculate;
