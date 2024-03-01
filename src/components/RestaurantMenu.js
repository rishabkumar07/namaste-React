import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);

    if(restInfo === null)
        return <Shimmer />;

    const {name,cuisines,sla, costForTwoMessage} = restInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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