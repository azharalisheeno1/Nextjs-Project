"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-2xl font-medium max-w-2xl text-center">Sign up now to create an account and unlock personalized features tailored just for you.</h1>
     
        <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            required  
            className="px-3 py-2 bg-transparent border  rounded-lg text-md font-medium"
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            className="px-3 py-2 bg-transparent border  rounded-lg text-md font-medium"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="px-3 py-2 bg-transparent border  rounded-lg text-md font-medium"
          />
          <button 
            className="w-72 px-3 py-2 mx-auto cursor-pointer bg-green-400 border-none rounded-lg text-white font-medium">
            Register
          </button>
          {error && <span className="text-red-500">{error}</span>}
        </form>
        <span className="text-center">- OR -</span>
        <Link className="text-blue-500 text-lg" href="/dashboard/login">
          Login with an existing account
        </Link>
      </div>
    </>
  );
};

export default Register;
