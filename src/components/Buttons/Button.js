import React from 'react';
import classes from './Button.module.css';
const button = props => {
    let btnClass = classes.Button + ' '+ (props.orange? classes.orange: '') + (props.wide? classes.wide: '');
return(
    <div className={btnClass}>
        <button onClick= {()=>props.clicked(props.name)}>{props.name}</button>
    </div>
);
}

export default button;