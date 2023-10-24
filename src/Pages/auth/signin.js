

import "../components/style.css";
import Form1 from "../components/form";
function Signin(){

   return(
   
     <Form1 type2="email" type1="text" id2="email" id1="usename" name2="Email" name1="Username"
placeholder1="Enter a username" placeholder2="Enter a email" logbtn="Next Step"  />
                      
   );
}
export default Signin;
