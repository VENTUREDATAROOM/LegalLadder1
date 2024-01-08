
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { useState } from 'react';

const PricingTable =()=>{
    
     
     return(
          <Draggable
          axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
     //    onStart={this.handleStart}
     //    onDrag={this.handleDrag}
     //    onStop={this.handleStop}
        >
          <div 
          className={`handle`}
          >
          <div >
                    <table className= "table-auto border-collapse border border-slate-400 w-full  ">
                         <tr>
                              <th className="border border-slate-300">Name</th>
                              <th className="border border-slate-300">Price</th>
                              <th className="border border-slate-300">QTY</th>
                              <th className="border border-slate-300">Subtotal</th>
                         </tr>
                         <tr> 
                              <td className="border border-slate-300"></td>
                              <td className="border border-slate-300">$0.00</td>
                              <td className="border border-slate-300">1</td>
                              <td className="border border-slate-300">$0.00</td>
                         </tr>
                    </table>
             </div>
             <div className="lower flex justify-end ">
                    <table className=" border border-slate-400">
                         <tr>
                              <td className="border border-slate-300">Subtotal</td>
                              <td className="border border-slate-300">$0.00</td>
                              
                         </tr>
                         <tr>
                              <td className="border border-slate-300">Discount</td>
                              <td className="border border-slate-300">$0.00</td>
                         </tr>
                         <tr>
                              <td className="border border-slate-300">Tax</td>
                              <td className="border border-slate-300">$0.00</td>
                         </tr>
                         <tr>
                              <td className="border border-slate-300">Subtotal</td>
                              <td className="border border-slate-300">$0.00</td>
                         </tr>
                    </table>
             </div>
          </div>
          </Draggable>
     )
}

export default PricingTable;