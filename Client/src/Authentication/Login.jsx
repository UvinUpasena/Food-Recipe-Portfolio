import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
   
  const handleLogin = async (e) =>{
    e.preventDefault();
    setError("");
  
  try {
    const {data} = await axios.post ("http://localhost:5000/api/auth/login", {
        email,
        password,
    });

    localStorage.setItem("token", data.token);
    navigate('/')
  }catch (err){
    setError(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div>
      
    <h2>Login</h2>
    {error && <p className="error">{error}</p>}
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/register">Register</a></p>
</div>

  )
};


export default Login;