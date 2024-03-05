import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        name: "Test name",
        location: "India"
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rishabkumar07");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo : jsonData
    });
  }

  componentDidUpdate() {
    console.log("Update is called");
  }

  componentWillUnmount() {
    console.log("Called before component is unmounted");
  }

  render () {
    const {name, location} = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Mail: raj@march7</h4>
        <UserContext.Consumer>
          {({loggedInUser}) => <h4>Current logged in user : {loggedInUser}</h4>}
        </UserContext.Consumer>
      </div>
    )
  }
}

export default UserClass;