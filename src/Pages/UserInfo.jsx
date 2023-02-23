import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const userInfo = useSelector((state) => state.userInfo);
  console.log("user", userInfo);

  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Starting Date</th>
            <th>Ending Date</th>
            <th>Transportation Charge</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table> */}
    </div>
  );
};

export default UserInfo;
