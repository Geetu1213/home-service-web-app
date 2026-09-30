"use client";

import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

export default function HomePage() {
  const { data: session } = useSession();

  // If not logged in
  if (!session) return <p className="text-center mt-20">You must log in first.</p>;

  // Logged in view with symbol
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* User Icon */}
      <FaUserCircle className="text-6xl text-purple-600 mb-4" />

      {/* User Email */}
      <h1 className="text-3xl font-bold mb-2">Welcome, {session.user.email}</h1>

      {/* Logout Button */}
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
