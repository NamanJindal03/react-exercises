import React from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'


export default function BlogsLayout() {
  return (
    <>
    <nav>
        <ul>
          <li>
              <Link to="/blogs/3">3rd Blog</Link>
          </li>
          <li>
              <Link to="/blogs/4">4th Blog</Link>
          </li>
          <li>
              <Link to="/blogs/5">5th Blog</Link>
          </li>
        </ul>
    </nav>
    <Outlet context={{name:'naman'}}/>
    <h1>After Outlet</h1>
    </>
  )
}
