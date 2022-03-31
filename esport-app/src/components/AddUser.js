import React, { Component } from "react";

class AddUser extends Component {

    state = {
        game: "",
        name: "",
        nickname: "",
        team: "",
        country: "",
        position: ""

    };
  render() {
      const {game, name, nickname, team, country, position} = this.state;
    return (
      <div className="card">
        <h4 className="card-header">Add New Player</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter a name"
                className="form-control"
                value = {name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nickname">Nickname</label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                placeholder="Enter a nickname"
                className="form-control"
                value = {nickname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="game">Game</label>
              <select value={nickname} className="form-select" aria-label="Default select example">
                <option selected>Default</option>
                <option value="Counter Strike Global Offensive">
                  Counter Strike Global Offensive
                </option>
                <option value="Valorant">Valorant</option>
                <option value="Rainbow Six Siege">Rainbow Six Siege</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="team">Team</label>
              <input
                type="text"
                name="team"
                id="team"
                placeholder="Enter team"
                className="form-control"
                value = {team}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Country</label>
              <input
                type="text"
                name="Country"
                id="Country"
                placeholder="Enter Country"
                className="form-control"
                value = {country}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Enter position"
                className="form-control"
                value ={position}
              />
            </div>
        <br />
            <button type="submit" className="d-grid col-4 mx-auto btn btn-danger btn-block">
              Add New Player
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddUser;
