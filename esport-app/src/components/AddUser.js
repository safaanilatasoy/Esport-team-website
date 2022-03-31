import React, { Component } from "react";

class AddUser extends Component {
  render() {
    return (
      <div class="card">
        <h4 class="card-header">Add New User</h4>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter a name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label htmlFor="nickname">Nickname</label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                placeholder="Enter a nickname"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label htmlFor="game">Game</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Default</option>
                <option value="Counter Strike Global Offensive">
                  Counter Strike Global Offensive
                </option>
                <option value="Valorant">Valorant</option>
                <option value="Rainbow Six Siege">Rainbow Six Siege</option>
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Enter country"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label htmlFor="team">Team</label>
              <input
                type="text"
                name="team"
                id="team"
                placeholder="Enter team"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label htmlFor="name">Country</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Enter position"
                class="form-control"
              />
            </div>
        <br />
            <button type="submit" class="d-grid col-4 mx-auto btn btn-danger btn-block">
              Add New User
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddUser;
