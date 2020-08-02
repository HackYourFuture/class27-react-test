import React from "react";

function UserInfo({ users }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={users[0].picture.large}
        alt="user image"
      />
      <div className="card-body">
        <h3>
          {users[0].name.first} {users[0].name.last}
        </h3>
        <p>{users[0].email}</p>
        <p>{users[0].phone}</p>
        <p>
          {users[0].location.city} {users[0].location.country}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
