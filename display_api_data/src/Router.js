import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile, UserList } from "./Components";

const Router=()=>{
    return(
        <>
         <BrowserRouter>
            <Routes>
                <Route exact path="" element={<UserList/>} />
                <Route exact path="profile" element={<Profile />} /> 
            </Routes>
        </BrowserRouter>
        
        </>
    )

}
export default Router;