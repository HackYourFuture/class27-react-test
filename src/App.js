import React, { useState, useEffect } from "react";
import "./App.css";
import FetchButton from "./components/FetchButton";
import UsersList from "./components/UsersList";
import User from "./components/User";

import Alert from "./components/Alert";
import spinner from "./images/spinner.gif";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  const handleClick = (e) => {
    setUser(users[e.target.value]);
  };
  useEffect(() => {
    console.log(users);
    if (users.length > 0) {
      setUser(users[0]);
    }
  }, [users]);

  return (
    <div className="app">
      <FetchButton
        setUsers={setUsers}
        setHasError={setHasError}
        setIsLoading={setIsLoading}
        setErrorMessage={setErrorMessage}
      />
      {hasError && <Alert errorMessage={errorMessage} />}
      {isLoading ? (
        <img src={spinner} alt="loading" />
      ) : (
        <UsersList users={users} handleClick={handleClick} />
      )}
      {user && <User user={user} />}
    </div>
  );
}

export default App;
