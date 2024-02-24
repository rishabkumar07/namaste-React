import { useState, useEffect } from "react";
import { CORS_LINK, REST_MENU_LINK } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(()=> {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = CORS_LINK + encodeURIComponent(REST_MENU_LINK + resId);
    const data = await fetch(url);
    const json = await data.json();
    setRestInfo(json?.data);
  }

  return restInfo;
}

export default useRestaurantMenu;