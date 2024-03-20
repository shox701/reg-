import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  const handleLogin = () => {
    axios.post('https://fakestoreapi.com/auth/login', {
      username: username,
      password: password
    })
    .then(function(response){
      if(response.status === 200){
        setNotification("Logged in");
        setUsername("");
        setPassword("");
      }
    })
    .catch(function (error){
      setNotification("Something went wrong!");
    });
  };

  return (
    <div className="container">
      <div className="log">
        <h2>Sign in</h2>   
        <form>
          <input className='login' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input className='pass' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </form>   
        <button onClick={handleLogin}>Login</button>
        {notification && <p>{notification}</p>}
      </div>
    </div>
  );
};

export default Login;