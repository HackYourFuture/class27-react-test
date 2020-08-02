import React, { useState } from "react";
import "./App.css";
import FetchButton from "./components/FetchButton";
import UsersList from "./components/UsersList";
import Alert from "./components/Alert";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const getUsers = (newUsers) => {
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <FetchButton
        getUsers={getUsers}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        setErrorMessage={setErrorMessage}
      />
      <Alert isError={isError} errorMessage={errorMessage} />
      <UsersList users={users} isLoading={isLoading} />
    </div>
  );
}

export default App;
