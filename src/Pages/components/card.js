import "./card.css";

function Card(props) {

function addToCart(idProduct) {
    // Save cart data
localStorage.setItem("cart", JSON.stringify(cart));

}
const {rate}=props.rating;

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
            <button onClick={()=>addToCart(props.id)}>
                Add to cart
            </button><i className="fa-regular fa-heart"></i>
            </div>
      </div>
    </div>
  );
}
export default Card;
