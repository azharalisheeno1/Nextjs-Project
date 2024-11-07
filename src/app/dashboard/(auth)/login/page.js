"use client";
import Link from "next/link";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>loading....</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  return (
    <>
<div className="flex flex-col items-center gap-5 p-4 sm:p-8 md:px-12 lg:px-16">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
    Greetings! It's a pleasure to have you with us.
  </h1>
  <h2 className="text-lg sm:text-xl md:text-2xl text-center mb-8">
    Please sign in to access your dashboard and explore all the features.
  </h2>

  <form
    onSubmit={handlesubmit}
    className="w-full max-w-md flex flex-col gap-6"
  >
    <input
      type="text"
      placeholder="Email"
      required
      className="p-4 bg-transparent border rounded-lg outline-none text-md font-medium"
    />
    <input
      type="password"
      placeholder="Password"
      required
      className="p-4 bg-transparent border rounded-lg outline-none text-md font-medium"
    />
    <button className="w-full p-4 bg-green-400 rounded-lg text-white font-medium hover:bg-green-500 focus:outline-none mt-4">
      Login
    </button>
  </form>

  <button
    onClick={() => signIn("google")}
    className="w-full sm:w-auto p-4 bg-orange-500 rounded-lg text-white font-medium hover:bg-orange-600 focus:outline-none mt-4"
  >
    Login with Google
  </button>

  <span className="my-2 text-sm sm:text-md">- OR -</span>

  <Link
    href="/dashboard/register"
    className="text-blue-500 text-lg sm:text-xl"
  >
    Create new account
  </Link>
</div>

    </>
  );
};

export default Login;
