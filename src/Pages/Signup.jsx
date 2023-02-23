import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../Redux/action";
import { USER_REGISTER_SUCCESS } from "../Redux/actionTypes";

export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // will handle error handling if any details are not filled.
    if (name === "" || email === "" || password === "") {
      alert("Please Fill All Data....");
    }
    if (name && email && password) {
      let payload = {
        name,
        email,
        password,
      };

      console.log("payyyy", payload);
      dispatch(userRegister(payload)).then((res) => {
        console.log("RES type", res);
        if (res === USER_REGISTER_SUCCESS) {
          alert("User sucessfully registed");
          navigate("/signin", { replace: true });
        } else {
          alert("User is Already registered");
        }
      });
    }
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="input"
          value={name}
          type="text"
          placeholder="Enter Your Name"
        />

        <label className="label">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          value={email}
          type="email"
          placeholder="Enter Email"
        />

        <label className="label">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          value={password}
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
