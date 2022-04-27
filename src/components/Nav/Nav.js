import React from "react";
import Logo from "../ui/Logo/Logo";
import "./Nav.css"
import NavItem from "./NavItem/NavItem";

function Nav() {
   return (
      <nav className="Nav">
         <Logo />
         <ul>
            <NavItem url="/">Home</NavItem>
            <NavItem url="/">Top</NavItem>
            <NavItem url="/">Discounts</NavItem>
            <NavItem url="/">Novelty</NavItem>
            <NavItem url="/">About</NavItem>
            <NavItem url="/">Category</NavItem>
            <NavItem url="/">Catalog</NavItem>
         </ul>
      </nav>
   );
}

export default Nav;