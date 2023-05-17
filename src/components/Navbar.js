import React from "react";
import {Redirect} from "react-router-dom";
import {showerrorNotification,showSuccessNotification}  from '../../src/notifications/noty';

class Navbar extends React.Component{
    constructor()
    {  
        super();
        this.state=
        {
            loggedIn:true
        }
    }
    
    handleClick=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem('email');
        this.setState({loggedIn:false})
        window.location.href='/';
        showSuccessNotification('Logged out');
    }
    render(){
        const buttonText=this.state.loggedIn?"Sign Out":"Sign in";
    return (
        <div className="nav">
            <div className="menu">
                <img src="https://cdn-icons.flaticon.com/png/512/4204/premium/4204600.png?token=exp=1641914120~hmac=1c5f4e5721db3b82b1dc2e94c019059c" alt="menu" />
            </div>
            <p>Geniegradz a gamified meme based platform</p>
            {this.state.loggedIn &&
            <div className= "signOut">
                <button onClick={this.handleClick}>Sign Out</button>
            </div>}
            <div className="user">
                <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1641913492~hmac=7730e22cad7d9362e911e6ea03584c47" alt="user" />
            </div>
        </div>
        );
    }
}
export default Navbar;