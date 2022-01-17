import React from "react";


class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            loggedIn:true
        }
    }
    render(){
    return(
        <div className="profile">
            <p>WELCOME</p>
            <p> TO</p>
            <p> GENIEGRADZ</p>
        </div>
    )
    }
}

export default Profile;