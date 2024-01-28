import { useContext } from "react";
import Button from "./UI/Button.jsx";

import CartContext from "../store/CartContext.jsx";
import logo from "../assets/logo.jpg";

function Header() {
  const { items } = useContext(CartContext);
  
  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  

  // let t = 0;
  // const totalCartItems = items.forEach((item) => {
  //   t+= item.quantity
  // })

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restaurant" />
        <h1>React Food order</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

export default Header;
