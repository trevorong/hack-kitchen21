import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <div>
            hello world
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
