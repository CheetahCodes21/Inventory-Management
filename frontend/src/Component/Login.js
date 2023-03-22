import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // perform login logic here
    if (username === 'admin' && password === 'password') {
      // successful login, navigate to dashboard
      alert('Logged in successfully!');
      // <Link to="/home"></Link>
      navigate('/home');
    } else {
      // failed login, display error message
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <body className='body3'>
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Login;