import React, { useState, useEffect } from 'react';

export default function Fetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)





    /* promise
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(error => {
          setError(error)
          setLoading(false)
        })
    })
    */

    

    2. // Aysnc Await
    useEffect(() => {
      fetchData()
    }, [])


    
    const fetchData = async () => {
      try {
        const myApiKey = 'MY_API_KEY';


        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "GET", // POST || PUT || PATCH || GET
          headers: {
            'content-Type': 'applicationjson',
            'Authorization': `Bearer ${myApiKey}`
          },
        });

        if (!response.ok) {
          throw new Error('Request Failed');
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error)

      }
    }


  return (
    <div>

    </div>
  )
}
