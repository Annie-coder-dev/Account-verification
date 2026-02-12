import React, { useState } from "react";
import Logo from "./Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  
  function handleSubmit(e) {
    e.preventDefault();
    
    // CHECK FOR FIELD REQUIRED
    if (!email || !password || !confirmPassword) {
      return alert("All field is required!");
    }
    
    // Check if password match with confirm password
    if (password !== confirmPassword) {
      return alert("Password do not match!");
    }
    
    // Save User's info
    const userData = {email,password}
    localStorage.setItem("user" , JSON.stringify(userData))
    // JSON.stringify convertss userData to string

    // Notify success
    alert("Account created successfully")

    // Navigate to next page
    navigate("/login")
    
  }
  return (
    <div className="m-4">
      <Logo />
      <h2 className="text-2xl my-6">Create a new account</h2>
      <form
        // action=""
        className="flex flex-col gap-6 "
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="border border-gray-300 shadow w-full min-h-15 px-2 rounded outline-blue-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name=""
            id=""
            placeholder="Password"
            className="border border-gray-300 rounded shadow w-full h-15 px-2 outline-blue-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaEyeSlash className="absolute top-5 right-7 " />
            ) : (
              <FaEye className="absolute top-5 right-7" />
            )}
          </div>
        </div>

        {/* Confirm password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name=""
            id=""
            placeholder="Confirm password"
            className="border border-gray-300 rounded shadow w-full h-15 px-2 outline-blue-700"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? (
              <FaEyeSlash className="absolute top-5 right-7 " />
            ) : (
              <FaEye className="absolute top-5 right-7" />
            )}
          </div>
        </div>
        <button className="bg-blue-800 py-4 text-xl text-white rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
