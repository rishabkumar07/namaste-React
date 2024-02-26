import { CDN_LINK } from "../utils/constants";

const styleColors = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { restListData } = props;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = restListData?.info;

    return (
        <div className="my-3 w-60 mr-6 rounded-lg bg-gray-100 hover:bg-gray-200">
            <div className="res-logo">
                <img src={ CDN_LINK +  cloudinaryImageId } alt="res-logo"
                  className="w-60 h-40 object-cover" />
            </div>
            <div className="res-details px-4 py-2">
                <h4>{name}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating} stars</p>
                <p>{costForTwo}</p>
                <p>{sla?.slaString}</p>
            </div>

        </div>
    );
};

export default RestaurantCard;