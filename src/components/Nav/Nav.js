import React from "react";
import Logo from "../ui/Logo/Logo";
import classes from "./Nav.module.css"
import NavItem from "./NavItem/NavItem";
import NavToggle from "./NavToggle/NavToggle";

function Nav() {
   return (
      <nav className={classes.Nav}>
         <div className={classes.container}>
            <Logo />
            <ul>
               <NavItem url="/">Home</NavItem>
               <NavItem url="/top">Top</NavItem>
               <NavItem url="/discounts">Discounts</NavItem>
               <NavItem url="/novelty">Novelty</NavItem>
               <NavItem url="/about">About</NavItem>
               <NavItem url="/category">Category</NavItem>
               <NavItem url="/catalog">Catalog</NavItem>
            </ul>
            <NavToggle />
         </div>
      </nav>
   );
}

export default Nav;