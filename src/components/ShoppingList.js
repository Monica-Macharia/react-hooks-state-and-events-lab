import React, {useState}from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[itemListCategory, setitemCategory] = useState("All");

  function selectedCategoryEvent(event){
    setitemCategory(event.target.value)
  }
  const selectedCategory = items.filter((item)=>{
        if(itemListCategory === "All")
        return true;
        return item.category === itemListCategory;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectedCategoryEvent}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
