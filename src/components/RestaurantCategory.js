import MenuItems from "./MenuItems";
import { useState } from "react";

const RestaurantCategory= ({data}) => {
  const [showItems, setShowItems] = useState(false);

  const handleAccordion = () => {
    setShowItems(!showItems);
  }

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleAccordion}>
        <span className="font-bold text-base">{data.title} ({data?.itemCards.length})</span>
        <span>{"🔽"}</span>
      </div>
      {showItems && <MenuItems items = {data?.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory;