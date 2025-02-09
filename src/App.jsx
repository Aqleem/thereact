import { useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
const [input , setInput] = useState("")
const [name , setName] = useState("")
const [flag , setFlag] = useState("")



function getadd(){
  axios.get(`https://restcountries.com/v3.1/name/${input}`)
  .then(function (response) {
    // handle success
    console.log(response.data[0].flags.png);
    setName(response.data[0].name.official)
    setFlag(response.data[0].flags.png)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}




  return (
    <>
    <div className='div'>
   <input type="text" onChange={(e) => setInput(e.target.value)} /> 
   <br />
   <button onClick={getadd}>search</button>
   <h2>{name}</h2>
   <img src={flag} alt="" />

   </div>
    </>
  )
}

export default App
