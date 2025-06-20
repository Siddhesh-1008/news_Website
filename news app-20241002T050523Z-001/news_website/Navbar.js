import React, { useState } from "react"
import { Link } from "react-router-dom";
export const Navbar = () =>{
  const un=localStorage.getItem("un");
const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
  <div><nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/"><h5>NEWS HUB</h5></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
       {(un==null)&&(<Link class="nav-link active text-white" aria-current="page" to="/login">LOGIN</Link>)}
        </li>
	<li class="nav-item">
       {(un==null)&&(<Link class="nav-link active text-white" aria-current="page" to="/signup">SIGNUP</Link>)}
        </li>
	<li class="nav-item">
       {(un==null)&&(<Link class="nav-link active text-white" aria-current="page" to="/fp">Forgot Password</Link>)}
        </li>
	
        
        <li class="nav-item">
       {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/home">Home</Link>)}
        </li>
        <li class="nav-item">
  {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/general">General</Link>)}
        </li> 
        <li class="nav-item">
        {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/business">Business</Link>)}
        </li>
        <li class="nav-item">
       {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>)}
        </li>
        <li class="nav-item">
       {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/health">Health</Link>)}
        </li>
        <li class="nav-item">
       {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/science">Science</Link>)}
        </li>
        <li class="nav-item">
       {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/sports">Sports</Link>)}
        </li> <li class="nav-item">
        {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/technology">Technology</Link>)}
        </li>
<li class="nav-item">
       {(un!=null)&&(<Link class="nav-link active text-white" aria-current="page" to="/cp">Change Password</Link>)}
        </li>
      </ul>
     
    </div>
  </div>
</nav></div>
  );
};

export default Navbar;

