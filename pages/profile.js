import { useRouter } from "next/router";
import { useState } from "react";

export default function Profile() {
  const router = useRouter();const dataString = sessionStorage.getItem('mySessionData');
  const data = JSON.parse(dataString);
  

  return (
    <div>
      <h1>Profile Page</h1><br/>
      <div>Name:  {data.firstName} {data.lastName}</div>
      <div>Age:  {data.age}</div>
      
      <div>Address:  {data.address}, {data.province}, {data.country}, {data.zip}</div>
      <div>Name:  {data.firstName} {data.lastName}</div>
      <div>Username:  {data.username}</div>
    </div>
  );
}
