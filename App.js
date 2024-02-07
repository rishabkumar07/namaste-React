import React from "react";
import ReactDOM from "react-dom/client";

/*Low Level Planning

1) Header
    - Logo
    - Nav Items(Home, About Us, Cart)

2) Body
    - Search
    - RestaurantContainer
        - Image
        - Name Of Rest, Rating, Cuisine, ETA(delivery time)

3) Footer
    - Copyright
    - Links
    - Address
    - Contact Info
*/


const Heading = () => {
    return (
        <div className = "header">
            <div className="logoContainer">
                <img src="https://cdn5.f-cdn.com/contestentries/1076909/19407170/596cbf037df9a_thumb900.jpg"></img>
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

const styleColors = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = () => {
    return (
        <div className="res-card" style ={styleColors}>
            <div className="res-logo">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85825a6d74b1059a63a9b688de9f67ce" 
                  alt="res-logo" />
            </div>
            <div className="res-details">
                <h4>NIC Ice Creams</h4>
                <p>Ice Creams, Desserts</p>
                <p>4.7 stars</p>
                <p>25-30 mins</p>
            </div>

        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resContainer">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}

const Applayout = () => {
    return (
        <div className ="foodApp" >
            <Heading />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout />);