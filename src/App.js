
import './App.css';
import Card from "./Card/Card";
import data from './data/data.json';
import React from "react";

function App() {
  let arrayOfCards =[];
  for (let i =0; i<data.product.length;i++){
    arrayOfCards.push(<Card imgSrc ={data.product[i].img} figCaption={data.product[i].name} price={data.product[i].price}/>)
  }
  return (
  <main className='Cards-wrapper'>
    { arrayOfCards }
  </main>



  );
}

export default App;
