import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4002/login", formData) // Adjusted endpoint name
      .then((result) => {
        alert("Login successful!", result);
      })
      .catch((err) => {
        alert("Invalid credentials. Please try again.", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Dont have an account? <Link to="/">Signup here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
