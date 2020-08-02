import React from "react";

function User({ user }) {
  return (
    <>
      {user && (
        <div className="userCard">
          <img src={user.picture.medium} alt="User" />
          <h4>
            {user.name.first} {user.name.last}
          </h4>
          <p>{user.email}</p>
          <p>{user.cell}</p>
          <p>
            {user.location.city}, {user.location.country}
          </p>
        </div>
      )}
    </>
  );
}

export default User;
