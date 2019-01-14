import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Comments extends Component {
  // Setting our component's initial state
  state = {
    comments: [],
  };

  // When the component mounts, load all Comments and save them to this.state.Comments
  componentDidMount() {
    this.loadComments();
  }

  // Loads all Comments  and sets them to this.state.Comments
  loadComments = () => {
    API.getComments()
      .then(res =>
        this.setState({ comments: res.data})
      )
      .catch(err => console.log(err));
  };

  // Deletes a Comment from the database with a given id, then reloads Comments  Comments from the db
  deleteComment = id => {
    API.deleteComment(id)
      .then(res => this.loadComments())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the Comment types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveComment method to save the Comment data
  // Then reload Comments from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Commentname && this.state.password) {
      API.saveComment({
        // NEEDS CUSTOM CODE!!!!!
      })
        .then(console.log("FARTS"))
        // .then(res => this.loadComments())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Comments</h1>
            </Jumbotron>
            <form>
              {/* // !!!! NEEDS SPECIAL ATTENTION! */}
              <Input
                value={this.state.commentname}
                onChange={this.handleInputChange}
                name="commentname"
                placeholder="commentNAME"
              />

              <FormBtn
                disabled={!(this.state.commentname)}
                onClick={this.handleFormSubmit}
              >
                Submit Comment
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Comments</h1>
            </Jumbotron>
            {this.state.comments.length ? (
              <List>
                {this.state.comments.map(comment => {
                  return (
                    <ListItem key={comment._id}>
                      <a href={"/comments/" + comment._id}>
                        <strong>
                          {/* // NOPE This needs to change */}
                          {comment.commentname}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteComment(comment._id)} />
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

export default Comments;
