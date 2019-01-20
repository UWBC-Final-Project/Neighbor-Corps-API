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
    description: "",
    username: "",
    tags:[],
    postedBy:""
  };

  // When the component mounts, load all Comments and save them to this.state.Comments
  componentDidMount() {
    this.loadComments();
  }

  // Loads all Comments  and sets them to this.state.Comments
  loadComments = () => {
    API.getComments()
      .then(res =>
        this.setState({ comments: res.data, description: "", username: "",
        tags:"", postedBy:"", postDate:"" })
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
  handleCommentChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveComment method to save the Comment data
  // Then reload Comments from the database
  handleFormSubmit = event => {
    console.log("form submit testing");
    event.preventDefault();
      API.saveComment({
        description: this.state.description,
        username: this.state.username,
        tags: this.state.tags,
        // i think posted by and usename is kind of getting 
        //the same information, lets discuss if we need both 
        //or just one ~~ PK
      })
        .then(res => this.loadComments())
        // .then(res => this.loadComments())
        .catch(err => console.log(err));
    
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
              <Input
                value={this.state.description}
                onChange={this.handleCommentChange}
                name="description"
                placeholder="description"
              />
              <Input
              value={this.state.username}
              onChange={this.handleCommentChange}
              name="username"
              placeholder="username"
            />
              <Input
              value={this.state.tags}
              onChange={this.handleCommentChange}
              name="tags"
              placeholder="tags"
            />
              <Input
              value={this.state.postedBy}
              onChange={this.handleCommentChange}
              name="postedBy"
              placeholder="postedBy"
            />
            <Input
            value={this.state.postDate}
            onChange={this.handleCommentChange}
            name="postDate"
            placeholder="postDate"
          />

              <FormBtn
                disabled={!(this.state.description)}
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
                          {comment.description}
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
