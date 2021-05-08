import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './Profile'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <div>
            hello world
          </div>
          <Link to='/profile'>link</Link>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
