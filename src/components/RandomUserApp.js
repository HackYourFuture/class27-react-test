import React, { useState, useEffect } from "react";
import GetUsersButton from "./GetUsersButton";
import { UsersNameList } from "./UsersNameList";
import Card from './Card';
import Loader from 'react-loader-spinner';

const RandomUserApp = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(
    {
      isError: false,
      errorMsg: ""
    }
  );

  useEffect(() => {
    if (users.length > 0) {
      setSelectedUser(users[0]);
      setStatus("success");
    }
  }, [users]);

  const fetchUsersData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://randomuser.me/api/?results=5');
      const userData = await response.json();
      setUsers(userData.results);
    } catch (error) {
      setError(
        {
          isError: true,
          errorMsg: error.message
        }
      );
    } finally {
      setLoading(false)
    }
  }

  const getUserSelectedInfo = id => {
    const selectedUser = users.filter(user => user.id.value === id);
    setSelectedUser(selectedUser[0]);
    setStatus("success");
  };
  return (
    <div className="container">
      <GetUsersButton fetchUsersData={fetchUsersData} />
      {isLoading && <Loader type="Puff" color="blue" height="60" width="60" />}
      {hasError.isError && <p style={{ color: "red" }}>{hasError.errorMsg}!</p>}
      {!isLoading && !hasError.isError && <UsersNameList users={users} getUserSelectedInfo={getUserSelectedInfo} />}
      {status === "success" && <Card selectedUser={selectedUser} />}
    </div>
  );
};

export default RandomUserApp;
