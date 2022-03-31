import React, {Component} from "react";
import User from "./User";

class Users extends Component {
   


    render() {
        const {users, deleteUser} = this.props;

        return(
            <table className="table">
            <thead className="table-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Game</th>
                    <th scope="col">Real Name</th>
                    <th scope="col">Nickname</th>
                    <th scope="col">Team</th>
                    <th scope="col">Country</th>
                    <th scope="col">Position</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        const {id, game, name, nickname, team, country, position} = user;


                        return <User 
                            key= {id}
                            id= {id}
                            game = {game}
                            name = {name}
                            nickname = {nickname}
                            team = {team}
                            country = {country}
                            position = {position}
                            deleteUser = {deleteUser}
                        />
                    })
                }
                
            </tbody>
          </table>  
        );
    }
}
export default Users;