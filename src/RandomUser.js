import React, { useState } from "react";
import Button from "./Button";
import UserProfile from "./UserProfile";

const RandomUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fectchUser = () => {
    fetch(`https:randomuser.me/api/?results=5`);
    setLoading(true)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        setError(false);
        setUser({
          first: response.results[0].name.first,
          last: response.results[0].name.last,
          city: response.results[0].location.city,
          country: response.results[0].location.country,
          phoneNumber: response.results[0].phone,
        });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const handleOnClick = (e) => {
    fectchUser();
    setError(false);
  };
  console.log(user);
  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>Something wrong</p>}
      <UserProfile user={user} />
      <Button handleOnClick={handleOnClick} />
    </div>
  );
};

export default RandomUser;
