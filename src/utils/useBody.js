import { useState, useEffect } from "react";
import { CORS_LINK, REST_LINK } from "./constants";

const useBody = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restListData, setRestListData] = useState([]); //copy of restaurantList

  useEffect(()=> {
    fetchData();
  })

  const fetchData = async () => {
    const url = CORS_LINK + encodeURIComponent(REST_LINK);
    const data = await fetch(url);
    const jsonData = await data.json();
    
    //Whenever state variable changes, react triggers reconciliation cycle(re-renders the component)

    setRestListData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return {
    restaurantList,
    restListData
  }
}

export default useBody;