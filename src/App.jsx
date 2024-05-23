import { useState } from 'react'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState("")
  const [arr, setArr] = useState([]);

  
  function handleClick(){
    setArr([...arr,userInput]);
  }
  return (
    <>
      <div className='card'>
       <h3>Todo List</h3> 
       <input onChange={(e)=>{
        setUserInput(e.target.value);
       }}/>
       <button onClick={()=>{
        handleClick();
       }}> Add Item</button>
       <ul>
        {
          arr.map((item,index) =>{
            return (
              <li key={index} className="listitem">
                <p>{item}</p>
                <button onClick={()=>{
                  setArr(arr.filter((element) => element !== item))
                }}>Delete</button>
              </li>
            )
          })
        }
        </ul>
      </div>
    </>
  )
}

export default App
