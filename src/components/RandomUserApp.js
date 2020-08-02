import React, { useState } from "react";
import Button from "./Button";
import { UsersNameList } from "./UsersNameList";
import Card from './Card';
import Loader from 'react-loader-spinner';

const RandomUserApp = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchUsersData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://randomuser.me/api/?results=5');
      const userData = await response.json();
      setUsers(userData.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false)
    }
  }

  const getUserSelectedInfo = id => {
    const selected = users.filter(user => user.id.value === id);
    setSelectedUser(selected);
    setStatus("success");
  };
  return (
    <div className="container">
      <Button fetchUsersData={fetchUsersData} />
      {isLoading && <Loader type="Puff" color="blue" height="60" width="60" />}
      {isError && <p style={{ color: "red" }}>Something Went Wrong!</p>}
      {!isLoading && <UsersNameList users={users} getUserSelectedInfo={getUserSelectedInfo} />}
      {status === "success" && <Card selectedUser={selectedUser} />}
    </div>
  );
};

export default RandomUserApp;