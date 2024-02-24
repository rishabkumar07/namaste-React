import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnLabel, setBtnLabel] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className = "header">
            <div className="logoContainer">
                <img src={LOGO_IMG}></img>
            </div>
            <div className="navItemsContainer">
                <ul className="nav-items">
                    <li>
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=> {
                        btnLabel === "Login" ? setBtnLabel("Logout") : setBtnLabel("Login");
                    }}>{ btnLabel }</button>
                </ul>
            </div>
        </div>  
    );
}

export default Header;