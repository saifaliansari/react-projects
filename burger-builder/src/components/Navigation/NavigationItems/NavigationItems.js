import React from 'react';
import NavgationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = () =>(
   <ul className = {classes.NavigationItems}>
       <NavgationItem link="/" active>Burger Builder</NavgationItem>
       <NavgationItem link="/">Checkout</NavgationItem>
   </ul>
)

export default navigationItems;