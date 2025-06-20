import Navbar from "./Navbar";
import {useState,useRef} from "react";
import{useNavigate} from "react-router-dom";
import{getAuth,sendPasswordResetEmail} from "firebase/auth";
import{useEffect} from "react";
import image1 from "./image1.jpg";

function ForgotPassword()
{
const nav=useNavigate();
const[un,setUn]=useState("");
const[ans,setAns]=useState("");

const rUn=useRef();

const hUn=(event)=>{setUn(event.target.value);}


//THIS MEANS THAT IF U LOGIN ONE TIME AND ENTER HOME PAGE TEHN U CANT GO AGAIN TO LOGIN PAGE FOR THAT U NEED TO LOGOUT PAGE AND RETURN TO LOGIN PAGE
useEffect(()=>{
const un=localStorage.getItem("un");
if(un!=null)
{
nav("/home");
}



},[]);


const save=(event)=>{
event.preventDefault();
if((un.trim().length==0))
{
alert("U NEED TO ENTER PROPER EMAIL");
rUn.current.focus();
setUn("");
return;
}

const auth=getAuth();
sendPasswordResetEmail(auth,un)
.then(res=>nav("/login"))
.catch(err=>alert("EMAIL ADRESS USER NOT FOUND"))

}

return(
<>
<div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh",
        }}
      >
<center>
<Navbar/>
<br/><br/><br/><br/>

<form onSubmit={save}>
<br/>
<h1 className="header">ForgotPassword</h1>
<br/>
<input className="input-field" type="email" placeholder="ENTER UR MAIL" value={un} ref={rUn} onChange={hUn}/>
<br/><br/>
<input  className="Input-field"  type="submit" value="RESET PASSWORD"/>
<br/><br/>
</form>
<h1>{ ans }</h1>
</center>
</div>
</>
)
}

export default ForgotPassword;




