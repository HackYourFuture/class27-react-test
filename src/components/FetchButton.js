import React from "react";

function FetchButton({ getUsers, setIsError, setIsLoading, setErrorMessage }) {
  const URL = "https://randomuser.me/api/?results=5";
  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage("");
      const response = await fetch(URL);
      const { results } = await response.json();
      setIsLoading(false);
      getUsers(results);
    } catch (error) {
      setIsError(true);
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
