import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//Chunking, Code Splitting, Dynamic Bundling
// Lazy Loading, On-demand-loading, Dynamic Import

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const Applayout = () => {
	const [userInfo, setUserInfo] = useState("Superman");

	useEffect(()=> {
		//make an api call to get logged in user info
		const data = { name : "Rishabh Raj" }
		setUserInfo(data.name);
	}, [])
	
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
				<div className ="foodApp" >
  				<Header />
    			<Outlet />
  			</div>
			</UserContext.Provider>
		</Provider>
		
		
  );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback = {<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback= {<Shimmer/>}> <Grocery /> </Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);