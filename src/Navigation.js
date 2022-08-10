import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Root</Link>
        </li>
        <li>
          <Link to="/home"  >Home</Link>
        </li>
        <li>
          <Link to="/blogs" >Blogs</Link>
        </li>
      </ul>
    </nav>
  )
}
