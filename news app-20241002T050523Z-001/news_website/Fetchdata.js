import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import{useNavigate}from "react-router-dom";
import axios from "axios";
import image1 from "./image1.jpg";

const Fetchdata = ({ cat }) =>{
const[Data,setData]=useState("");
  const nav=useNavigate();

const countries = {
    "India": "in", "USA": "us", "UK": "gb"
};
const [selectedCountry, setSelectedCountry] = useState("in");
const handleRadioChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  
  const fetchData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=f70eca7ba40941a2aecd13fbae04b758`;

    if (cat) {
        url += "&category=" + cat;
    }
    await axios.get(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
  
    
    
    await axios.get(url)
    .then((res)=>setData(res.data.articles));

  };
const lo = () => {
    localStorage.removeItem("un");
    nav("/login");
  };
useEffect(()=>{fetchData()},[selectedCountry,cat]);
useEffect(()=>{
const un=localStorage.getItem("un");
if(un==null)
{
nav("/login");

}



},[]);
 return(
    <>
{cat && (
<center>
        <Navbar />

</center>
 )}
<div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "1960vh",
        }}
      >
  <div className="container text-center   my-4"><h3 style={{textAlign:"center",fontSize:"150%",color :"orangered",height:"100%",backgroundColor:"black",borderRadius:"19px",width:"107%"}}>TOP HEADLINES</h3> </div>
   <div className="container d-flex justify-content-center align-item-center flex-column  my-3"style={{minHeight:"100vh"}}>
<div className="container my-4 d-flex justify-content-center">
          {Object.keys(countries).map((country) => (
            
            
            <div style={{display: 'inline-block', margin: '30px'}} key={country}>
  <input type="radio" style={{width: '30px', height: '30px'}} value={countries[country]} checked={selectedCountry === countries[country]} onChange={handleRadioChange} />
  <label style={{color: 'orangered', marginLeft: '10px'}}>{country}</label>
</div>


          ))}
</div>
  
	
   
   

   

   {Data ? Data.map((items,index)=>(
    <>
      <div className="container my-3  p-3 "  style={{width:"1100px",boxShadow:"2px 2px 10px silver", borderRadius:"10px", backgroundColor: 'white'}} >
       
  
		<h5 className="my-1 text-center">{items.title}</h5>
          <div className="d-flex justify-content-center align-item-center"><img src={items.urlToImage} alt="/" className="img-fluid " style={{width:"auto",height:"auto",objectFit:"cover",}}  /></div>
          
          <p className="my-1 text-center">{items.content}</p>
	
          <a href={items.url} target="blank">READ MORE</a>
	
          <hr style={{width:"100%",height:"100%",color:"red"}}></hr>
          <br/><br/><br/>
      </div>
   </>
   )) :"loading"}
   

</div>

{cat && (
<center>
<form onSubmit={lo}>
<input type="submit" value="Logout"/>
</form>
</center>
)}
</div>
      
       </>
  );
};
export default Fetchdata;

