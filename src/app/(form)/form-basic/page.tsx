"use client";

// NOTE: No [name] reuired fir the input field in inline input field  just [value] only
import React, { useEffect, useState } from "react";

export default function BasicForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

    const user = {
      email,
      password,
      address,
      zipcode
    }

    // Fetch promise
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    }



    // axios promise

  
    


  return (
    <div className="w-[300px] grid place-items-center">
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className="px-4 py-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="px-4 py-2 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          className="px-4 py-2 text-black"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="zipcode"
          className="px-4 py-2 text-black"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button type="submit" className="bg-red-500">Submit</button>
      </form>
    </div>
  );
}
