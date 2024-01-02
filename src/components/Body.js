
/*
import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant.name.includes(searchTxt)
     );
     return filterData;
 }
const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[restaurants,setRestaurants]=useState(restaurantList)
    const[searchClicked,setSearchClicked]=useState("false")
    console.log("render()")
    
    // dependency array dependens on searchTxt
    // useEffect(()=>{
    //     console.log("call this when dependency is changed")
    
    // }, [searchTxt])

    // empty dependecy array
    // useEffect(()=>{
    //     console.log("call this when dependency is changed")
        
    // },[])

    // dependency array dependens on restaurants
    useEffect(()=>{
        console.log("call this when dependency is changed")
        
    },[restaurants])

    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}/>
           
            <button onClick={()=>{
              //need to filter data
              const data=filterData(searchTxt,restaurants)
            //   update state-restaurants
            setRestaurants(data)
            } }>Search</button>


        </div>
        <h1>{searchClicked}</h1>
        <div className="restaurant-list">
           {restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;
*/



// #######################################################################

/*

import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant.name.includes(searchTxt)
     );
     return filterData;
 }
const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[restaurants,setRestaurants]=useState(restaurantList)
    const[searchClicked,setSearchClicked]=useState("false")
   
// useEffect(()=>{
    //     console.log("useEffect")
        
    // },[])

    // console.log("render()")


    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
    }

    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}
                />
           
            <button onClick={()=>{
            const data=filterData(searchTxt,restaurants)
            
            setRestaurants(data)

            
               
             } }>Search</button>


        </div>
        <h1>{searchClicked}</h1>
        <div className="restaurant-list">
           {restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;


*/


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

/*
import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant.name.includes(searchTxt)
     );
     return filterData;
 }
const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[restaurants,setRestaurants]=useState(restaurantList)
    

    
    
    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("render")
    return(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}
                
                
                   />
           
            <button onClick={()=>{
             const data=filterData(searchTxt,restaurants)
             setRestaurants(data)
 } }>Search</button>


        </div>
      
        <div className="restaurant-list">
           {restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;
*/

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

/*
//conditional rendering
//if restaurant is empty =>display shimmer ui
//if restaurant has data=>display actual ui
import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant.info.name.includes(searchTxt)
     );
     return filterData;
 }
const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[restaurants,setRestaurants]=useState([])
    

    
    
    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
        
    }
    console.log("render")
    return(restaurants.length===0)? <Shimmer/> :(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}
                
                
                   />
           
            <button onClick={()=>{
             const data=filterData(searchTxt,restaurants)
            setRestaurants(data)} }>Search</button>


        </div>
        
        <div className="restaurant-list">
           {restaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

*/



// (((((((((((((((((((((((((((((())))))))))))))))))))))))))))))
/*
//we maintain seperate state variables for both rstaurants and filter reastarants
//in the above code search function doesnot work bcz restaurantslist is empty
import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant.info.name.includes(searchTxt)
     );
     return filterData;
 }
const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[allRestaurants,setAllRestaurants]=useState([])
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    

    
    
    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("render")


    return (allRestaurants.length===0)? (<Shimmer/>) :(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}
                
                
                   />
           
            <button onClick={()=>{
             

              const data=filterData(searchTxt,allRestaurants)
            
            setAllRestaurants(data)

            
               
             } }>Search</button>


        </div>
        
        <div className="restaurant-list">
           {filteredRestaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

*/

// ((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))


/*
import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant.info.name.includes(searchTxt)
     );
     return filterData;
 }
const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[allRestaurants,setAllRestaurants]=useState([])
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    

    
    
    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("render")
//how to avoid rendering components ?by using optional chianaing and conditional rendering
//early return
if(!allRestaurants) return null;



    return (allRestaurants?.length===0)? (<Shimmer/>) :(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}/>
           
            <button onClick={()=>{
                const data=filterData(searchTxt,allRestaurants)
                setAllRestaurants(data)
                } }>Search</button>
                </div>
       
        <div className="restaurant-list">
           {filteredRestaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

*/


// *********************************************

import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

 function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
     );
     return filterData;
 }
const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[allRestaurants,setAllRestaurants]=useState([])
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    

    
    
    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("render")
//how to avoid rendering components ?by using optional chianaing and conditional rendering
//early return
if(!allRestaurants) return null;

if(filteredRestaurants.length===0)
  return <h1>No Restaurant match yoyr filter</h1>;

    return (allRestaurants?.length===0)? (<Shimmer/>) :(
        <>
        <div className="search-container">
            <input type="search" 
                   className="search-input"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}/>
           
            <button onClick={()=>{
                const data=filterData(searchTxt,allRestaurants)
                console.log(data)
                setFilteredRestaurants(data)
                } }>Search</button>
                </div>
       
        <div className="restaurant-list">
           {filteredRestaurants.map((restaurant)=>{
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
           })}
       
       </div>
       </>
    );
};

export default Body;

