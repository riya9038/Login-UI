import {useState} from "react";

const Student_Login=()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     return(
       <div className="home-container">
              <div className="left info">
                <input type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required></input>
                <input type="text" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required></input>
                <button className="set"> Login </button>
                <p>OR</p>
                <div className="google">
                    <img src="https://assets.materialup.com/uploads/3a91ac9f-f60f-4370-b58b-171d988c3b4b/preview.jpg" alt=""></img>
                    Login using Google
                </div>
              </div>
              <div className="right info">
                <img src="https://ipac.page/images/brand-logo-1.jpg" alt="logo"></img>
                <div className="tabs">
                    <div className="student">Student</div>
                    <div className="teacher">Tutor</div>
                </div>
                
              </div>
        </div>
     )
 }
 export default Student_Login;