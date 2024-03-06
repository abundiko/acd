import React from "react";
import ResetPasswordForm from "./Form";
import Link from "next/link";
import ContinueWithGoogleButton from "@/components/ContinueWithGoogleButton";
import ContinueWithFacebookButton from "@/components/ContinueWithFacebookButton";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="r-text-xl r-font-bold">Reset Password</h1>
      <p className="r-text-sm opacity-70">Change your password</p>
      <ResetPasswordForm />
    </div>
  );
}
