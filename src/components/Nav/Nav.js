import React from "react";
import "./Nav.css"

function Nav() {
   return (
      <nav className="Nav">
                  <div><a>Perfume shop</a></div>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Top</a></li>
            <li><a href="/">Discounts</a></li>
            <li><a href="/">Novelty</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Category</a></li>
            <li><a href="/">Catalog</a></li>
         </ul>
      </nav>
   );
}

export default Nav;