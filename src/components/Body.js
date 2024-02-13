import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    
    useEffect(()=> {
        console.log("Use Effect is called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        
        //Whenever state variable changes, react triggers reconciliation cycle(re-renders the component)

        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //conditional rendering
    if(restaurantList.length === 0) {
        return <Shimmer />;
    }
    
    console.log("Body component getting rendered");
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestList = restaurantList.filter((restaurant) => {
                       return restaurant.info.avgRating > 4.3;
                    });
                    console.log("use State var changed");
                    setRestaurantList(filteredRestList);
                }}>Top rated restaurants</button>
            </div>
            {console.log("Rest list getting mapped")}
            <div className="resContainer">
                {
                    restaurantList.map( (restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} restListData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;