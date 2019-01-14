import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Users extends Component {
  // Setting our component's initial state
  state = {
    users: [],
    username: "Fake Name",
    password: "Secret Password",
    email: "User@user.com",
    phone: "206-555-6059",
    address: "4122 Main St., Anytown, WA 99999",
    meritscore: 150
  };

  // When the component mounts, load all users and save them to this.state.users
  componentDidMount() {
    this.loadUsers();
  }

  // Loads all users  and sets them to this.state.users
  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, username: "", password: "", address: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a user from the database with a given id, then reloads users  Users from the db
  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then reload users from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.saveUser({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        meritscore: this.state.meritscore
      })
        .then(console.log("FARTS"))
        // .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Users</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="USERNAME"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="PASSWORD"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="EMAIL"
              />
              <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="PHONE"
              />
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="ADDRESS"
              />
              <Input
                value={this.state.meritscore}
                onChange={this.handleInputChange}
                name="meritscore"
                placeholder="MERITSCORE"
              />
              <FormBtn
                disabled={!(this.state.username)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Users</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => {
                  return (
                    <ListItem key={user._id}>
                      <a href={"/users/" + user._id}>
                        <strong>
                          {user.username}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
