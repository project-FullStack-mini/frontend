import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../Style.css";

export function Login() {
  // Declaration
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [check, setChecked] = useState(true);
  const [logged, setLogged] = useState(false);
  // const navigate = useNavigate();

  // Toggle the visibility of the password
  const toggleVisibility = () => {
    setChecked(!check);
  };

  // currentTarget a part of object that returned of onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/login";

      await axios.post(url, data).catch((e) => console.log(e));
      // console.log(data);
     
      if (data) {
        setLogged(true);
        setInterval(() => {
          setLogged(false);
        }, 3000);
        // navigate("/")
      }
    } catch (error) {
      console.log(error);
      setError("failed sending data to backend");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      {!error && (
        <>
          <div>
            {!logged && (
              <>
                <div>
                  <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                      required
                    />
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
                <div>
                  <h3>New Here ?</h3>
                  <NavLink to="/register">
                    <button type="button">Sign Up</button>
                  </NavLink>
                </div>
              </>
            )}
            {logged && (
              <p>you are logged in. You will be redirected to homepage</p>
            )}
          </div>
        </>
      )}
    </>
  );
}
