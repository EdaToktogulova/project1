import React from "react";
import Logo from "../ui/Logo/Logo";
import "./Nav.css"
import NavItem from "./NavItem/NavItem";

function Nav() {
   return (
      <nav className="Nav">
         <div className="container">
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
         </div>
      </nav>
   );
}

export default Nav;