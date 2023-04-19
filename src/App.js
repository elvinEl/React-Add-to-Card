import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Amazon from './components/Amazon'
import CardStar from './components/CardStar'
function App() {
  const [show,setShow] = useState(true)
  const [card,setCard] = useState([])
  const handleClick =(item)=>{
    if(card.indexOf(item) !== -1) return;
    setCard([...card,item])
  }
  const handleChange= (item,d)=>{
    const ind =card.indexOf(item)
    const arr = card
    arr[ind].amount +=d
    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCard([...arr])
  }
  return (
    <div>
<Navbar setShow={setShow} size={card.length}/>
{show ? <Amazon handleClick={handleClick}/> : <CardStar card={card} setCard={setCard} handleChange={handleChange} />}
    </div>
  )
}

export default App