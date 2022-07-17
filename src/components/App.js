import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[dataList, setdataList] = useState(itemData);
  const [isDark, setIsDark] = useState(false);
  

  function handleDarkEvent(){
    setIsDark((isDark)=>!isDark);
    

  
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {handleDarkEvent}>{isDark ? "Dark": "Light"} Mode</button>
      </header>
      <ShoppingList items={dataList} />
    </div>
  );
}

export default App;
