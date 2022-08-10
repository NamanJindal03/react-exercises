import React from 'react'
import {useParams, Link} from 'react-router-dom'


export default function Blog() {
  const {blogId} = useParams();

  return (
    <>
    
    <div>Blog Id {blogId}</div>
    </>
  )
}
