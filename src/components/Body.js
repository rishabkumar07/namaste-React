import RestaurantCard, { withFlatOffLabel } from "./RestaurantCard";
import {useState, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const onlineStatus = useOnlineStatus();
	const { restaurantList, restListData, setRestaurantList } = useBody();
  const RestaurantCardBanner = withFlatOffLabel(RestaurantCard);
	const { loggedInUser, setUserInfo } = useContext(UserContext);
     
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
  	<div className="py-3 px-24">
      <div className="flex my-3">
        <div className="search-container">
          <input type="text" className="border border-solid search-box mr-2 py-[2px] px-[6px] w-60" value={ searchText } onChange={(e)=> {
            setSearchText(e.target.value);
          }}></input>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
            hover:text-white border border-blue-500 hover:border-transparent rounded 
            mr-4 ml-2 py-[2px] px-[6px]" 
            onClick={()=> {
              const filteredList = restListData.filter((rest)=> {
                return rest?.info?.name.toLowerCase().includes(searchText.toLowerCase());
          		});
              setRestaurantList(filteredList);
            	}}>Search
					</button>
        </div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
          hover:text-white border border-blue-500 hover:border-transparent rounded 
          py-[2px] px-[6px] ml-24" 
          onClick={() => {
            const filteredRestList = restaurantList.filter((restaurant) => {
              return restaurant.info.avgRating > 4.3;
            });
            //console.log("use State var changed");
            setRestaurantList(filteredRestList);
          }}>Top rated restaurants
				</button>
				<div className="ml-20 mr-2">
					<label className="mr-2">UserName : </label>
        	<input type="text" className=" userNameSearchContainer border border-solid 
						mr-2 py-[2px] px-[6px] w-60" value={loggedInUser} onChange={(e)=> setUserInfo(e.target.value)}>
					</input>
				</div>	
      </div>
      {/* {console.log("Rest list getting mapped")} */}
      <div className="flex flex-wrap">
      {
        restaurantList.map( (restaurant) => (
          <Link key = {restaurant.info.id} to = {"/restaurant/" + restaurant.info.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          {
            restaurant.info?.aggregatedDiscountInfoV3?.header ? 
						<RestaurantCardBanner restListData = {restaurant}/> :  
						<RestaurantCard restListData = {restaurant}/>
          }
          </Link>
        ))
      }
    	</div>
  	</div>
	);
}

export default Body;