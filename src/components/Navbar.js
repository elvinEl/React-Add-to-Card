import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import '../styles/navbar.css'
function Navbar({setShow}) {
  return (
    <nav>
    <div className='nav_box'>
<span className='my_shop' onClick={()=>setShow(true)}>Ali Express</span>
<div className='cart' onClick={()=>setShow(false)}>
    <span>
        <FiShoppingCart/>
    </span>
    <span>0</span>
</div>
    </div>
    </nav>
  )
}

export default Navbar