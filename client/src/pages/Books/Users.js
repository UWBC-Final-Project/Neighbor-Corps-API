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
        this.setState({ users: res.data, title: "", author: "", synopsis: "" })
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
    if (this.state.title && this.state.author) {
      API.saveUser({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadUsers())
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
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
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
                          {user.title} by Placeholder
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
