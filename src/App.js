import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Card from './Card'

const App = () => {
    const titleArr =[ 'This is first title', 'This is second title', 'This is three title'];
    const authorNameArr = ['', 'def', 'fgh'];
    const blog = [
        {
            title: 'This is first title',
            authorName: 'abc'
        },
        {
            title: 'This is second title',
            authorName: 'def'
        }
    ]
    return(
        <>
            <Navbar />
            <Header />
            {/* <Blog blog={blog}/>
            <Blog blog={blog}/>
            <Blog blog={blog}/>
            <Blog blog={blog}/> */}
            <section class="py-5">
                <div class="container px-5">
                    <h2 class="fw-bolder fs-5 mb-4">Featured Stories</h2>
                    <div class="row gx-5">
                        {
                            blog.map((val, index)=> {
                                return (
                                    <Card title={val.title} authorName={val.authorName} key={index}/>
                                )
                            })
                        }
                    </div>
                    <div class="text-end mb-5 mb-xl-0">
                        <a class="text-decoration-none" href="#!">
                            More stories
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )  
}

export default App;