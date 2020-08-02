import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import Button from "./components/Button.js";
import List from "./components/List.js";
import UserInfo from "./components/UserInfo.js";

const URL = "https://randomuser.me/api/?results=5";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const fetchUser = async () => {
    try {
      setLoading(true);
      const data = await fetch(URL);
      const jsonData = await data.json();
      setLoading(false);
      setUsers(jsonData.results);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  

  return (
    <div className="main">
      <Button className="button" fetchUser={fetchUser}></Button>
      <div>
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
      </div>
      <div>
        {hasError && (
          <p className="alert alert-danger">sorry there is an Error</p>
        )}
      </div>
      <div>{users.length !== 0 && <List users={users}></List>}</div>
    </div>
  );
}

export default App;
