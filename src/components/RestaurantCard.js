import { CDN_LINK } from "../utils/constants";

const styleColors = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { restListData } = props;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = restListData?.info;

    return (
        <div className="res-card" style ={styleColors}>
            <div className="res-logo">
                <img src={ CDN_LINK +  cloudinaryImageId } alt="res-logo" />
            </div>
            <div className="res-details">
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