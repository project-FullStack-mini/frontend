import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style.css

export function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "";

      const { data: res } = await axios.post(url, data);

      alert(res.Message);

      navigate("/home");
    } catch (error) {
      console.log(error);
      setError("failed sending data to backend");
    }
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
            />{" "}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div>
        <h1>New Here ?</h1>
        <NavLink to="/register">
          <button type="button">Sign Up</button>
        </NavLink>
      </div>
    </>
  );
}
