import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Users from "./pages/Books/Users";

function App() {
  return (
    <div>
      <Nav />
      {/* <Books /> */}
      <Users />
    </div>
  );
}

export default App;
