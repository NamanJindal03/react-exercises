import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function ArchivedBlogs() {
   const {name} = useOutletContext();
  return (
    <>
    

    <div>ArchivedBlogs {name}</div>
    </>
  )
}
