import React from "react"; 
import "./card.css"; 

function Card(props) {
  const { rating } = props;
  const { rate } = rating;

  const card = {
    img: props.img,
    title: props.name,
    about: props.info, 
    price: props.prix,
    rating: rating,
    id: props.id,
  };

  function addToCart() {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    existingCartItems.push(card);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  }
  
  function addToWash() {
    const existingWashItems = JSON.parse(localStorage.getItem("wash")) || [];
    existingWashItems.push(card);
    localStorage.setItem("wash", JSON.stringify(existingWashItems));
  }

  return (
    <div className="card">
      <div className="img">
        <img src={props.img} alt="card" />
      </div>
      <div className="desc">
        <p>{props.category}</p>
        <p>{props.name}</p>
        <div className="rate">
          {rate}
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="prix">
          <span>{props.prix}$</span>
        </div>
        <div className="footer1">
          <button onClick={addToCart} style={{cursor:"pointer"}}>Add to cart</button>
          <i className="fa-regular fa-heart" onClick={addToWash} style={{cursor:"pointer"}}></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
