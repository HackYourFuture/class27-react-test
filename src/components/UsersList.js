import React from "react";

function UsersList({ users, handleClick }) {
  return (
    <>
      {users.map((user, index) => (
        <li
          className="userLink"
          onClick={handleClick}
          key={user.login.uuid}
          value={index}
        >
          {user.name.first} {user.name.last}
        </li>
      ))}
    </>
  );
}

export default UsersList;
