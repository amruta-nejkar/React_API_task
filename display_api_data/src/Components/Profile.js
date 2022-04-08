import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Module/Header";


const Profile=()=>{
    const location=useLocation();
    console.log("user",location.state)
    return(
        <>
        <Header/>
        <div>
            <p>{location.state.id}</p>
            <p>{location.state.email}</p>
            <p>{location.state.first_name}</p>
            <p>{location.state.last_name}</p>
            <p>{location.state.avatar}</p>
        </div>
         
        </>
    )

}
export default Profile;