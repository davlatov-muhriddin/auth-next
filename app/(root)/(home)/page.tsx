"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/user", { email, password });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>{isLoading ? "Loading..." : null}</h1>
      <input
        type="email"
        className="border-2 border-slate-700 p-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border-2 border-slate-700 p-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={createUser}
        className="bg-cyan-700 py-1 px-4 text-white font bold"
      >
        Create User
      </button>
    </div>
  );
}

export default Page;
