import React, {useState} from "react";
import ReactDOM from 'react-dom/client';

function Navbar (){

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
              <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="faq.html">FAQ</a></li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                      <li><a className="dropdown-item" href="blog-home.html">Blog Home</a></li>
                      <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
                  </ul>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                      <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                      <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                  </ul>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;