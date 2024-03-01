import { useState } from "react";

const Login = ({ onHandleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
