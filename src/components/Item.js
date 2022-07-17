import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart]= useState(false)

  function handleClickEvent(){
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={inCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove":"add"} onClick = {handleClickEvent}>{inCart? "Add To Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
