import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../Redux/action";
import {
  POST_CHECKOUT_FAILURE,
  POST_CHECKOUT_SUCCESS,
} from "../Redux/actionTypes";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Home.module.css";

const Checkout = () => {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [location, setLocation] = useState("");
  const [tranportCharge, setTranportCharge] = useState(0);
  const [distance, setDistance] = useState(0);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.userinfo);
  const navigate = useNavigate();

  console.log("this is checkoutpage userinfo", userinfo);
  console.log("this is typeof userinfo", typeof userinfo);

  var startResult = new Date(startDate);
  let sMonth = startResult.getMonth() + 1;
  let sDate = startResult.getDate();
  let sYear = startResult.getFullYear();

  let startOutput = "";
  startOutput =
    startOutput +
    sMonth +
    "/" +
    sDate +
    "/" +
    sYear +
    " " +
    startTime +
    ":" +
    "00";
  console.log(startOutput, "oupuajd");

  var endResult = new Date(endDate);
  let eMonth = endResult.getMonth() + 1;
  let eDate = endResult.getDate();
  let eYear = endResult.getFullYear();

  let endOutput = "";
  endOutput =
    endOutput + eMonth + "/" + eDate + "/" + eYear + " " + endTime + ":" + "00";
  console.log(endOutput, "oupuajd");

  var bookResult = new Date(bookingDate);
  let bMonth = bookResult.getMonth() + 1;
  let bDate = bookResult.getDate();
  let bYear = bookResult.getFullYear();

  let bookOutput = "";
  bookOutput =
    bookOutput +
    bMonth +
    "/" +
    bDate +
    "/" +
    bYear +
    " " +
    bookingTime +
    ":" +
    "00";
  console.log(bookOutput, "oupuajd");

  const handleSubmit = () => {
    setShow(true);
    console.log("inside submit");
    const payload = {
      startDate: startOutput,
      endDate: endOutput,
      bookingDate: bookOutput,
      location: location,
      distance:
        location === "Baghajatin"
          ? 10
          : location === "Garia"
          ? 20
          : location === "Sealdaha"
          ? 15
          : 25,
    };

    console.log(payload, "oplayladfi");

    dispatch(checkout(payload)).then(() => {
      // when we get data inside the userinfo object then it go inside the if condition otherwise if we get error string inside userinfo then it will go in else.
      if (userinfo.startDate) {
        alert("Inquery Successful");
      } else {
        alert(userinfo);
      }
    });
  };

  return (
    <div>
      {show === false ? (
        <div>
          <label>Enter Event start</label>
          <input onChange={(e) => setStartDate(e.target.value)} type="date" />
          <input onChange={(e) => setStartTime(e.target.value)} type="time" />
          <br />
          <label>Enter Event End</label>
          <input onChange={(e) => setEndDate(e.target.value)} type="date" />
          <input onChange={(e) => setEndTime(e.target.value)} type="time" />
          <br />
          <label>Event Booking</label>
          <input onChange={(e) => setBookingDate(e.target.value)} type="date" />
          <input onChange={(e) => setBookingTime(e.target.value)} type="time" />
          <br />
          <label>Location</label>
          <select onChange={(e) => setLocation(e.target.value)} name="" id="">
            <option value="">Select Location</option>
            <option value="Baghajatin">Baghajatin</option>
            <option value="Garia">Garia</option>
            <option value="Sealdaha">Sealdaha</option>
            <option value="Jadavpur">Jadavpur</option>
          </select>
          <br />
          <label>Payment</label>
          <br />
          <label>Transport Charge</label>
          <br />
          <label>Distance</label>
          <br />
          <button onClick={handleSubmit}>Enquiry</button>
        </div>
      ) : (
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Booking Date</th>
                <th>Starting Date</th>
                <th>Ending Date</th>
                <th>Transportation Charge</th>
                <th>Program Duration</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userinfo.bookingDate}</td>
                <td>{userinfo.startDate}</td>
                <td>{userinfo.endDate}</td>
                <td>{userinfo.transportcharge}</td>
                <td>
                  {userinfo.dayDuration} "Day" and {userinfo.hrDuration}"hrs"
                </td>
                <td>{userinfo.distance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Checkout;
