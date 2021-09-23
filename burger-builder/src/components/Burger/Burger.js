import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients).map(function(igKey){
        return [...Array(props.ingredients[igKey])].map(function (_, i) {
            return <BurgerIngredient key={igKey+i} type={igKey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(tranformedIngredients.length ===0){
        tranformedIngredients = <p> Please Start Adding Ingredients !!!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {tranformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>

        </div> 
    )
}

export default burger;

