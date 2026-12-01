import React from "react";
import Header from "./Logo";
import Logo from "./Logo";

export default function Login() {
  return (
    <div className="m-4">
      <Logo />
        <h2 className="text-2xl my-6">Login to your account</h2>
      <form action="" className="flex flex-col gap-6 ">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="border border-gray-300 shadow w-full min-h-15 px-2"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="border border-gray-300 rounded shadow w-full h-15 px-2 "
        />
        <button className="bg-blue-800 py-4 text-xl text-white rounded">Sign in</button>
      </form>
    </div>
  );
}
