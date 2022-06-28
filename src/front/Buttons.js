import React from 'react'
import '../App.css'

const Buttons = () => {
  return (
    <div id="sort">
      <h2 className='my-3'>Select to Start Visualize Sorting Algorithm</h2>
      <div className="row" style={{padding:"1% 12%"}}>
          <div className="col-lg-6" style={{padding:"3% 5%"}}>
          <div className="row">
         <div className="col-lg-6 col-md-6">
           <a href="/inner?sort=bubble" className="anch">
             <div className="hexagon-wrapper ">
               <div className="hexagon">
                 <i className="text-rotate">Bubble</i>
               </div>
             </div>
           </a>
         </div>
         <div className="col-lg-6 col-md-6">
           <a href="/inner" className="anch">
             <div className="hexagon-wrapper ">
               <div className="hexagon">
                 <i className="text-rotate">Selection</i>
               </div>
             </div>
           </a>
         </div>
         <div className="col-lg-6 col-md-6 m-auto">
           <a href="/inner" className="anch">
             <div className="hexagon-wrapper ">
               <div className="hexagon">
                 <i className="text-rotate">Insertion</i>
               </div>
             </div>
           </a>
         </div>
       </div>
          </div>
          <div className="col-lg-6" style={{padding:"3% 5%"}}>
          <div className="row" >
         <div className="col-lg-6 col-md-6">
           <a href="/inner" className="anch">
             <div className="hexagon-wrapper ">
               <div className="hexagon">
                 <i className="text-rotate">Merge</i>
               </div>

             </div>
           </a>
         </div>
         <div className="col-lg-6 col-md-6">
           <a href="/inner" className="anch">
             <div className="hexagon-wrapper ">
               <div className="hexagon">
                 <i className="text-rotate">Quick</i>
               </div>
             </div>
           </a>
         </div>
         <div className="col-lg-6 col-md-6 m-auto">
           <a href="/inner" className="anch">
             <div className="hexagon-wrapper ">
               <div className="hexagon">
                 <i className="text-rotate">Heap</i>
               </div>
             </div>
           </a>
         </div>
       </div>
          </div>
      </div>
    </div>
  )
}

export default Buttons


