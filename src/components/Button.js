import React from "react";

function Button({ fetchUser }) {
  return (
    <button className="btn btn-primary btn-lg btn-block" onClick={fetchUser}>
      Fetch user
    </button>
  );
}

export default Button;
