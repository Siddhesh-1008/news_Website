import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Fetchdata from "./Fetchdata";
import Home from "./Home";
import About from "./About";
import Hero from "./Hero";
import ChangePassword from "./ChangePassword";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import {app} from "./FirebaseConfig";





function App() {
  return (
    <div className="App">
<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/signup" element={<SignUp/>}/>
			<Route path="/fp" element={<ForgotPassword/>}/>
			<Route  path="/general" element={<Fetchdata cat="general"/>} />
			<Route  path="/business" element={<Fetchdata cat="business"/>} />
			<Route  path="/entertainment" element={<Fetchdata cat="entertainment"/>} />
			<Route  path="/health" element={<Fetchdata cat="health"/>} />
			<Route  path="/science" element={<Fetchdata cat="science"/>} />
			<Route  path="/sports" element={<Fetchdata cat="sports"/>} />
			<Route  path="/technology" element={<Fetchdata cat="technology"/>} />
			<Route path="/cp" element={<ChangePassword/>}/>
			<Route  path="/hero" element={<Hero/>} />
			<Route path="/about" element={<About/>}/>
			<Route path="*" element={<Navigate to="/" />}/>
			
			<Route  path="/hero" element={<Hero/>} />
		</Routes>
	</BrowserRouter>     
   </div>
  );
}

export default App;
