import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
		const { restaurantList, restListData } = useBody();
     
    //conditional rendering

    if(!onlineStatus) {
        return (<h1>Looks like your internet connection went down. 
            Please try re-connecting to internet.
        </h1>);
    }
    
    if(restaurantList.length === 0) {
        return <Shimmer />;
    }
    
    // console.log("Body component getting rendered");
    return (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input type="text" className="searchBox" value={ searchText } onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="search" onClick={()=> {
                        const filteredList = restListData.filter((rest)=> {
                            return rest?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                        });

                        setRestaurantList(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredRestList = restaurantList.filter((restaurant) => {
                       return restaurant.info.avgRating > 4.3;
                    });
                    //console.log("use State var changed");
                    setRestaurantList(filteredRestList);
                }}>Top rated restaurants</button>
            </div>
            {/* {console.log("Rest list getting mapped")} */}
            <div className="resContainer">
                {
                    restaurantList.map( (restaurant) => (
                        <Link key = {restaurant.info.id} to = {"/restaurant/" + restaurant.info.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <RestaurantCard restListData = {restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;