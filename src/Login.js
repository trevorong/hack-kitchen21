import {useState} from 'react'

export default function Login() {
  const [hot_username_input, set_hot_username_input] = useState('');
  const [hot_password_input, set_hot_password_input] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const hot_user = {
      'username': hot_username_input,
      'password': hot_password_input,
    }
    // console.log(hot_user);
    localStorage.setItem('hack-kitchen-login', JSON.stringify(hot_user));
    // console.log(localStorage.getItem('hack-kitchen-login'));
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      login
      <input type='text' placeholder='username'
        onChange={(event)=>set_hot_username_input(event.target.value)} value={hot_username_input}>
      </input>
      <input type='password' placeholder='password'
        onChange={(event)=>set_hot_password_input(event.target.value)} value={hot_password_input}>
      </input>

      <input type='submit'></input>
    </form>
  )
}