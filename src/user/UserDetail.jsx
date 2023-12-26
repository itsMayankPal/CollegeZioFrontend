import React, { useState } from "react";
import { Avatar, Typography, Button } from "@mui/material";

const UserDetails = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "john_doe",
    email: "john@example.com",
    // other user data...
  });

  const [isEditing, setIsEditing] = useState(false);

  const editDetail = () => {
    setIsEditing(!isEditing); // Toggles the editing mode
  };

  const saveChanges = () => {
    // Logic to save changes
    setIsEditing(false); // After saving, turn off the editing mode
  };

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
          <Typography variant="h5">{userData.name}</Typography>
          <Typography variant="p">@{userData.username}</Typography>
          <br />
          <Typography variant="p">email: {userData.email}</Typography>
          {isEditing ? (
            <Button onClick={saveChanges}>Save</Button>
          ) : (
            <Button onClick={editDetail}>Edit</Button>
          )}
        </>
      )}
    </div>
  );
};

export default UserDetails;
