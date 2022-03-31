import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id : 1,
          Game: "CS:GO",
          name : "Mathieu Herbaut",
          nickname: "Zywo",
          team: "Team Vitality",
          Country: "France",
          Position: "AWPer"
        },
        {
          id : 2,
          Game: "CS:GO",
          name : "Oleksandr Kostyliev",
          nickname: "S1mple",
          team: "Natus Vincere",
          Country: "Ukraine",
          Position: "AWPer"
        },
        {
          id : 3,
          Game: "CS:GO",
          name : "Nicolai Reedtz",
          nickname: "Dev1ce",
          team: "Ninjas in Pyjamas",
          Country: "Sweden",
          Position: "AWPer"
        },
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <h4>Create Your Dream Esport Team</h4>
        <hr />
        <AddUser/>
        <hr />
        <Users users = {this.state.users}/>
      
      </div>
    );
  }
}


export default App;
