import React from "react";
import './Card.scss';

function Card(props) {
    const {imgSrc, figCaption, price} = props;
    return (
        <div className="Card">

            <figure className='Card-image'>
                <img src={imgSrc}
                     alt={figCaption}/>
                    <figcaption>{ figCaption }</figcaption>
            </figure>
               <span className='Card-price'>
                   {price}
               </span>
                <button className='Card-button__buy'>
                    Купить
                </button>
        </div>
    );
}

export default Card;
