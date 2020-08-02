import React from "react";

const User = ({ user, getUserSelectedInfo }) => {
  const getUserId = () => {
    getUserSelectedInfo(user.id.value);
  };
  return (
    <p className="user" onClick={getUserId}>
      {user.name.first} {user.name.last}
    </p>
  );
};

export default User;