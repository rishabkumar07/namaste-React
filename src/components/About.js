import User from "./User";
import UserClass from "./UserClass";
import User from "./User";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>Raj Restaurant in Jh</h2>
            {/* <User name = {"Raj (function)"} location= {"Bokaro (function)"}/> */}
            <UserClass  name = {"Raj (class)"} location= {"Bokaro (class)"}/>
        </div>
    );
};

export default About;