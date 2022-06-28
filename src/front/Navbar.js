import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <h4 className="navbar-brand ms-3" >SORT VISUALIZER</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto" >
        <li className="nav-item">
          <a className="nav-link" style={{color:"black"}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  style={{color:"black"}} href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  style={{color:"black"}} href="#info">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
