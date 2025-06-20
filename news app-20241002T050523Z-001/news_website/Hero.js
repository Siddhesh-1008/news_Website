import Navbar from "./Navbar";
import{useNavigate}from "react-router-dom";
import{useState,useEffect} from "react";
import React from "react"

const Hero = ({ cat }) =>{
const navigate = useNavigate();
const[user,setUser]=useState("");
useEffect(()=>{
const un=localStorage.getItem("un");
if(un==null)
{
navigate("/login");
}
else
{	
setUser(un);
}

},[]);

const handleLogout = () => {
  localStorage.removeItem("un");
  navigate("/login");
};

  return(
    <>
<Navbar/>
    <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column" style={{height:"50vh"}}>
   <h2 style={{fontSize:"50px",color :"orangered" }}>NEWS HUB</h2>
   <h5 style={{textAlign:"center"}}> THE WHOLE WEBSITE BUILT WITH NEWS API</h5>
	<center>
	<h1 style={{textAlign:"center",fontSize:"100%",color :"orangered",height:"50%",backgroundColor:"white",borderRadius:"19px",width:"120%"}}>{ user }</h1>
	<button className="btn btn-danger" onClick={handleLogout}>Logout</button>
</center>
</div>
    </>
  );
};
export default Hero;
