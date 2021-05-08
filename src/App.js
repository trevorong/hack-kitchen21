import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './Profile'

function App() {
  const [hotimg, setHotImg] = useState(null);
  const hot_callAPI = async () => {
    const hot_opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': '6b74986d-b833-4e61-b172-ba23c9802406',
      },
    }

    const hot_response = await fetch('https://api.thedogapi.com/v1/breeds', hot_opts);
    if (!hot_response.ok) throw new Error(hot_response.status);
    
    const hot_json = await hot_response.json();

    const hot_rand = parseInt(Math.random()*hot_json.length)
    const hot_img = hot_json[hot_rand].image.url;
    console.log(hot_json[hot_rand])
    setHotImg(hot_img);
  }

  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <div>
            hello world
          </div>
          <button onClick={hot_callAPI}>click me</button>
          <Link to='/profile'>link</Link>

          {hotimg && <img src={hotimg} alt='hot dog'/>}
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
