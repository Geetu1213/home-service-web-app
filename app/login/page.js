"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // icon for top of form

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="p-8 shadow-lg rounded-md w-96 bg-white flex flex-col items-center"
      >
        {/* Icon on top */}
        <FaUserCircle className="text-6xl text-blue-600 mb-4" />

        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
