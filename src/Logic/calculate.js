import Operate from '../Logic/operation';
import Big from 'big.js';

 const isNumber = (item) => {
  return /[0-9]+/.test(item);
};

const calculate = (obj, btnName) => {
    let next = obj.nextNum;

    if(btnName === 'AC'){
        return {
            nextNum : null,
            operation: null,
            total: null
        }
    }
    if(isNumber(btnName)){
        if(obj.nextNum){
            return {
                nextNum: next + btnName
            }
        }

        return {
            nextNum: btnName
        }
    }

    if(btnName === '='){
        if (obj.operation && obj.nextNum) {
          const result = Operate(obj.total, obj.nextNum, obj.operation);
          return {
            total: result,
            nextNum: null,
          };
        } else {
          return {};
        }
    }

    if(btnName === '%'){
        if(obj.nextNum && obj.operation){
            const result = Operate(obj.total, obj.nextNum, obj.operation);
            return {
                total: Big(result).div(Big(100)).toString(),
                nextNum: null,
                operation: null
            }
        }
        if(obj.nextNum) {
            return{
                nextNum: Big(obj.nextNum).div(Big(100)).toString()
            }
        }
        return{};
    }

    if(btnName === '.'){
        if(obj.nextNum){
            if(obj.nextNum.includes('.')){
                return{};
            }
            return{
                nextNum: obj.nextNum + '.'
            }
        }
        return{
            nextNum: '0.'
        }
    }

    if(btnName === '+/-'){
        if(obj.nextNum){
            return {
              nextNum: (-1 * parseFloat(obj.nextNum)).toString(),
            };
        }
        if (obj.total) {
          return {
              total: -1 * (parseFloat(obj.total)).toString()
          }
        }
        return{};
    }

    if(obj.operation && obj.nextNum){
        const result = Operate(obj.total,obj.nextNum, btnName);
        return{
            total: result,
            nextNum: null,
            operation: btnName
        }
    }
    if(!obj.nextNum && obj.operation){
        return{
            operation: btnName
        }
    }

    return{
        total: next,
        operation: btnName,
        nextNum: null
    }
}

export default calculate;