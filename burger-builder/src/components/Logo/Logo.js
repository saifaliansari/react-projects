import React from 'react';
import classes from './Logo.css'
import burgerImage from '../../assets/images/burger-logo.png'

const logo = (props)=>{
    return (<div className={classes.Logo}>
        <img src = {burgerImage} alt="My Burger"/> 
    </div>);
}

export default logo;