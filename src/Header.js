import React from "react";

const Header = () =>{
    return (
        <header className="py-5">
            <div className="container px-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xxl-6">
                        <div className="text-center my-5">
                            <h1 className="fw-bolder mb-3">Our mission is to make building websites easier for everyone.</h1>
                            <p className="lead fw-normal text-muted mb-4">Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                            <a className="btn btn-primary btn-lg" style={{fontSize:'50px'}} href="#scroll-target">Read our story</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;