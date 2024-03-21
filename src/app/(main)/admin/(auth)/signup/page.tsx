import React from "react";
import LoginForm from "./Form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="r-text-xl r-font-bold">Create an Account</h1>
      <p className="r-text-sm opacity-70">
        Sign up now to begin your journey with us!
      </p>
      <LoginForm />
      <div className="flex justify-center items-center text-sm gap-1">
        <span className="opacity-60">Already have an account?</span>
        <Link href="/admin/login" className="text-primary">
          Log In
        </Link>
      </div>
    </div>
  );
}
