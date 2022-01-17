import React, {useState} from "react";
import {Redirect} from 'react-router-dom';
import qs from 'qs';
import axios from "axios";
import {showerrorNotification,showSuccessNotification}  from '../../src/notifications/noty';
import {GoogleLogin, GoogleLogout} from "react-google-login";
import { refreshTokenSetup } from '../utils/refreshToken';

const sessionUrl='http://localhost:8000/create-session';
const googleUrl='http://localhost:8000/user/auth/google';

class Admin_Login extends React.Component{

  constructor()
  {
      super();
      let loggedIn=false;

      const token=localStorage.getItem('token');
      if(token)  
      loggedIn=true;
 
      this.state={
          email:'',
          password:'',
          loggedIn
          }
  }

  handleChange=(e)=>
  {  this.setState(
      {
      [e.target.id]:[e.target.value]
      });
  }


  handleSubmit=(e)=>
  {   
    e.preventDefault();

    const {email,password}=this.state;
    const body= qs.stringify({email:email,password:password});
    axios.post(sessionUrl, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(data=>
        {
          if(data.status === 200)
          {

              console.log(data.data.data.user.email);
              localStorage.setItem('token',data.data.data.token);
              // localStorage.setItem('name',data.data.data.user.name);
              localStorage.setItem('email',data.data.data.user.email);
              localStorage.setItem('id',data.data.data.user._id);
              showSuccessNotification('Logged in');
              this.setState({loggedIn:true});

            }
            
        }).catch(error=>
            {
              console.log('in catch',error);
              showerrorNotification(error.response.data.message)
            });
          }
    // handleLogin = async googleData => {
    //         const res = await fetch(googleUrl, {
    //             method: "POST",
    //             body: JSON.stringify({
    //             token: googleData.tokenId
    //           }),
    //           headers: {
    //             "Content-Type": "application/json"
    //           }
    //         })
    //         const data = await res.json()
    //         // store returned user somehow
    //       }
          onSuccess=(res)=>{
            console.log('[Login Success] currentUser:',res.profileObj);
            window.location.href='/profile';
            refreshTokenSetup(res);
          }
          onFailure=(res)=>{
            console.log('[Login Failed] res:',res);
          }
          onLogOutSuccess=()=>{
            alert("logout successfully");
          }

    render(){
      if(this.state.loggedIn)
        {
            return <Redirect to='/profile' />
        }
     return(
       <div className="home-container">
            <div className="left info">
              <form onSubmit={this.handleSubmit}>

                <input type="email" id="email" placeholder="Enter your email" onChange={this.handleChange} required></input>
                <input type="text" id="password" placeholder="Enter password" onChange={this.handleChange} required></input>
                <button className="set"> Login </button>
                <p>OR</p>
                <GoogleLogin
                    clientId="477430375014-9529onq4cen0jifhh9smrles8dqf9jm8.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                />
                {/* <GoogleLogout
                    clientId="477430375014-9529onq4cen0jifhh9smrles8dqf9jm8.apps.googleusercontent.com"
                    buttonText="LogOut"
                    onLogoutSuccess={this.onLogOutSuccess}
                    cookiePolicy={'single_host_origin'}
                /> */}
              </form>
            </div>
            <div className="right info">
              <img src="https://ipac.page/images/brand-logo-1.jpg" alt="logo"></img>
              <div className="tabs">
                  <div className="student">School</div>
                  <div className="teacher">Admin</div>
              </div>
              
            </div>
        </div>
     )
    }
 }
 export default Admin_Login;