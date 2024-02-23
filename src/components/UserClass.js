import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2 : 2 
    }
  }

  render () {
    const {name, location} = this.props;
    const {count1} = this.state;

    return (
      <div className="user-card">
        <h1>Count : {count1}</h1>
        <button onClick= {()=> {
          this.setState({
            count1 : this.state.count1 + 1,
          })
        }}>Counter</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Mail: raj@march7</h4>
      </div>
    )
  }
}

export default UserClass;