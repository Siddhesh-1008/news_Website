import React from "react";
import Navbar from "./Navbar";
import { useState,useRef } from "react";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import image1 from "./image1.jpg";

function ChangePassword() 
{
const nav = useNavigate();
const [pw1, setPw1] = useState("");
const [pw2, setPw2] = useState("");
const [ans, setAns] = useState("");
const rPw1=useRef();
const rPw2=useRef();

useEffect(() => {
			const un = localStorage.getItem("un");
	if (un == null) 
	{
		nav("/login");
	}
}, []);

const hPw1 = (event) => {
setPw1(event.target.value);
};
const hPw2 = (event) => {
setPw2(event.target.value);
};

	
	

const save = (event) => {
event.preventDefault();
if((pw1.trim().length==0)||(pw2.trim().length==0))
	{
	alert("U NEED TO ENTER PASSWORD");
	rPw1.current.focus();
	rPw2.current.focus();
	setPw1("");
	setPw2("");
	return;
	}
	 
	if((pw1.length==0)||(pw1.length<8)||(pw2.length==0)||(pw2.length<8))
	{
	alert("ENTER PROPER PASSWORD WITH MINIMUM LENGTH 8");
	rPw1.current.focus();
	setPw1("");
	rPw2.current.focus();
	setPw2("");
	return;
	}
if (pw1 === pw2) {
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
updatePassword(user, pw1)
.then(() => {
localStorage.clear();
nav("/login");
})
.catch((err) => setAns("Error: " + err));
});
} else {
setAns("Passwords do not match");
}
};

return (
<>
<center>
<Navbar />
<div
style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "1960vh",
        }}
>
<form onSubmit={save}>
<br />
<h1 className="header">Change Password</h1>
<br />
<input
           type="password"
           placeholder="Enter new password"
           onChange={hPw1}
		   value={pw1} ref={rPw1} 
         />
<br />
<br />
<input
           type="password"
           placeholder="Confirm new password"
		   value={pw2} ref={rPw2} 
           onChange={hPw2}
         />
<br />
<br />
<input type="submit" value="Change Password" />
<br />
<br />
</form>
<h1>{ans}</h1>
</div>
</center>
</>
);
}


export default ChangePassword;