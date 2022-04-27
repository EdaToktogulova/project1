import Header from "../components/Header/Header";
import headerImage from "../assets/about.jpeg";

function About() {
   return (
      <>
      <Header
      title="PERFUME SHOP"
      image={headerImage}>
         The perfume is defined on paper as a mixture of fragrant essential oils or aroma compounds usually in liquid form... but it is so much more than that: beautiful and inspiring, it is an authentic object of desire, and part of our identity.
         Find here the most iconic perfumes and the most delightful and desired fragrances.
      </Header>
   </>
   )
}

export default About;