import React , { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#FFFFFF");
  function ChangeColor(e){
    setColor(e.target.value)
  }
  return (
    <>
      <div className="container">
        <div>
        <h1>Color Picker</h1>
         <label >Select Color -  
            <input type="color" value={color} onChange={ChangeColor} />
        </label>
        <div className='box'style={{backgroundColor: color}}>Selected Color : {color}</div>
        </div>
      </div>
    </>
  )
}

export default App
