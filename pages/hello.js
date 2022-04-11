import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'



export default function Hello() {
    const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
useEffect( 
    async () => {
    try{const response = await fetch('http://localhost:3000/api/hello')
    const data = await response.json()
    setData(data)
    setLoading(false)
}catch(err){console.error(err.message)}
},[])
  if (isLoading) return <div>Loading ...</div>
  if (!data) return <p>No profile data</p>
  return (
          <>
          <Container style={{height:'300px', marginTop:'70px'}}>
            <h3 style={{color:'black'}}>
                {data?.name}
            </h3>
          </Container>
          </>
  )
}
