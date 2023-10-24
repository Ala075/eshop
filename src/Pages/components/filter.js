import { Link } from "react-router-dom";

function Filter(){
    return(
        <>
        <div className="filter">
              <Link className="a" to="#">
                Men's Fashion
              </Link>
              <Link className="a" to="#">
                Electronics
              </Link>
              <Link className="a" to="#">
                Home & Lifestyle
              </Link>
              <Link className="a" to="#">
                Medicine
              </Link>
              <Link className="a" to="#">
                Sports & Outdoor
              </Link>
              <Link className="a" to="#">
                Baby's & Toys
              </Link>
              <Link className="a" to="#">
                Groceries & Pets
              </Link>
              <Link className="a" to="#">
                Health & Beauty
              </Link>
            </div></>
    );
}
export default Filter;