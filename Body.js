// import RestaurantCards from "./RestaurantCards";
// import { useEffect, useState, useContext } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../Utils/UserContext";
// import RestaurantCards, { withPromtedLabel } from "./RestaurantCards";
// const Body = () => {
//   //local state variable = superpowerful varialble
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const RestaurantCardPromoted = withPromtedLabel(RestaurantCards);

//   // normal JS Variable

//   // let listOfRestaurants = null;

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();

//     setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//   };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return (
//       <h1>
//         Looks Like you're Offline!! Please check your Internet Connection.
//       </h1>
//     );

//   // conditional Rendering

//   //    if (listOfRestaurants.length == 0){
//   //     return <Shimmer/>
//   //    }

//   const { loggedInUser, setUserName } = useContext(UserContext);

//   return setListOfRestaurants.length == 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter flex ">
//         <div className="search p-4 m-4">
//           <input
//             type="text"
//             className="border border-solid border-black rounded"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="px-4 py-2 bg-yellow-100 rounded-lg m-4"
//             onClick={() => {
//               console.log(searchText);

//               const filteredRestaurants = listOfRestaurants.filter((res) =>
//                 res.data.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurants(filteredRestaurants);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <button
//             className="px-4 py-2 bg-gray-100 rounded-lg"
//             onClick={() => {
//               const filterList = listOfRestaurants.filter(
//                 (res) => res.data.avgRating > 4
//               );
//               setListOfRestaurants(filterList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <label>UserName : </label>
//           <input
//             className="border border-black p-2"
//             value={loggedInUser}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="flex flex-wrap">
//         {filteredRestaurants.map((restaurant) => (
//           <Link
//             key={restaurant.data.id}
//             to={"/restaurants/" + restaurant.data.id}
//           >
//             {restaurant.data.promoted ? (
//               <RestaurantCardPromoted resData={restaurant} />
//             ) : (
//               <RestaurantCards resData={restaurant} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;




import RestaurantCards from "./RestaurantCards";
import { useState } from "react";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{

  //Local state variable 
  // const [listOfRestaurent, setListOfRestaurents] = useState(restList);//we created use state to create this listOfRestaurent
  //we have created this second function setListOfRestaurents to find the difference and re-render the page 
  //this is array distructing 
  //useState is giving us listOfResturent

  //fetching api / api call /direct data from swiggy wesite
  const [listOfRestaurent, setListOfRestaurents] = useState([]);
  const [filterRestaurent , setFilterReastaurent] = useState([]);
  const [searchText , setSearchText] = useState([]);
  
  console.log("body rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterReastaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) 
  return(
   <h1>You are offline... please check your nework.... </h1>
  );

// conditional rendering = 
//   if(listOfRestaurent.length === 0)
//   {
//      return <Shimmer />;
//   }

//   we can also render using ternary operator
   return listOfRestaurent.length === 0 ? (
   <Shimmer /> 
   ) : (
      <div className="body">
        <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black align-middle" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
         />
          <button className="px-4 py-2 bg-green-300 m-4 rounded-lg" onClick={
            () => {
              console.log(searchText);

              const filterRestaurentList = listOfRestaurent.filter(
                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilterReastaurent(filterRestaurentList);
            }}
            >Search Here</button>
        </div>  
        </div>
        <div className="flex flex-wrap">
         {filterRestaurent.map((restaurant)=>(
          <Link key = {restaurant?.info.id}
          to={"/restaurents/"+ restaurant?.info.id}
          >
         <RestaurantCards resData = {restaurant?.info}/>
          </Link>
        ))};
        </div>
      </div>
    );
  };

  export default Body;
