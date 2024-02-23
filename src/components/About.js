import User from "./User";
import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
          <h1>About Us</h1>
          <h2>Raj Restaurant in Jh</h2>
          <UserClass />
        </div>
      );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>Raj Restaurant in Jh</h2>
//             {/* <User name = {"Raj (function)"} location= {"Bokaro (function)"}/> */}
//             <UserClass  name = {"Raj (class)"} location= {"Bokaro (class)"}/>
//         </div>
//     );
// };

export default About;