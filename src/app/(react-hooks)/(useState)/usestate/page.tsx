"use client"
import React, { useState } from 'react'



type UserValue = {
    name: string,
    city: string,
    age: number,
}

export default function Usestate1() {
    const [user, setUser] = useState<UserValue>({ name: "", city: "",
        age: 50
    })


    console.log(user)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div className='flex justify-center align-center bg-blue-500 w-full py-8'>
        <form>
            <input type="text" name="name" placeholder='Your name' onChange={handleChange} />
        </form>
    </div>
  )
}
