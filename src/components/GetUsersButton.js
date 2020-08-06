import React from "react";

const GetUsersButton = ({ fetchUsersData }) => {
  return (
    <button className="button" onClick={fetchUsersData}>
      Get Users
    </button>
  );
};

export default GetUsersButton;
