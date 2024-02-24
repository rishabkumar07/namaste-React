import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {CORS_LINK, REST_LINK} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const[searchText, setSearchText] = useState('');
    const [restListData, setRestListData] = useState([]); //copy of restaurantList
    
    const onlineStatus = useOnlineStatus();
     
    useEffect(()=> {
        // console.log("Use Effect is called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = CORS_LINK + encodeURIComponent(REST_LINK);
        const data = await fetch(url);

        const jsonData = await data.json();
        
        //Whenever state variable changes, react triggers reconciliation cycle(re-renders the component)

        setRestListData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log("Will it come here before re-rendering");
    }
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