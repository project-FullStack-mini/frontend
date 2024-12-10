import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style.css";

export function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // username: "",
  // confirmPassword: "",
  // firstName: "",
  // lastName: "",
  // birthday: "",
  // phoneNumber: "",
  // gender: "",
  // address: ""

  const [error, setError] = useState("");
  // const navigate = useNavigate();

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
      const url = "http://localhost:3000/register";
      console.log("Sending data:", data); 
      const res = await axios.post(url, data)//.catch((e) => console.log(e));
console.log("BACKENDRESPOND:", res)
      // alert(res.Message);

      // navigate("/");
    } catch (error) {
      console.log(error);
      setError("failed sending data to backend");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
        />

        {/* Username 
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.username}
          required
        />
        
         Confirm Password
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          value={data.confirmPassword}
          required
        />

        First Name
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
          required
        />

       Last Name 
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
          required
        />

       Birthday
        <input
          type="date"
          placeholder="Birthday"
          name="birthday"
          onChange={handleChange}
          value={data.birthday}
          required
        />

        Phone Number 
        <input
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={handleChange}
          value={data.phoneNumber}
          pattern="[0-9]{10}" /* Optional: to enforce 10-digit phone numbers 
          required
        />

      Gender 
        <select
          name="gender"
          onChange={handleChange}
          value={data.gender}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        Address 
        <textarea
          placeholder="Address"
          name="address"
          onChange={handleChange}
          value={data.address}
          rows="3"
          required
        ></textarea> */}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </>
  );
}
