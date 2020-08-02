import React, { useState } from "react";
import Spinner from "./isLoader";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getFriend = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((data) => data.json())
      .then((res) => {
        setFriend({
          address: res.results[0].location.city,
          email: res.results[0].email,
          firstName: res.results[0].name.first,
          lastName: res.results[0].name.last,
          country: res.results[0].location.country,
          phone: res.results[0].phone,
        });
        setIsLoading(true);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      {error && <p>Something is wrong</p>}
      {<Button getFriend={getFriend} />}
      {isLoading && <Spinner />}
      {!error && <FriendProfile friend={friend} />}
    </div>
  );
};

const FriendProfile = ({ friend }) => {
  return (
    <ul>
      <li>First name: {friend.firstName}</li>
      <li>Last name: {friend.lastName}</li>
      <li>Address: {friend.address}</li>
      <li>Country: {friend.country}</li>
      <li>Email: {friend.email}</li>
      <li>Phone: {friend.phone}</li>
    </ul>
  );
};

const Button = ({ getFriend }) => {
  return (
    <div>
      <button onClick={getFriend}>Get a friend! </button>
    </div>
  );
};

export default Friend;
