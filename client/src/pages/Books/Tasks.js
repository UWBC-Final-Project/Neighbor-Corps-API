import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Tasks extends Component {
  // Setting our component's initial state
  state = {
    tasks: [],
    // NEED SPECIAL ATTENTION TO MAKE IT REFLECT MODEL
  };

  // When the component mounts, load all Tasks and save them to this.state.Tasks
  componentDidMount() {
    this.loadTasks();
  }

  // Loads all Tasks  and sets them to this.state.Tasks
  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ Tasks: res.data })
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
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveTask method to save the Task data
  // Then reload Tasks from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Taskname && this.state.password) {
      API.saveTask({
    // NEED SPECIAL ATTENTION TO MAKE IT REFLECT MODEL
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err));
    }
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
                value={this.state.taskname}
                onChange={this.handleInputChange}
                name="taskname"
                placeholder="taskNAME"
              />
              {/* // NEED SPECIAL ATTENTION TO MAKE IT REFLECT MODEL */}
              <FormBtn
                disabled={!(this.state.taskname)}
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
                          {task.taskname}
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
