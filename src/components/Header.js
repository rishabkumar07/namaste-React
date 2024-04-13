import LOGO_IMG from "../public/images/foodlogo.png"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnLabel, setBtnLabel] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    return (
        <div className = "flex justify-between items-center px-5 bg-yellow-50 shadow-lg sm:bg-pink-100 lg:bg-green-5" >
            <div className="w-28">
                <img src={LOGO_IMG} alt="Logo"></img>
            </div>
            <div className="pr-8">
                <ul className="flex m-0 p-0 list-none">
                    <li className="mr-7 font-medium">
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="mr-6 font-medium">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-6 font-medium">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-6 font-medium">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="mr-6 font-medium">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="mr-6 font-medium">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>  
                    </li>
                    <button className="font-medium" onClick={()=> {
                        btnLabel === "Login" ? setBtnLabel("Logout") : setBtnLabel("Login");
                    }}>{ btnLabel }</button>
                    <li className="ml-6 font-medium">{loggedInUser}</li>
                </ul>
            </div>
        </div>  
    );
}

export default Header;