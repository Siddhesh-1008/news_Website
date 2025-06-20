import Navbar from "./Navbar";
import{useNavigate}from "react-router-dom";
import{useEffect} from "react";

function About()
{
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
		<Navbar/>
		<h1>About</h1>
	</center>
	</>
	);
}
export default About;