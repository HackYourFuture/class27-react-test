import React from 'react';

const Card = ({ selectedUser }) => {
  const { picture,
    name: { first, last },
    gender,
    phone,
    email,
    location: { country },
    login: { username } } = selectedUser;

  return (
    <table className="card">
      <tbody>
        <tr>
          <td></td><td><img src={picture.medium} alt={username} /></td>
        </tr>
        <tr>
          <th scope="row">Name : </th>
          <td>{first}</td>
        </tr>
        <tr>
          <th scope="row">Surname : </th>
          <td>{last}</td>
        </tr>
        <tr>
          <th scope="row">Gender : </th>
          <td>{gender}</td>
        </tr>
        <tr>
          <th scope="row">Phone : </th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th scope="row">Email : </th>
          <td>{email}</td>
        </tr>
        <tr>
          <th scope="row">Address: </th>
          <td>{country}</td>
        </tr>
      </tbody>
    </table>);
}

export default Card;
