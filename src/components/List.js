import React from "react";

function List({ users }) {
  const usersList = users.map((user, index) => {
    return (
      <li className="list-group-item" key={index}>
        {" "}
        {user.name.first} {user.name.last}
      </li>
    );
  });
  return <ul className="list-group">{usersList}</ul>;
}

export default List;
