"use client";

//NOTE: No [value] need in advanced form for handling just the [name] only
import React, { useState } from "react";



export default function AdvancedForm() {

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
    
  console.log(formValue);



  // fetch async-await
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          
        })
      })
      const resjson = await res.json()
      console.log(resjson)
    } catch (error) {
      console.log(error)
    }
  }



  // axios aync-await



  return (
    <div className="w-[300px] grid place-items-center">
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          className="px-4 py-2 text-black"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          className="px-4 py-2 text-black"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="px-4 py-2 text-black"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="px-4 py-2 text-black"
          onChange={handleChange}
        />
        <textarea  />


        <button type="submit" className="text-white bg-red-600">
          Submit
        </button>
      </form>
    </div>
  );
}
