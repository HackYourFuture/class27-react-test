import React from "react";

const Button = ({ handleOnClick }) => {
  return (
    <div>
      <button onClick={handleOnClick}>Get A user</button>
    </div>
  );
};
export default Button;
