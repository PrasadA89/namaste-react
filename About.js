// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";
// import UserContext from "../Utils/UserContext";

// class About extends Component {
//   constructor(props) {
//     super(props);

//     //console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     //console.log("Parent Component Did Mount");
//   }

//   render() {
//     //console.log("Parent Render");

//     return (
//       <div>
//         <h1>About Class Component</h1>
//         <div>
//           LoggedIn User
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="text-xl font-bold">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         <h2>This is Namaste React Web Series</h2>
//         <UserClass name={"First"} location={"Dehradun Class"} />
//       </div>
//     );
//   }
// }

// export default About;

import { About_us_image } from "../utils/constants";
const About = () =>{
    return (
        <div className="f">
               {/* <div className="object-none object-right-top bg-gree-200 w-24 h-24 my-4 "> */}
                 <img className = "float-right w-50 p-20" src={About_us_image}/> 
    
            <h1 className="font-bold text-5xl p-35 px-10 pt-36 m-35 text-left">Welcome to the world of</h1>
            <h1 className="font-bold text-9xl px-10 animate-pulse text-green-400">Tasty & Fresh Food</h1>
           <h2 className="font-bold text-3xl  py-5 px-5 ">"Better you will feel if you eat a FoodFire healthy meal"</h2>
          
            {/* <UserCard/> */}
            {/* <UserClass/> //class based component  */}
        </div>
    );
};

export default About;