import img2 from "../asserts/iphone.png";
import Card from "../components/card";
import Loding from "../components/loding";
import { Link } from "react-router-dom";
import useGFetch from "./useGFetch";
import Filter from "../components/filter";
import Services from '../components/services';
import {useState,useEffect} from "react";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import CardSkeleton from "../components/cardSkeleton";

function Landing() {

  const { data, isSubmit, error } = useGFetch(
    "https://fakestoreapi.com/products"
  );
  
  const TIME = new Date().toLocaleTimeString();
  const [Time,setTime]=useState(TIME);
  
  
  
  return (
    <>
      <section className="landing" id="home">
        <div className="container">
          <div className="content">
            <Filter/>
            <div className="recommand">
              <div className="box">
                <div className="text">
                  <span>
                    <i className="fa-brands fa-apple"></i> IPhone 14 Series
                  </span>
                  <p>Up to 10% off Voucher</p>
                  <span>
                    Shop Now <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
                <div className="img">
                  <img src={img2} alt="" />
                </div>
              </div>

              <div className="circle">
                <span></span>
                <span></span>
                <span className="active"></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="today">
            <div className="head_section">
              <h2>Today's</h2>
            </div>
            <div className="header_today">
              <p>Flash Sales {Time }</p>
            </div>
            <div className="content">
              {error && <div style={{ color: "red" }}>{error}</div>}
              {isSubmit &&
                <div>
                  <CardSkeleton cards={3}/>
                </div>
              }
              {data && 
                data.map((p, index) => {
                  return (
                    <Card
                      key={index}
                      id={p.id}
                      img={p.image}
                      prix={p.price}
                      category={p.category}
                      name={p.title}
                      rating={p.rating}
                    />
                  );
                })}
            </div>
            
            <div className="btn">
              <button>
                  View All Products
              </button>
            </div>
          </div>

          <div className="month">
            <div className="head_section">
              <h2>This Month</h2>
            </div>
            <div className="header_month">
              <p>Best Selling Products</p>
              <div className="btn">
                <button>View All Products</button>
              </div>
            </div>
            <div className="content">
              {error && <div style={{ color: "red" }}>{error}</div>}
              {!data && isSubmit &&
  <div>
    <CardSkeleton cards={3}/>
  </div>
}

            </div>
          </div>
          <div className="sectionAds">
            <div className="box">
              <div className="text">
                <span>Catégories</span>
                <p>Enhance Your Music Experience</p>
                <div className="time">
                  <span>
                    <span>05</span>
                    <span>Days</span>
                  </span>
                  <span>
                    <span>20</span>
                    <span>Hours</span>
                  </span>
                  <span>
                    <span>59</span>
                    <span>Minuts</span>
                  </span>
                  <span>
                    <span>35</span>
                    <span>Seconds</span>
                  </span>
                </div>
                <button>Buy Now</button>
              </div>
              <div className="img">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>

          <div className="categorie">
            <div className="head_section">
              <h2>Catégories</h2>
            </div>
            <div className="header_categorie">
              <p>Browse By Category</p>
              <div className="btn">
                <span></span>
              </div>
            </div>
            <div className="boxs">
              <div className="box">
                <Link to="#" className="a">
                  <i className="fa-solid fa-mobile"></i>
                  <span>Phones</span>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="a">
                  <i className="fa-solid fa-ear-listen"></i>
                  <span>Airpods</span>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="a active">
                  <i className="fa-solid fa-clock"></i>
                  <span>SmartWatch</span>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="a">
                  <i className="fa-solid fa-camera"></i>
                  <span>Camera</span>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="a">
                  <i className="fa-solid fa-headphones"></i>
                  <span>HeadPhones</span>
                </Link>
              </div>
              <div className="box">
                <Link to="#" className="a">
                  <i className="fa-solid fa-gamepad"></i>
                  <span>Gaming</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="featured">
            <div className="head_section">
              <h2>Featured</h2>
            </div>
            <div className="header_featured">
              <p>New Arrival</p>
            </div>
            <div className="grid">
              <div className="box">
                <div className="img">
                  <img src={img2} alt="" />
                </div>
                <div className="text">
                  <h2>PlayStaion 5</h2>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <span>
                    Shop Now <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>

              <div className="boxs">
                <div className="box">
                  <div className="img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h2>Women's Collections</h2>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <span>
                      Shop Now <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <div className="box">
                    <div className="img">
                      <img src={img2} alt="" />
                    </div>
                    <div className="text">
                      <h2>Speakers</h2>
                      <p>Amasonwireless speakers.</p>
                      <span>
                        Shop Now <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                  <div className="box">
                    <div className="img">
                      <img src={img2} alt="" />
                    </div>
                    <div className="text">
                      <h2>Perfume</h2>
                      <p>GUCCI INTENSE OUD EDP.</p>
                      <span>
                        Shop Now <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
      </section>
    </>
  );
}

export default Landing;
