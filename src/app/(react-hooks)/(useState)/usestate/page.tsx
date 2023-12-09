"use client"

import React, { useState } from 'react'

export default function Usestate1() {
    const [user, setUser] = useState({ name: "", city: "",
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
    <div className='flex justify-center align-center'>
        <form>
            <input type="text" name="name" placeholder='Your name' onChange={handleChange} />
        </form>
    </div>
  )
}
