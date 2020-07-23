import React from 'react';
import Button from '../Buttons/Button';
import classes from './ButtonPanel.module.css';

const buttonPanel = props => {
    return (
      <div className={classes.ButtonPanel}>
        <div>
          <Button name="AC" clicked={props.click}/>
          <Button name="+/-" clicked={props.click}  />
          <Button name="%" clicked={props.click} />
          <Button name="/" clicked={props.click} orange />
        </div>
        <div>
          <Button name="7" clicked={props.click} />
          <Button name="8" clicked={props.click} />
          <Button name="9" clicked={props.click} />
          <Button name="X" clicked={props.click} orange />
        </div>
        <div>
          <Button name="4" clicked={props.click} />
          <Button name="5" clicked={props.click} />
          <Button name="6" clicked={props.click} />
          <Button name="-" clicked={props.click} orange />
        </div>
        <div>
          <Button name="1" clicked={props.click} />
          <Button name="2" clicked={props.click} />
          <Button name="3"clicked={props.click}  />
          <Button name="+" clicked={props.click} orange />
        </div>
        <div>
          <Button name="0" clicked={props.click} wide />
          <Button name="." clicked={props.click} />
          <Button name="=" clicked={props.click} orange />
        </div>
      </div>
    );
}

export default buttonPanel;