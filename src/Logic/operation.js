import Big from 'big.js';

const operate = (num1, num2, opr) =>{

    let num11 = Big(num1);
    let num22= Big(num2);

    if(opr === '+'){
        return num11.plus(num22).toString();
    }
    if (opr === '-') {
        return num11.minus(num22).toString();
    }
    if (opr === "X") {
      return num11.times(num22).toString();
    }
    if (opr === "/") {
      if(num22 === 0){
        alert('Dividing by 0.');
        return '0';
      }
      return num11.div(num22).toString();
    }
}

export default operate;