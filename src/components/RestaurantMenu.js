import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if(restInfo === null)
        return <Shimmer />;

    const {name,cuisines,sla, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;

	  const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => 
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div className="rest-info text-center">
		      <h1 className="font-bold mt-3 text-lg">{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
          <div>
            <span className="mr-2 font-bold text-xs">{sla?.minDeliveryTime} - {sla?.maxDeliveryTime} mins</span>
            <span className="font-bold text-xs">{costForTwoMessage}</span>
          </div>
          {
            categories.map((category, index) => {
              return (
              //Controlled Component
              <RestaurantCategory key = {category?.card?.card?.title} 
                  data = {category?.card?.card}
                  showItems = {index === showIndex ? true : false} 
                  setShowIndex = {() => showIndex === index ? setShowIndex(null) : setShowIndex(index) }
                />
              ) 
            })
          }
        </div>
    );
}

export default RestaurantMenu;