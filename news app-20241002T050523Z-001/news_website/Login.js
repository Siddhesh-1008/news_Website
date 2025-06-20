import Navbar from "./Navbar";
import {useState,useRef} from "react";
import{useNavigate} from "react-router-dom";
import{getAuth,signInWithEmailAndPassword} from "firebase/auth";
import{useEffect} from "react";
import image1 from "./image1.jpg";

function Login()
{
const nav=useNavigate();


const[un,setUn]=useState("");
const[pw,setPw]=useState("");
const[ans,setAns]=useState("");
const rUn=useRef();
const rPw=useRef();

const hUn=(event)=>{setUn(event.target.value);}
const hPw=(event)=>{setPw(event.target.value);}





//THIS MEANS THAT IF U LOGIN ONE TIME AND ENTER HOME PAGE TEHN U CANT GO AGAIN TO LOGIN PAGE FOR THAT U NEED TO LOGOUT PAGE AND RETURN TO LOGIN PAGE
useEffect(()=>{
const un=localStorage.getItem("un");
if(un!=null)
{
nav("/home");

}



},[]);


const check=(event)=>{
event.preventDefault();

if((un.trim().length==0))
{
alert("U NEED TO ENTER PROPER EMAIL");
rUn.current.focus();
setUn("");
return;
}
 
if((pw.length==0)||(pw.length<8))
{
alert("ENTER PROPER PASSWORD WITH MINIMUM LENGTH 8");
rPw.current.focus();
setPw("");
return;
}
const auth=getAuth();
signInWithEmailAndPassword(auth,un,pw)
.then(res=>{
localStorage.setItem("un",un);
alert("Details are valid");
nav("/")
})

.catch(err=>alert("Wrong details"))




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
<form onSubmit={check}>
<br/>
<h1 className="header">LOGIN</h1>
<br/>
<input className="input-field" type="email" placeholder="ENTER UR MAIL" value={un} ref={rUn} onChange={hUn} />
<br/><br/>
<input className="input-field" type="password" placeholder="ENTER UR PASSWORD" value={pw} ref={rPw} onChange={hPw} />
<br/><br/>
<input className="Input-field" type="submit" value="Login"/>
<br/><br/>
</form>
<h1>{ ans }</h1>
</center>
</div>
</>
)
}

export default Login;