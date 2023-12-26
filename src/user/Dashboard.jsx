import React, { useState, useEffect, useCallback } from "react";
import { Avatar, Typography, Button } from "@mui/material";
import axios from "axios";

export default function Dashboard({ userId }) {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedUsername, setEditedUsername] = useState("");

  const fetchUserData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5005/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [userId]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedName(userData.name);
    setEditedEmail(userData.email);
    setEditedUsername(userData.username);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5005/users/update/${userId}`, {
        name: editedName,
        email: editedEmail,
        username: editedUsername,
      });
      setIsEditing(false);
      fetchUserData(); // Fetch updated data after saving changes
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId, fetchUserData]);

  // Rest of your component remains unchanged
  // ...

  return (
    <div className="container mb-5 pt-3">
      {/* Use userData to display user information */}
      {userData && (
        <>
          <Avatar
            className="inline-block"
            sx={{ width: 70, height: 80 }}
            alt={userData.name}
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          />
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
              <input
                type="text"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
            </>
          ) : (
            <>
              <Typography variant="h5">{userData.name}</Typography>
              <Typography variant="p">@{userData.username}</Typography>
              <br />
              <Typography variant="p">email: {userData.email}</Typography>
            </>
          )}
          {isEditing ? (
            <Button className="inline-block" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button className="inline-block" onClick={handleEdit}>
              Edit
            </Button>
          )}
        </>
      )}
    </div>
  );
}
