import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    const token = localStorage.getItem('token');
    axios
      .get("http://localhost:5000/api/friends", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setFriends(res.data);
        console.log("This is res.data", res.data)
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
      <div>
        {friends.map((eachFriend) => {
          return (
            <div key={eachFriend.id}>
              <div>Name: {eachFriend.name}</div>
              <div>Age: {eachFriend.age}</div>
              <div>Email: {eachFriend.email}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
