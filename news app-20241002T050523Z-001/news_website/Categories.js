import React from "react"

import{useNavigate}from "react-router-dom";
import{useEffect} from "react";

const Categories = ({cat}) =>{
const nav=useNavigate();

useEffect(()=>{
const un=localStorage.getItem("un");
if(un==null)
{
nav("/login");

}



},[]);
  return(
    <>
<center>

<div style={{minHeight:"100vh"}}>{cat}</div>
</center>
       </>
  );
};
export default Categories;








