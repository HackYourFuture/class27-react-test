import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div>
      <p>
        {user.first} {user.last} {user.city} {user.country} {user.phoneNumber}
      </p>
    </div>
  );
};
export default UserProfile;
