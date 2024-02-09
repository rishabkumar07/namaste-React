import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(restList);
    
    console.log(useState(restList));

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