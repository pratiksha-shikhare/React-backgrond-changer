import { useState } from "react"

function App() {

  const [color, setColor] = useState("black")
  
  return (
    <>
      <div className="container">
        <div style={{backgroundColor: color, height: '30rem', margin: "10px", borderRadius: "5%"}}></div>
        <div style={{height: "3rem", backgroundColor: "olive", margin: "10px", padding: "10px", borderRadius: "5%"}}>
          <button onClick={() => setColor("red")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("blue")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("green")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("olive")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("black")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "black", color:"white"}}>Black</button>
          <button onClick={() => setColor("white")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("purple")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("yellow")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("gray")} style={{margin:"5px", borderRadius:"15px", cursor:"pointer", backgroundColor: "gray"}}>Gray</button>
        </div>
      </div>
    </>
  )
}

export default App
