import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class JSCalculator extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        formula: <span>&nbsp;</span>,
        result: 0,
        prevFormula: '',
        deciMode: false,
        deciNum:0
      }
    }
    handleClear(){
      this.setState({formula: <span>&nbsp;</span>, result:0, prevFormula:'', deciMode:false, deciNum:0});
    }
    handleDecimal(){
      if (!this.state.deciMode){
        this.setState({deciMode:true, deciNum:1});
      }
    }
    handleNumberInput(input){
      if(typeof(this.state.result) === 'number'){
        let newNum;
        if(this.state.deciMode){
          newNum = this.state.result + input/(10**this.state.deciNum);
          newNum = Math.round(newNum*(10**this.state.deciNum))/(10**this.state.deciNum);
          this.setState({deciNum:this.state.deciNum+1});
        }else{
          newNum = this.state.result*10 + input;
        }
        this.setState({formula: this.state.prevFormula + (newNum).toString(),result: newNum});
      }else{
        this.setState({formula: this.state.prevFormula + (input).toString(), result:input});
      }
    }
    handleOperation(input){
      let operSet = new Set(['/','*','+','-']);
      let consOper = false;
      let consOperM = false;
      if(this.state.prevFormula.length > 0 && operSet.has(this.state.prevFormula.charAt(this.state.prevFormula.length-1)) && (operSet.has(this.state.result))) {
        consOper = true;
        if(this.state.prevFormula.charAt(this.state.prevFormula.length-1)!=='-' && input==='-') consOperM = true;
      }
      if(consOper) {
        if(consOperM){
          this.setState({formula:this.state.prevFormula+input, prevFormula:this.state.prevFormula+input});
        }else{
          this.setState({formula:this.state.prevFormula.substring(0,this.state.prevFormula.length-1)+input, prevFormula:this.state.prevFormula.substring(0,this.state.prevFormula.length-1)+input});
        }
      }else{
        this.setState({formula:this.state.prevFormula+this.state.result+input, prevFormula:this.state.prevFormula+this.state.result+input});
      }
      this.setState({result: input});
  }
    handleEqual(){
      let finalRes = eval(this.state.formula);
      finalRes = Math.round(finalRes*(10**4))/(10**4);
      this.setState({formula:this.state.formula+'='+finalRes.toString(), result:finalRes, prevFormula:'', deciMode:false, deciNum:0});
    }
    render(){
      return(
        <div id="calculator">
          <h1>JS Calculator</h1>
          <div id="calculator-box">
            <div id="display">
              <div id="display-formula">{this.state.formula}</div>
              <div id="display-result">{this.state.result}</div>
            </div>
            <div id="input-panel">
              <button id="clear" onClick={()=>this.handleClear()}>AC</button>
              <button id="divide" onClick={()=>this.handleOperation("/")}>/</button>
              <button id="multiply" onClick={()=>this.handleOperation("*")}>X</button>
              <button id="seven" onClick={()=>this.handleNumberInput(7)}>7</button>
              <button id="eight" onClick={()=>this.handleNumberInput(8)}>8</button>
              <button id="nine" onClick={()=>this.handleNumberInput(9)}>9</button>
              <button id="subtract" onClick={()=>this.handleOperation("-")}>-</button>
              <button id="four" onClick={()=>this.handleNumberInput(4)}>4</button>
              <button id="five" onClick={()=>this.handleNumberInput(5)}>5</button>
              <button id="six" onClick={()=>this.handleNumberInput(6)}>6</button>
              <button id="add" onClick={()=>this.handleOperation("+")}>+</button>
              <button id="one" onClick={()=>this.handleNumberInput(1)}>1</button>
              <button id="two" onClick={()=>this.handleNumberInput(2)}>2</button>
              <button id="three" onClick={()=>this.handleNumberInput(3)}>3</button>
              <button id="equals" onClick={()=>this.handleEqual()}>=</button>
              <button id="zero" onClick={()=>this.handleNumberInput(0)}>0</button>
              <button id="decimal" onClick={()=>this.handleDecimal()}>.</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <JSCalculator />,
    document.getElementById('root')
  );