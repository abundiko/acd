import React from "react";
import LoginForm from "./Form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="r-text-xl r-font-bold">Welcome Back</h1>
      <p className="r-text-sm opacity-70">Login to access you account</p>
      <LoginForm />
      <div className="flex justify-center items-center text-sm gap-1">
        <span className="opacity-60">dont have an account?</span>
        <Link href="/admin/signup" className="text-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
