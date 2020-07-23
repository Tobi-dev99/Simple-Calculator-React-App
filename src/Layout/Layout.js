import React, { Component } from 'react';
import ButtonPanel from '../components/ButtonPanel/ButtonPanel';
import Input from '../components/Input/Input';
import Aux from '../hoc/Auxilliary';
import Calculate from '../Logic/calculate';

class Layout extends Component {
    state = {
        total: null,
        nextNum: null,
        operation: null
    }

    isNumber = (item) =>{
        return /[0-9]+/.test(item);
    }

    clickHandler = btnName => {
        this.setState(Calculate(this.state, btnName));
    }


    // clickHandler = (btnName) => {
    //    let oldTotal = this.state.total;
    //    let nextNumber = this.state.nextNum;
    //    let opr = this.state.operation;

    //    const oldtNum =Number(oldTotal);
    //    const nextNUM = Number(nextNumber);

    //    if(btnName === 'AC'){
    //        oldTotal = null;
    //        nextNumber = null;
    //        opr = null;
    //    }

    //     if(this.isNumber(btnName)){
    //         if(btnName === '0' && nextNumber === '0'){
    //             return;
    //         }
    //         if(opr){
    //             if(nextNumber){
    //                 nextNumber = nextNumber + (btnName);
    //             }else{
    //                 nextNumber = btnName;
    //             }
    //         }
    //         else if (nextNumber) {
    //           nextNumber = nextNumber + btnName;
    //           oldTotal = null;
    //         } else {
    //           nextNumber = btnName;
    //           oldTotal = null;
    //         }
    //     }
    //     if(btnName === '='){
    //         console.log('clicked');
    //         if (opr && nextNumber) {
    //           const result = Operate(nextNUM, oldtNum, opr);
    //           console.log(result);
    //           oldTotal = result.toString();
    //           nextNumber = null;
    //         }
    //     }
    //     if(btnName === '.'){
    //         return;
    //     }
    //     if (btnName === "+/-") {
    //       return;
    //     }
    //     if (btnName === "%") {
    //       return;
    //     } 

    //     else{
    //         opr = btnName;
    //         oldTotal = nextNumber;
    //         nextNumber = null;
    //     }
    //     // nextNumber = btnName;

    //     this.setState({
    //         nextNum: nextNumber,
    //         total: oldTotal,
    //         operation: opr
    //     })

    // }

    render(){
        return (
          <Aux>
            <Input value = {this.state.nextNum || this.state.total || '0'} />
            <ButtonPanel click={this.clickHandler}/>
          </Aux>
        );
    }
}


export default Layout;