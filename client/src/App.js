import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Users from "./pages/Books/Users";
import Tasks from "./pages/Books/Tasks";
import Comments from "./pages/Books/Comments";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/comments" component={Comments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
