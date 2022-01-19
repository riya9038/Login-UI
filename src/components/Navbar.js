import React from "react";
import {Redirect} from "react-router-dom";
import {showerrorNotification,showSuccessNotification}  from '../../src/notifications/noty';

class Navbar extends React.Component{
    constructor()
    {  
        super();
        this.state=
        {
            loggedIn:localStorage.getItem("newtoken"),
            buttonText:"sign in"
        }
    }
    

    handleClick=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem('email');
        localStorage.setItem("newtoken",false);
        this.setState({loggedIn:false})
        window.location.href='/';
        showSuccessNotification('Logged out');
    }
    handleHello=()=>{
        console.log("hello")
        console.log("loggedin",this.state.loggedIn)
        if(this.state.loggedIn!=localStorage.getItem("newtoken")){
            this.setState({
                loggedIn:!this.state.loggedIn
            })
        }
        // if(localStorage.getItem("newtoken")){
        //     this.setState({
        //         buttonText:"sign out"
        //     })
        // }
        // if(!localStorage.getItem("newtoken")){
        //     this.setState({
        //         buttonText:"sign in"
        //     })
        // }
        console.log("loggedin",this.state.loggedIn)
    }
    render(){
        this.handleHello();
        // let buttonText=this.state.loggedIn?"Sign Out":"Sign in";
        console.log("localstorage",localStorage.getItem("newtoken"));

    return (
        <div className="nav">
            <div className="menu">
                <img src="https://cdn-icons.flaticon.com/png/512/4204/premium/4204600.png?token=exp=1641914120~hmac=1c5f4e5721db3b82b1dc2e94c019059c" alt="menu" />
            </div>
            <p>Geniegradz a gamified meme based platform</p>
            <div className= "signOut">
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
            <div className="user">
                <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1641913492~hmac=7730e22cad7d9362e911e6ea03584c47" alt="user" />
            </div>
        </div>
        );
    }
}
export default Navbar;