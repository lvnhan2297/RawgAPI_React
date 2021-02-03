import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div style={{textAlign:'center'}}> 
      <Link to='/games' 
      style={{display:'block',
      fontSize:'20px',
      textDecoration:'none',
      fontWeight:'bold',
      padding:'1rem 2rem',
      backgroundColor:'#ffff',
      borderRadius:'10px',
      width:'fit-content',
      margin: '1rem auto',
      color:'black'
      }}>Homepage</Link>
      <p style={{fontSize:'14px'}}>The image is for illustrative purposes only</p>
      <img src="https://rawg.io/assets/images/cover.117cc320ec2800b9b12092ca23d6e86d.png" alt=""/>
    </div>
  )
}

export default HomePage
