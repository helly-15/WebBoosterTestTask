
import './App.css';
import Card from "./Card/Card";
import data from './data/data.json';
import React from "react";

function App() {
  return (
      <Card imgSrc ={data.product[0].img} figCaption={data.product[0].name} price={data.product[0].price}/>

  );
}

export default App;
