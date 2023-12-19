import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";

function Header(){

const [light,setLight]=useState(true);
const [menu,setMenu]=useState(false);

//light toggle
function handleLight(){
  setLight(!light);
  if(light){
    document.body.classList.add("color")
  }else{
    document.body.classList.remove("color")
  }
}
//menu toggle
function handleMenu(e){
      setMenu(!menu);
}
const menuClass = menu ? "nav open" : "nav";
function handleCloseMenu(e){
      setMenu(!menu);
}
//active navLink
const handleNavItemClick = (e) => {
  const listItems = document.querySelectorAll('.nav li');
  listItems.forEach((li) => {
    li.classList.remove('active');
  });
  e.target.classList.add('active');
};



const listItems = document.querySelectorAll(".nav li");
//hide navlink
const M_nav = document.querySelector(".nav");
listItems.forEach(function(li) {
     li.addEventListener('click', function() {
        M_nav.classList.remove('open');
     });
});


const navigate = useNavigate();
const handleNavigationCart = () => {
  // Use navigate to navigate to a new route
  navigate('/Cart');
}
const handleNavigationWash = () => {
  // Use navigate to navigate to a new route
  navigate('/Washlist');
}

  return (
      <div className="header">
          <div className="background-overlay"></div>
          <div className="ads">
              <p>vituperata luctus vero dicat affert similique etiam</p>
              <select>
                      <option >English</option>
                      <option>Français</option>
                      <option>Arabic</option>
              </select>
              <i className={light?"fa-solid fa-moon":"fa-solid fa-sun"} onClick={handleLight}></i>
          </div>
          <div className="container">
            <div className="logo">
              <i className="fa-solid fa-cart-arrow-down"> Eshop</i>
              
            </div>
            
            <ul className={menuClass? 'nav open' : 'nav'}>
                <div className="close" onClick={handleCloseMenu}>
                <i className="fa-solid fa-xmark"></i>
                </div>
                <li className="active"><Link  to="/" className="a" onClick={handleNavItemClick}>Home</Link></li>
                <li><Link to="/About" className="a" onClick={handleNavItemClick}>About</Link></li>
                <li><Link to="/Contact" className="a" onClick={handleNavItemClick}>Contact</Link></li>
                <li><Link to="/sign" className="a" onClick={handleNavItemClick}>Sign-Up</Link></li>
            </ul>
            <div className="others">  
              <div className="searchBar" >
                <input type="search" placeholder="what are you looking for ?"/>
                <div className="icon"><i className="fa-solid fa-magnifying-glass"></i></div>
              </div>   
              <div className="iconNav">
                <i className="fa-regular fa-heart"onClick={handleNavigationWash}></i>
                <i className="fa-solid fa-cart-shopping" onClick={handleNavigationCart}></i>
                <i className="fa-regular fa-user"></i>
              </div>  
              <div className="menu" onClick={handleMenu}></div>
            </div>
        </div>
      </div>
  );
}

export default Header;
