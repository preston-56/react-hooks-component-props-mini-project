import React from 'react'

function About({about,Image = "https://via.placeholder.com/215"}) {
    
  return (
    <div>
        <aside>
            <img src={Image} alt="logo.svg" />
            <p>{about}</p>
        </aside>
    </div>  
  )
}

export default About