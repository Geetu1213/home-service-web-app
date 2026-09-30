"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { User } from "lucide-react";

export default function Header() {
  const { data } = useSession();

  return (
    <div className="p-5 shadow-sm flex justify-between">
      {/* Left side logo + nav */}
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="logo" width={180} height={100} />
        <div className="md:flex items-center gap-6 hidden">
          <Link
            href="/"
            className="hover:scale-105 hover:text-primary cursor-pointer"
          >
            Home
          </Link>
           <Link
             href="/services"
             className="hover:scale-105 hover:text-primary cursor-pointer"
           >
             Services
           </Link>
           <Link
             href="/about"
             className="hover:scale-105 hover:text-primary cursor-pointer"
           >
             About Us
           </Link>
        </div>
      </div>

      {/* Right side user controls */}
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative cursor-pointer">
                {data?.user?.image ? (
                  <Image
                    src={data.user.image}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="text-gray-600" />
                  </div>
                )}
                {/* Green online indicator */}
                <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {data?.user?.name || "My Account"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/mybooking">My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-2">
            <Button onClick={() => signIn("descope", { callbackUrl: "/" })}>
              Login
            </Button>
            <Button onClick={() => (window.location.href = "/signup")}>
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
