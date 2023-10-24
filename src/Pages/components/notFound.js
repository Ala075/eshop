import "./notFound.css";
import {Link} from "react-router-dom";

function NotFound(){
    return(
       <>
           <div className="empty">
              <div className="empty-header">
                  404
              </div>
              <p className="empty-title">
                  Oops… You just found an error page
              </p>
              <p className="empty-subtitle text-secondary">
                  Try adjusting your search or filter to find what you're looking for.
              </p>
              <div className="empty-action">
                  <Link to="#" className="btn btn-primary">
                      Take me home
                  </Link>
              </div>
          <></div>

       </>
    );
}
export default NotFound;