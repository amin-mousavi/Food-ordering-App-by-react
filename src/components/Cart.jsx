import { useContext } from "react";

import CartItem from "./CartItem.jsx";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext.jsx";

import { currencyFormatter } from "../utils/formatting.js";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
