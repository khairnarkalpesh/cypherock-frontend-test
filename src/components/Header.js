import React from 'react'
import logo from '../assets/logo/logo.png'
function Header() {
  return (
    <div>
        <img src={logo} width={120}/>
        <hr style={{color:'#666'}}/>
    </div>
  )
}
export default Header