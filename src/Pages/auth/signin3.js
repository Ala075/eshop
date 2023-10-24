import "../components/style.css";
import Form1 from "../components/form";
import useFetch from "../useFetch";

function Signin3(){
function Signin(){
 const handleSubmit(e)=>{
     e.preventDefault();
     
     const {data,isSubmit,error}= useFetch('http://localhost:8000/Users/:1');
     
 }


   return(
   
     <Form1 handleSubmit={handleSubmit} type2="email" type1="text" id2="email" id1="usename" name2="Email" name1="Username"
placeholder1="Enter a username" placeholder2="Enter a email" logbtn="Create account"  />
                      
   );
}
export default Signin3;
