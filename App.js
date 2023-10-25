import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import About from "./components/About";
import Contact from "./Components/Contacts";
import Error from "./components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
// import { Provider } from "react-redux";
// import appStore from "./Utils/appStore";
//import Cart from "./Components/Cart";
import About from "./Components/About";

const Glocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [UserName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Prasad Abnave",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser: UserName,  setUserName}}>
      <div className="app">
      <UserContext.Provider value={{loggedInUser: UserName}}>
        <Header />
        </UserContext.Provider> 
        <Outlet />
        </div>
        </UserContext.Provider> 
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Glocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
