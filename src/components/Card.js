import React from 'react';

export default function Card({ selectedUser }) {
  const { picture: { medium },
    name: { first, last },
    gender,
    phone,
    email,
    location: { country },
    login: { username } } = selectedUser[0];

  return (
    <div className="card">
      <table >
        <tbody>
          <tr>
            <td></td><td><img src={medium} alt={username} /></td>
          </tr>
          <tr>
            <td>Name : </td><td>{first}</td>
          </tr>
          <tr>
            <td>Surname : </td><td>{last}</td>
          </tr>
          <tr>
            <td>Gender : </td><td>{gender}</td>
          </tr>
          <tr>
            <td>Phone : </td><td>{phone}</td>
          </tr>
          <tr>
            <td>Email : </td><td>{email}</td>
          </tr>
          <tr>
            <td>Address: </td><td>{country}</td>
          </tr>
        </tbody>
      </table>
    </div>);
}