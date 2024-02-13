import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    
    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();

        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurantList.length === 0) {
        return <Shimmer />;
    }
    
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestList = restaurantList.filter((restaurant) => {
                       return restaurant.info.avgRating > 4.3;
                    });
                    setRestaurantList(filteredRestList);
                }}>Top rated restaurants</button>
            </div>
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