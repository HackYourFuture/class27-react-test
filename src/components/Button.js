import React from "react";

const Button = ({ fetchUsersData }) => {
  return (
    <div>
      <button className="button" onClick={() => fetchUsersData()}>
        Get Users
      </button>
    </div>
  );
};

export default Button;