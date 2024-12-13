import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const validateForm = () => {
    const { name, email, password } = inputValues;

    if (name.length < 7) {
      alert("Name must be at least 7 letters.");
      return false;
    }

    if (!email) {
      alert("Email is required.");
      return false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    console.log(inputValues);

    setInputValues({ name: "", email: "", password: "" });

    axios
      .post("http://localhost:4002/signup", inputValues) // Adjusted endpoint name
      .then((result) => {
        alert("Signup successful!", result);
      })
      .catch((err) => {
        alert("An error occurred. Please try again.", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputValues.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputValues.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputValues.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </form>
    </div>
  );
};

export default Signup;
