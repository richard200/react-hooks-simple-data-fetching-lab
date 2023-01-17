// create your App component here
import React, { useEffect, useState } from "react";


function App() {
  let [pic, setPic] = useState([])
  let [load, setLoad] = useState(false)
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setPic(data)
        setLoad(true)

      })

  }, [])

  if (!load) 
  return <p>Loading...</p>
  return (
    <div>
     <img src={pic} alt="A Random Dog"></img>
    </div>
  );
}

export default App;