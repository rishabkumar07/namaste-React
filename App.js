import React from "react";
import ReactDOM from "react-dom/client";

/*Low Level Planning

1) Header
    - Logo
    - Nav Items(Home, About Us, Cart)

2) Body
    - Search
    - RestaurantContainer
        - Image
        - Name Of Rest, Rating, Cuisine, ETA(delivery time)

3) Footer
    - Copyright
    - Links
    - Address
    - Contact Info
*/

const restList = [
        {
            "info": {
            "id": "18772",
            "name": "California Burrito",
            "cloudinaryImageId": "zwwvf8n0jlo1bjx19qzg",
            "locality": "Marathahalli",
            "areaName": "Marathahalli",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food"
            ],
            "avgRating": 4.5,
            "parentId": "1252",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2024-02-08 00:00:00",
            "opened": true
            },
            "badges": {
            "textExtendedBadges": [
            {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {
            "badgeObject": [
            {
            "attributes": {
            "description": "",
            "fontColor": "#7E808C",
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available"
            }
            }
            ]
            }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-marathahalli-bangalore-18772",
            "type": "WEBLINK"
            }
        },
        {
        "info": {
        "id": "18976",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
        "locality": "Marathahalli",
        "areaName": "Marathahalli",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
        ],
        "avgRating": 4.3,
        "parentId": "2120",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 02:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/nandhana-palace-marathahalli-bangalore-18976",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "360",
        "name": "Beijing Bites",
        "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
        "locality": "Whitefield",
        "areaName": "Whitefield",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "Chinese",
        "Thai"
        ],
        "avgRating": 4.2,
        "parentId": "103",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 6.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "6.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 01:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/beijing-bites-whitefield-bangalore-360",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "154365",
        "name": "The Red Box",
        "cloudinaryImageId": "kbckmxkqrtla1irwnc57",
        "locality": "HAL 3rd Stage",
        "areaName": "jeevanbhimanagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Chinese"
        ],
        "avgRating": 4,
        "parentId": "1636",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-07 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/the-red-box-hal-3rd-stage-jeevanbhimanagar-bangalore-154365",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "234631",
        "name": "Truffles",
        "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
        "locality": "Kaveri Nagar",
        "areaName": "Garudacharpalya",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "American",
        "Continental",
        "Desserts",
        "Bakery",
        "Beverages",
        "Pastas",
        "Italian"
        ],
        "avgRating": 4.4,
        "parentId": "218065",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 00:00:00",
        "opened": true
        },
        "badges": {},
        "select": true,
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/truffles-kaveri-nagar-garudacharpalya-bangalore-234631",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "113317",
        "name": "Bakingo",
        "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
        "locality": "Brookefield",
        "areaName": "Bengaluru Urban",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "3818",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/bakingo-brookefield-bengaluru-urban-bangalore-113317",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "457821",
        "name": "Istah - The Mediterranean Way",
        "cloudinaryImageId": "67d4a416bf932f850b0a15ad33aae762",
        "locality": "Munnekolala",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Mediterranean",
        "Snacks",
        "Biryani",
        "Grill",
        "Kebabs",
        "Arabian",
        "Lebanese",
        "Beverages",
        "Desserts",
        "Italian",
        "Turkish"
        ],
        "avgRating": 4.4,
        "parentId": "3518",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
        "description": "OnlyOnSwiggy"
        }
        ],
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "OnlyOnSwiggy",
        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-munnekolala-marathahalli-bangalore-457821",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "23688",
        "name": "McDonald's",
        "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
        "locality": "Marathahalli",
        "areaName": "Brookefield",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 02:50:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-marathahalli-brookefield-bangalore-23688",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "21668",
        "name": "Subway",
        "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        "locality": "ITPL Main Road",
        "areaName": "NS Complex",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "2",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 03:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹449",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-itpl-main-road-ns-complex-bangalore-21668",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "10866",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Munnekolalu Village",
        "areaName": "Marathahalli",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 02:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-munnekolalu-village-marathahalli-bangalore-10866",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "29972",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "hkefhqm8lmn4tjdoashe",
        "locality": "Outer Ring Road",
        "areaName": "Marathahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 30,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-07 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-outer-ring-road-marathahalli-bangalore-29972",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "43910",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Marathahalli",
        "areaName": "Marathahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "avgRating": 4.1,
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-marathahalli-bangalore-43910",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "249717",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "Tulasi theater",
        "areaName": "Marathahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Biryani",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4,
        "parentId": "7918",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-07 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/the-good-bowl-tulasi-theater-marathahalli-bangalore-249717",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "352796",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "z8ugqbgldizxu8ol6dh5",
        "locality": "Marathahalli",
        "areaName": "Chinnappanhalli",
        "costForTwo": "₹120 for two",
        "cuisines": [
        "Ice Cream",
        "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.8",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹99"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/grameen-kulfi-marathahalli-chinnappanhalli-bangalore-352796",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "78138",
        "name": "Imperio Restaurant",
        "cloudinaryImageId": "a1629b9c7f59577a55411e94425c6d99",
        "locality": "kundalahalli",
        "areaName": "Brookefield",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Biryani",
        "Kebabs",
        "South Indian",
        "Tandoor",
        "Beverages",
        "North Indian",
        "Ice Cream",
        "Desserts"
        ],
        "avgRating": 4,
        "parentId": "5610",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 05:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/imperio-restaurant-kundalahalli-brookefield-bangalore-78138",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "62912",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "4edcfc66d91018d69894941ebb3c8d16",
        "locality": "Lakshminarayana Pura",
        "areaName": "Chinnapanna Halli",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "4925",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-07 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-lakshminarayana-pura-chinnapanna-halli-bangalore-62912",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "249713",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
        "locality": "Tulasi theater",
        "areaName": "Marathahalli",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "1803",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-07 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/behrouz-biryani-tulasi-theater-marathahalli-bangalore-249713",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "390620",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "Tulasi Theater Road",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-07 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-tulasi-theater-road-marathahalli-bangalore-390620",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "6911",
        "name": "FreshMenu",
        "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
        "locality": "Gulmohar road",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Continental",
        "Chinese",
        "Oriental",
        "Asian",
        "Healthy Food",
        "Fast Food",
        "Indian",
        "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "398",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 01:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹129"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/freshmenu-gulmohar-road-marathahalli-bangalore-6911",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "32398",
        "name": "The Bowl Company",
        "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
        "locality": "Munnekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Pan-Asian",
        "Continental",
        "North Indian",
        "Desserts",
        "American",
        "Asian",
        "Beverages",
        "Biryani",
        "Chinese",
        "European",
        "Grill",
        "Hyderabadi",
        "Indian",
        "Italian",
        "Kebabs",
        "Lucknowi",
        "Mediterranean",
        "Mexican",
        "Mughlai",
        "Oriental",
        "Pastas",
        "Punjabi",
        "Raja"
        ],
        "avgRating": 4.4,
        "parentId": "4317",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-02-08 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
        "description": "OnlyOnSwiggy"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "OnlyOnSwiggy",
        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/the-bowl-company-munnekollal-marathahalli-bangalore-32398",
        "type": "WEBLINK"
        }
        }
    ];


const Heading = () => {
    return (
        <div className = "header">
            <div className="logoContainer">
                <img src="https://cdn5.f-cdn.com/contestentries/1076909/19407170/596cbf037df9a_thumb900.jpg"></img>
            </div>
            <div className="navItemsContainer">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>  
    );
}

const styleColors = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = (props) => {
    const { restListData } = props;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = restListData?.info;

    return (
        <div className="res-card" style ={styleColors}>
            <div className="res-logo">
                <img src={ 
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
                    +  cloudinaryImageId }
                  alt="res-logo" />
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

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resContainer">
                {
                    restList.map( (restaurant) => (
                        <RestaurantCard restListData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

const Applayout = () => {
    return (
        <div className ="foodApp" >
            <Heading />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout />);