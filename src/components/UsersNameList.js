import React from "react";
import User from "./User";

export const UsersNameList = ({ users, getUserSelectedInfo }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <User key={user.login.uuid} user={user} getUserSelectedInfo={getUserSelectedInfo} />
      ))}
    </div>
  );
};