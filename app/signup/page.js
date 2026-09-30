"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Account created! Redirecting to login...");
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-md shadow-md bg-white flex flex-col items-center">
      {/* Icon on top */}
      <FaUserCircle className="text-6xl text-blue-600 mb-4" />

      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded border"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded border"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded font-bold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
