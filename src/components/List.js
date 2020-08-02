import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

function List({ users }) {
  const [user , setUser] = useState(users[0])
  const handleClick = (id) => {
    const selectedUser = users.filter((user) => user.login.uuid == id);
    setUser(selectedUser[0]);


  }

  const usersList = users.map((user, index) => {

    return (
      <li onClick={() => handleClick(user.login.uuid)} className="list list-group-item" key={index}>
        {user.name.first} {user.name.last}
      </li>
    );
  });

  return (
    <div>
      <ul className="list-group">{usersList}</ul>
      <UserInfo user = {user}></UserInfo>
    </div>
  )
}

export default List;
