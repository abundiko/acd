"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-full w-full flex items-center justify-center flex-col gap-5 p-10 md:p-20">
      <h1 className="font-extrabold text-red-900 text-5xl">Ooops!</h1>
      <p className="font-semibold text-lg opacity-80">
        We are unable to locate the requested page
      </p>
      <div className="flex gap-4">
        <button
          className="btn-primary w-fit px-6"
          onClick={() => history.back()}
        >
          Go Back
        </button>
        <Link href="/" className="btn-primary w-fit px-6">
          Go Home
        </Link>
      </div>
    </main>
  );
}
