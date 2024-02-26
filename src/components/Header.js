import LOGO_IMG from "../public/images/foodlogo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnLabel, setBtnLabel] = useState("Login");
    const onlineStatus = useOnlineStatus();

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
                    <li className="mr-6 font-medium">Cart</li>
                    <button className="font-medium" onClick={()=> {
                        btnLabel === "Login" ? setBtnLabel("Logout") : setBtnLabel("Login");
                    }}>{ btnLabel }</button>
                </ul>
            </div>
        </div>  
    );
}

export default Header;