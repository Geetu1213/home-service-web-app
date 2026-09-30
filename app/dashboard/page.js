"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => { if (status === "unauthenticated") router.push("/login"); }, [status, router]);
  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-2xl font-bold text-gray-800">Welcome, {session?.user?.email} 🎉</h1>
    </div>
  );
}
