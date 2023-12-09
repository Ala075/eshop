import {Link} from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="grid">
        <div className="box">
          <h3>Links</h3>
          <Link className="a" to="">
            Privacy policy
          </Link>
          <Link className="a" to="">
            Terms of use
          </Link>
          <Link className="a" to="">
            FAQ
          </Link>
          <Link className="a" to="">
            Contact
          </Link>
        </div>
        <div className="box">
          <h3>Account</h3>
          <Link className="a" to="">
            My Account
          </Link>
          <Link className="a" to="/sign">
            Login / Register
          </Link>
          <Link className="a" to="/Cart">
            Cart
          </Link>
          <Link className="a" to="/Washlist">
            Washlist
          </Link>
        </div>
        <div className="box form">
          <h3>Newsletter</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <input type="email" name="" id="" placeholder="Email" />
          <div className="sub">
            <Link className="a" to="#">
              Subscribe
            </Link>
          </div>
        </div>
        <div className="box" id="contact">
          <h3>Support</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <div className="links">
            <div className="link">
              <Link className="a" to="">
                <i className="fa-brands fa-square-whatsapp"></i>
              </Link>
            </div>
            <div className="link">
              <Link className="a" to="mailto:alaarfaoui751@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </Link>
            </div>
            <div className="link">
              <Link className="a" to="">
                <i className="fa-brands fa-telegram"></i>
              </Link>
            </div>
            <div className="link">
              <Link className="a" to="">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          <marquee>{year} Copyright | All right reserved .</marquee>
        </p>
      </div>
    </section>
  );
}
export default Footer;
