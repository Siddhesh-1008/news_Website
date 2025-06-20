import Navbar from "./Navbar";
import { useState,useRef }from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {useNavigate}from "react-router-dom";
import{useEffect} from "react";
import image1 from "./image1.jpg";


function SignUp()
{
const nav=useNavigate();
const [un,setUn]=useState("");
const [pw1,setPw1]=useState("");
const [pw2,setPw2]=useState("");
const [ans,setAns]=useState("");
const rUn=useRef();
const rPw1=useRef();
const rPw2=useRef();

const hUn=(event)=>{setUn(event.target.value)}
const hPw1=(event)=>{setPw1(event.target.value);}
const hPw2=(event)=>{setPw2(event.target.value);}

useEffect(()=>{
const un=localStorage.getItem("un");
//VALUE IS PRESENT IN LOCAL STORAGE
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
 
if((pw1.length==0)||(pw2.length==0)||(pw1.length<8)||(pw2.length<8))
{
alert("ENTER PROPER PASSWORD WITH MINIMUM LENGTH 8");
rPw1.current.focus();
setPw1("");
rPw2.current.focus();
setPw2("");
return;
}
if(pw1==pw2)
{
const auth=getAuth();
createUserWithEmailAndPassword(auth,un,pw1)
.then(res=>nav("/login"))
.catch(err=>setAns("ALREADY EXISTS"))



}
else
{
setAns("INCORRECT PASSWORD");
}




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
<h1 className="header">SignUp</h1>
<br/>
			<input className="input-field" type="email" placeholder="ENTER Reg email" value={un} ref={rUn}
			onChange={hUn}/> <br/><br/>
			<input className="input-field" type="password" placeholder="ENTER Password" value={pw1} ref={rPw1}
			onChange={hPw1}/> <br/><br/>
			<input className="input-field" type="password" placeholder="CONFIRM UR PASSWORD" value={pw2} ref={rPw2}
			onChange={hPw2}/> <br/><br/>
			<input className="Input-field"type="submit" value="SignUp"/> <br/><br/>
		</form>
		<h1>{ ans }</h1>
	</center>
</div>
	</>


)
}


export default SignUp;