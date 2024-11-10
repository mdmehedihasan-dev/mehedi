import React from 'react'

export default function VideoComponent() {
  return (
    <div>
 
      <video width="600" controls>
        <source src="/images/projects/curentProject.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  
  )
}
