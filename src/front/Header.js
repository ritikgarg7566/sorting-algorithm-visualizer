import React from 'react'


const Header = () => {
  return (
    <div style={{ width: "100%",marginTop:"10%",paddingBottom:"10%" }}>
      <div className="row">
        <div className="col-md-6 head-css" style={{paddingLeft:"7%"}}>
          <h1 >Easy Way To Understand The Working Of Various Sorting Algorithm.</h1>
          <a href="/inner"><button type="button" className="btn btn-dark btn-lg getstart...-button my-3"><i className="fa-solid fa-arrow-down-short-wide"></i> Get Started</button></a>
        </div>
        <div className="col-md-6">
          <div style={{ borderRight: "5px solid black", width: "75%", textAlign: "right", paddingRight: "1%", color: "white"}}>
            <h1 style={{ fontSize: "5vw"}}>SORT</h1>
            <h1 style={{ fontSize: "5vw" }}>VISUALIZER</h1>
          </div>
        </div>
      </div></div>
  )
}

export default Header
