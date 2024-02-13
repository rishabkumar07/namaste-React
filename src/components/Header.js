import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnLabel, setBtnLabel] = useState("Login");


    return (
        <div className = "header">
            <div className="logoContainer">
                <img src={LOGO_IMG}></img>
            </div>
            <div className="navItemsContainer">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
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