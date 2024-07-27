import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Error fetching user data");
      })
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, [userId]);

  if (!userData) return <span>Loading...</span>;

  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}

export default User;