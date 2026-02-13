import { useState } from "react";
import Logo from "./Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    // Check all fields
    if (!email || !password) {
      return alert("All fields required!!");
    }

    // Get the user info from localStorage
    
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    console.log({ email, password });

    // Verify if user exist
    if (user.email !== email.toLocaleLowerCase() || user.password !== password) {
      return alert("Invalid credentials");
    }
    alert("login successful")

    navigate("/")
  }

  return (
    <div className="m-4">
      <Logo />
      <h2 className="text-2xl my-6">Login to your account</h2>
      <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
        <button className="bg-blue-800 py-4 text-xl text-white rounded">
          Sign in
        </button>
      </form>
    </div>
  );
}
