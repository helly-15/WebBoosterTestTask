
import './App.css';
import Card from "./Card/Card";
import data from './data/data.json';
import React, {useState} from "react";
import ModalWindow from "./Modal/ModalWindow";

function App() {
  const [modalState, setModalState] = useState(false);
  let  openModal = (e) => {
    setModalState(true)
  }
  let  closeModal = (e) => {
    setModalState(false);
  }
  let arrayOfCards = [];
  for (let i = 0; i < data.product.length;i++){
    arrayOfCards.push(<Card imgSrc = {data.product[i].img} figCaption = {data.product[i].name} price = {data.product[i].price} showModal = {openModal}/>)
  };
  return (
      <>
        <main className = 'Cards-wrapper'>
           { arrayOfCards }
        </main>
        <ModalWindow show = {modalState} close = {closeModal}/>
      </>
  );
}

export default App;
