import { useEffect, useState } from "react";
import {CORS_LINK, REST_MENU_LINK} from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [restInfo, setRestInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = CORS_LINK + encodeURIComponent(REST_MENU_LINK + resId);
        const data = await fetch(url);
        const jsonData = await data.json();
        setRestInfo(jsonData?.data);
    }

    if(restInfo === null)
        return <Shimmer />;

    const {name,cuisines,sla, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="rest-info">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <p>{sla?.minDeliveryTime} - {sla?.maxDeliveryTime} mins</p>
            <p>{costForTwoMessage}</p>
            <ul>
                { itemCards.map((item)=> (
                    <li key={item?.card?.info?.id}>
                       <h4>{item?.card?.info?.name}</h4>
                       <p>{ "₹" + ((item?.card?.info?.defaultPrice)/100 
                            || (item?.card?.info?.price)/100) }</p> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;