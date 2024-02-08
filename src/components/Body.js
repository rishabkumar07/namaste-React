import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resContainer">
                {
                    restList.map( (restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} restListData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;