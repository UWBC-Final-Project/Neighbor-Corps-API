import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from '../../utils/API';

class Tasks extends Component {
  // Setting our component's initial state
  state = {
    tasks: [],
    // NEED SPECIAL ATTENTION TO MAKE IT REFLECT MODEL
    title:"" ,
    description: "",
    imageURL: "",
    postion: "" // save what we grasp from Google map pinned location
    // tags:[],
    // postedBy: "",
    // comments: [],
    // postDate: "", 
    // lastUpdated: ""
  };

  // When the component mounts, load all Tasks and save them to this.state.Tasks
  componentDidMount() {
    this.loadTasks();
  }

  // Loads all Tasks  and sets them to this.state.Tasks
  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ tasks: res.data, title: "", description:"",imageURL: "",postion: "",
          tags: "", postedBy: "", comments: "", postDate: "", lastUpdated: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a Task from the database with a given id, then reloads Tasks  Tasks from the db
  deleteTask = id => {
    API.deleteTask(id)
      .then(res => this.loadTasks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the Task types into the input field
  handleTaskChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveTask method to save the Task data
  // Then reload Tasks from the database
  handleFormSubmit = event => {
    event.preventDefault();
 //...... we might put a condition here before we save the task to our database ~~ PK
      API.saveTask({
        title:this.state.title,
        description: this.state.description,
        imageURL: this.state.imageURL,
        postion:this.state.postion // save what we grasp from Google map pinned location
        // tags:[],
        // postedBy:this.state.postedBy,
        // comments: [],
        // postDate: this.state.postDate, 
        // lastUpdated:this.state.lastUpdated
    // NEED SPECIAL ATTENTION TO MAKE IT REFLECT MODEL
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err));
    
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Tasks</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleTaskChange}
                name="title"
                placeholder="title"
                />
                <Input
                value={this.state.discription}
                onChange={this.handleTaskChange}
                name="discription"
                placeholder="discription"
              />
              <Input
              value={this.state.imageURL}
              onChange={this.handleTaskChange}
              name="imageURL"
              placeholder="imageURL"
              />
              <Input
              value={this.state.postion}
              onChange={this.handleTaskChange}
              name="postion"
              placeholder="postion"
            />
              <Input
              value={this.state.tags}
              onChange={this.handleTaskChange}
              name="tags"
              placeholder="tags"
            />
              <Input
              value={this.state.postedBy}
              onChange={this.handleTaskChange}
              name="postedBy"
              placeholder="postedBy"
            />
              <Input
              value={this.state.comments}
              onChange={this.handleTaskChange}
              name="comments"
              placeholder="comments"
            />
              <Input
              value={this.state.postDate}
              onChange={this.handleTaskChange}
              name="postDate"
              placeholder="postDate"
            />
              <Input
              value={this.state.lastUpdated}
              onChange={this.handleTaskChange}
              name="lastUpdated"
              placeholder="lastUpdated"
              />
              {/* // NEED SPECIAL ATTENTION TO MAKE IT REFLECT MODEL */}
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Task
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Tasks</h1>
            </Jumbotron>
            {this.state.tasks.length ? (
              <List>
                {this.state.tasks.map(task => {
                  return (
                    <ListItem key={task._id}>
                      <a href={"/tasks/" + task._id}>
                        <strong>
                          {task.title}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteTask(task._id)} />
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

export default Tasks;
