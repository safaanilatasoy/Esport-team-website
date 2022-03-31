import React, {Component} from "react";
import User from "./User";

class Users extends Component {



    render() {


        return(
            <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Game</th>
                    <th scope="col">Real Name</th>
                    <th scope="col">Nickname</th>
                    <th scope="col">Team</th>
                    <th scope="col">Country</th>
                    <th scope="col">Position</th>
                </tr>
            </thead>
            <tbody>
                
                <User />
            </tbody>
          </table>  
        );
    }
}
export default Users;