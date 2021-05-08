import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from "./Profile";
import Homepage from "./homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
