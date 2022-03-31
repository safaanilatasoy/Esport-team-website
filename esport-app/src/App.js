import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users"

class App extends Component {
 
  addUser(newUser) {
    let updatedUsers = this.deleteUser.bind(this);

    updatedUsers.push(newUser);

    this.setState({
      users: updatedUsers
    });
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;
    
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    this.setState({
      users: updatedUsers
    })
  }
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      users: [
        {
          id : 1,
          Game: "CS:GO",
          name : "Mathieu Herbaut",
          nickname: "Zywo",
          team: "Team Vitality",
          country: "France",
          position: "AWPer"
        },
        {
          id : 2,
          Game: "CS:GO",
          name : "Oleksandr Kostyliev",
          nickname: "S1mple",
          team: "Natus Vincere",
          country: "Ukraine",
          position: "AWPer"
        },
        {
          id : 3,
          Game: "CS:GO",
          name : "Nicolai Reedtz",
          nickname: "Dev1ce",
          team: "Ninjas in Pyjamas",
          country: "Sweden",
          position: "AWPer"
        },
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h4>Create Your Dream Esport Team</h4>
        <hr />
        <AddUser addUser = {this.addUser}/>
        <hr />
        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
      
      </div>
    );
  }
}


export default App;
