import { useState } from "react";

const Title=()=>{
    return(
        <h1>FoodVilla</h1>
    )
}

const Header=()=>{

    const[isLoggedIn,setIsLoggedIn]=useState(false)
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {/* we write only js expressions inside curly braces .we dont write js statements
        like 
        let a=10 */}
        {/* {isLoggedIn?<button>LogOut</button>:<button>LogIn</button>} */}

        {isLoggedIn ?(
        <button onClick={()=>
        setIsLoggedIn(false)}>LogOut</button>
        ):
        (<button onClick={()=>
            setIsLoggedIn(true)}>LogIn</button>
            )
        }
        </div>
    );
};

export default Header;