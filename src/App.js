import React from "react";

import ReactDOM from "react-dom/client";  

import Header from "./components/Header";

import Body from "./components/Body";

import Footer from "./components/Footer";

/**
             * Header
             *   -Logo
             *   -NavItems
             *   -Cart
             *   
             *   Body
             *     -SearcHbar
             *     -restaurantList
             *     -restaurantCard
             *       -Image
             *       -Name
             *       -Rating
             *       -Cuisines
             * 
             *    Footer
             *     -Links 
             *     -CopyRights
             * 
             *  
             * 
             */ 


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
