import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignUpPage} />
        <Route exact path="/login" component={SignUpPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </div>
    </Router>
  );
};

export default App;