import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/action";
import { USER_LOGIN_SUCCESS } from "../Redux/actionTypes";

export default function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // will handle error handling if any details are not filled.
    if (email === "" || password === "") {
      alert("Please Fill All Data....");
    }
    if (email && password) {
      let payload = {
        email,
        password,
      };

      console.log("payyyy", payload);
      dispatch(userLogin(payload)).then((res) => {
        console.log("RES type", res);
        if (res === USER_LOGIN_SUCCESS) {
          alert("User sucessfully login");
          navigate("/game", { replace: true });
        } else {
          alert("User is Already registered");
        }
      });
    }
  };

  return (
    <div className="form">
      <div>
        <h1>User Login</h1>
      </div>

      <form>
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
