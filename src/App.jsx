import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route, Routes } from "react-router";
import Main from "./Components/Main";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
