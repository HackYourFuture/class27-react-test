import React, { useState, useEffect } from "react";
import User from "./User";
import spinner from "../images/spinner.gif";

function UsersList({ users, isLoading }) {
  const [user, setUser] = useState(null);
  const handleClick = (e) => {
    setUser(users[e.target.value]);
  };
  useEffect(() => {
    setUser(users[0]);
  }, [users]);
  return (
    <>
      {isLoading && <img src={spinner} alt="loading" />}
      {users.map((userLink, i) => (
        <li className="userLink" onClick={handleClick} key={i} value={i}>
          {userLink.name.first} {userLink.name.last}
        </li>
      ))}
      <User user={user} />
    </>
  );
}

export default UsersList;
