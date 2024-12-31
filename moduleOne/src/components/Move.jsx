import React from 'react'
import { useState, useEffect } from 'react'
import './Move.css'

function Move() {
    const [position, setPosition] = useState({x:0,y:0});

    useEffect(()=>{
        const handleMouseMove = (event)=>{
            setPosition({
                x:event.clientX,
                y:event.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return()=>{
            window.removeEventListener('mousemove',handleMouseMove)
        }
    },[]);

  return (
    <div className='app'>
      <h1>Mouse move</h1>
      <div className='moveable-element' style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}>
        Moving element
      </div>
    </div>
  )
}

export default Move
