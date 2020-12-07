import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthPage from "./AuthPage";
import TablePage from "./TablePage";
class App extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/usersTable" component={TablePage}/>
      </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
