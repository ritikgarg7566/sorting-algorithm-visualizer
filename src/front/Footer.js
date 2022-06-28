import React from 'react'
import '../App.css';

const Footer = () => {
  return (
    <div className='d-flex' id='contact' style={{padding:"1% 15%",color:"white",background:"rgb(38, 38, 38)"}}>
      <div className='m-auto'>
        <h3 className='footerh3'>SORT VISUALIZER</h3>
        <h6 className='footerh6'>ritik garg       <i className="fa-solid fa-envelope"></i> <i className="fa-brands fa-instagram-square"></i> <i className="fa-brands fa-facebook-square"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-linkedin"></i></h6>
        <h6 className='footerh6'>ritik mahajan    <i className="fa-solid fa-envelope"></i> <i className="fa-brands fa-instagram-square"></i> <i className="fa-brands fa-facebook-square"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-linkedin"></i></h6>
        <h6 className='footerh6'>ritik sindhwani  <i className="fa-solid fa-envelope"></i> <i className="fa-brands fa-instagram-square"></i> <i className="fa-brands fa-facebook-square"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-linkedin"></i></h6>
      </div>
      <div className='m-auto'>
        <h3 className='footerh3'>Contacts</h3>
        <h6 className='footerh6'>ritikgarg6261@gmail.com</h6>
        <h6 className='footerh6'>mahajanrd20@gmail.com</h6>
        <h6 className='footerh6'>ritiksindhwani02@gmail.com</h6>
      </div>
      <div className='m-auto'>
        <h3 className='footerh3'>Reference</h3>
        <a href="https://github.com/ritikgarg7566?tab=repositories" style={{textDecoration:"none" ,color:"white"}}><h5 className='footerh6'><i className="fa-brands fa-github"></i> GitHub</h5></a>
    
      </div>
    </div>
  )
}

export default Footer
