import React from "react";
import './Card.scss';

function Card(props) {
    const {imgSrc, figCaption, price, showModal} = props;
    return (
        <div className = "Card">
            <figure className = 'Card-image'>
                <img src = {imgSrc}
                     alt = {figCaption}
                    className = 'Card-picture'/>
                    <figcaption className = 'Card-image_figcaption'>{ figCaption }</figcaption>
            </figure>
            <span className = 'Card-price'>
                   {Number(price).toLocaleString('ru')}
            </span>
            <button className = 'Card-button__buy' onClick = {showModal} >
                    Купить
            </button>
        </div>
    );
}

export default Card;
