import React, { Component } from "react";

class User extends Component {
    
    onDeleteClick(id,e){
        const {deleteUser} = this.props;
        

        deleteUser(id);

    }
  render() {
    const {id, game, name, nickname, team, country, position} = this.props;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{game}</td>
        <td>{name}</td>
        <td>{nickname}</td>
        <td>{team}</td>
        <td>{country}</td>
        <td>{position}</td>
        <td><button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
}
export default User;