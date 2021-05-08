import {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Login from './Login'

export default function Profile() {
  const [hot_username, set_hot_username] = useState('');
  const history = useHistory();

  useEffect(() => {
    const hot_user = localStorage.getItem('hack-kitchen-login');
    console.log(hot_user);
    const hot_json = JSON.parse(hot_user);
    console.log(hot_json);

    if (hot_json && hot_json.username) {
      set_hot_username(hot_user.username);
    }
  },[])

  const hot_logout = () => {
    set_hot_username('');
    localStorage.removeItem('hack-kitchen-login');
  }

  return (
    <div>
      <Link to='/'>home</Link>
      { hot_username !== '' ?
        <div>
          <button onClick={hot_logout}>sign out</button>
          my profile
          { hot_username }
        </div>
        : 
        <Login/>
      }
    </div>
  );
}