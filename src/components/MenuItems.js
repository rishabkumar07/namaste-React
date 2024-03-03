import { CDN_LINK } from "../utils/constants";

const MenuItems = ({items}) => {
  return (
    <div>
      {items.map((item)=> {
        return (
          <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 
            text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <div>{item.card.info.name.replace(/(?: - )?(Veg|Non-Veg)/, '')}</div>
                <div className="text-sm pt-1">₹ {item.card.info.price ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                </div>
              </div>
              <p className="text-xs pt-5">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 relative">
              <div>
                <button className="p-0 mx-16 rounded-lg bg-black text-white shadow-lg
                  absolute bottom-4 left-5 w-12 h-6 text-sm">
                  Add +
                </button>
              </div>
              <img src={CDN_LINK + item.card.info.imageId} className="w-full" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MenuItems;