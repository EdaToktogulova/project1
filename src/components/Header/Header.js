import "./Header.css"
import headerImage from "../../assets/header.jpeg";

function Header() {
   const style = {
      backgroundImage: `url(${headerImage})`
   };

   return (
      <header className="Header" style={style}>
         <div>Welcome to our</div>
         <h1>PERFUME SHOP</h1>
         <p>The perfume is defined on paper as a mixture of <br/> fragrant essential oils or aroma compounds usually <br/> in liquid form... but it is so much more than that: <br/> beautiful and inspiring, it is an authentic object of <br/> desire, and part of our identity. <br/>
         Find here the most <br/> iconic perfumes and the most delightful and desired fragrances.</p>
      </header>
   );
}

export default Header;