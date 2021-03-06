import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label : 'Salad' ,type : 'salad'},
    {label : 'Cheese' ,type : 'cheese'},
    {label : 'Meat' ,type : 'meat'},
    {label : 'Bacon' ,type : 'bacon'}
]
const buildControls = (props)=>(
    <div className = {classes.BuildControls}>
      <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>  
      {controls.map((control)=>{
          return <BuildControl key = {control.label} 
          label = {control.label} 
          added = {()=>{props.ingredientAdded(control.type)}}
          removed= {()=>{props.ingredientRemoved(control.type)}}
          disabled = {props.disabledInfo[control.type]}></BuildControl>
      })}
      <button className = {classes.OrderButton} 
              disabled = {!props.purchaseable}
              onClick = {props.ordered}>ORDER NOW </button>
    </div>
)

export default buildControls;