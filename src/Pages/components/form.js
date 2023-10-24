import "./style.css";
import img from "../asserts/arbre.jpg";
import Progress from "./progress";

function Form(props){

    return(
        <>
        <section className="login">
            <div className="container">
            <div className="content">
        
                <div className="img">
                    <img src={img} alt=""/>
                </div>
                
                <div className="box">
                    
                    <form className="form" id="form1" onSubmit={props.handleSubmit}>
                        <div className="head_section">
                    <p>Sign Up</p>
                    <span>Create a new account</span>
                        </div>
                        <Progress />
                        <label htmlfor={props.id1}>{props.name1}</label>
                        <input  type={props.type1} id={props.id1} placeholder={props.placeholder1} value={props.value1} onChange={(e)=>props.setState1(e.target.value)}/>
                        <label htmlfor={props.id2}>{props.name2}</label>
                        <input type={props.type2} id={props.id2} placeholder={props.placeholder2} value={props.state2} onChange={(e)=>props.setState1(e.target.value)}/>
                      
                     <div className="log">
                            <button type="submit" onClick={(e)=>e.preventDefault()}>
                            <div>
                                {props.logbtn} 
                            </div>
                         
                            </button>
                            <p>
                               Already have in account,<span>Sign-In</span>
                            </p>
                           
                        <div className="or">
                            <span>OR</span>
                        </div>
                        
                        <p>
                            <i className="fa-brands fa-google"></i> Sign in with google
                        </p>
                        
                        </div>
            </form>
            
            
               
            </div>
            </div>
            
             
            
            </div>
        </section>
                </>
    );
}
export default Form;
