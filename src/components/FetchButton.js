import React from "react";

function FetchButton({ setUsers, setHasError, setIsLoading, setErrorMessage }) {
  const URL = "https://randomuser.me/api/?results=5";
  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage("");
      const response = await fetch(URL);
      const { results } = await response.json();
      setIsLoading(false);
      console.log(results);
      setUsers(results);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
      let message;
      if (error.response) {
        message = error.response.data.message;
      } else if (error.request) {
        message = error;
      }
      setErrorMessage(message);
    }
  };
  return <button onClick={fetchUsers}>Get users</button>;
}

export default FetchButton;
