import { useContext } from "react";

import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

import { currencyFormatter } from "../utils/formatting.js";

function MealItem({ meal }) {
  //   console.log('sik');
  const cartContext = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartContext.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
