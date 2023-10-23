import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// import Quantum from "./Quantum";


function User_dashboard() {
  let [username, setUsername] = useState("ABC1234");
  let [email, setEmail] = useState("xyz@gmail.com");
  let [password, setPassword] = useState("********");

  function myFun() {
    toast("User Created!");
  }

  return (
    <div className="container text-light">
      <form action='localhost:5005/users/add' method="post">
      <TextField
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
          },
        }}
        type="text"
        className="text-light"
        defaultValue={""}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder={username}
        name="username"
        id="username"
        color="secondary"
        focused
        label="Username"
        variant="outlined"
      />

      <TextField
        type="email"
        placeholder={email}
        // onClick={myFun}
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
          },
        }}
        defaultValue={""}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        color="success"
        name={email}
        id="email"
        label="Email"
        variant="outlined"
        focused
      />
      
      <TextField
        type="password"
        placeholder={password}
        color="success"
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
          },
        }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="password"
        name="password"
        label="Password"
        variant="outlined"
        focused
      />
      
      <Button type="submit" onClick={myFun}>Submit</Button>
      </form>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default User_dashboard;
