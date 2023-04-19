import React from "react";

function User(props) {
  return (
    <ul>
      <li>ID: {props?.id} </li>
      <li>Name: {props?.name} </li>
      <li>Username: {props?.username} </li>
      <li>Email: {props?.email} </li>
      <li>Phone: {props?.phone} </li>
      <li>Web: {props?.website} </li>
      <li>Addr: {props?.address} </li>
      <li>Comp: {props?.company} </li>
    </ul>
  );
}

export default User;
