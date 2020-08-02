import React, { useEffect } from "react";

function UserInfo({ user }) {
    return (
      <div className="card">
      <img
        className="card-img-top"
        src={user.picture.large}
        alt="user image"
      />
      <div className="card-body">
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>
          {user.location.city} {user.location.country}
        </p>
      </div>
    </div>
    )
}

export default UserInfo;
