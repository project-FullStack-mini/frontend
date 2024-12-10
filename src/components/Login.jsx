import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style.css

export function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [check, setChecked] = useState(true);
  const toggleVisibility = () => {
    setChecked(!check);
  };
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/login";

      const { data: res } = await axios.post(url, data);
      console.log(res);
      // alert(res.Message);

      navigate("/");
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
            <div>
              <input
                type={check ? "password" : "text"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
              <button type="button" onClick={toggleVisibility}>
                {check ? "show password" : "hide password"}
              </button>
            </div>
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
