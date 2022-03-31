import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>CS:GO</td>
        <td>Alexander</td>
        <td>s1mple</td>
        <td>NaVi</td>
        <td>Ukraine</td>
        <td>AWPer</td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
}
export default User;