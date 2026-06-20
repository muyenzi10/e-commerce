import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand brand" href="/">
          Shoppier
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/cart">
                <i class="fa-solid fa-cart-arrow-down"></i>
                Cart
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link sign-btn" href="/login">
              <i class="fa-solid fa-user"></i>
                Sign in
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header