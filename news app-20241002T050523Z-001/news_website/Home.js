import React from "react";
import Hero from "./Hero";
import Fetchdata from "./Fetchdata";
import Navbar from "./Navbar";
import {getAuth,signOut} from "firebase/auth";
import{ useNavigate } from "react-router-dom";
import{ useState,useEffect } from "react";


function Home()
{
const nav=useNavigate();
const[user,setUser]=useState("");

const lo=(event)=>{
event.preventDefault();
const auth=getAuth();
localStorage.clear();
signOut(auth)
.then(res=>nav("/login"))
.catch(err=>console.log(err))
}

useEffect(()=>{
let u=localStorage.getItem("un");
if(u==null)
{
nav("/login")
}
else
{	
setUser(u);
}


},[])








return(
<>

<div>
  < Hero/>
<Fetchdata />
    </div>

</>
)



}

export default Home;