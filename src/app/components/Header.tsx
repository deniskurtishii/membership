import React from 'react'
import Link from 'next/link'
function Header() {
  return (


    <div className="header">
    <Link href="/"><div className="logo">Millionare's club</div></Link>
    <div className="menu">
    <Link href="/about"><div className="menu_item">About</div></Link>
    <Link href="/contact"><div className="menu_item">Contact</div></Link>
    <Link href="/services"><div className="menu_item">Services</div></Link>
    <Link href="/login"><div className="menu_item login_btn">Login</div></Link>
    </div>
    </div>

  )
}

export default Header