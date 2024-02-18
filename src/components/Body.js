import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const[searchText, setSearchText] = useState('');
    const [restListData, setRestListData] = useState([]); //copy of restaurantList
    
    useEffect(()=> {
        // console.log("Use Effect is called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = "https://corsproxy.org/?" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch(url);

        const jsonData = await data.json();
        
        //Whenever state variable changes, react triggers reconciliation cycle(re-renders the component)

        setRestListData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log("Will it come here before re-rendering");
    }
    //conditional rendering
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
                        <RestaurantCard key = {restaurant.info.id} restListData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;