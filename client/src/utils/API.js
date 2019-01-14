import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // ---->  KPH Adding Boilerplate to get to the express API
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Gets all Tasks
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the Task with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the Task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a Task to the database
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  },
  // Gets all Comments
  getComments: function() {
    return axios.get("/api/comments");
  },
  // Gets the Comment with the given id
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the Comment with the given id
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a Comment to the database
  saveComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  }
  // <----  KPH Adding Boilerplate to get to the express API
  
};
