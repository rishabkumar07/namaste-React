import { LOGO_IMG } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>  
    );
}

export default Header;