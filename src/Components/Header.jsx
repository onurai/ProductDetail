import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const stop = (e) =>{
    e.prevenetDefault();
  }
  
  return (
    <header className='container-fluid'>
      <div className="row justify-content-evenly bg-danger py-3 px-4">
        <div className="left col-lg-8">
          <Link to={'/'}>HomePage</Link>
          <Link to={'/Card'}>Card</Link>
          <Link to={'/details'}>Product Details</Link>
          
        </div>
        <div className="right col-lg-4 d-flex align-items-center">
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button onClick={stop} id='right-button' className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header