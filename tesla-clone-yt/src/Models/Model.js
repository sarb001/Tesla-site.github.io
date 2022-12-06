import React from 'react'
import Footer from '../Footer';
import Header from '../Header'
import './Model.css';

const Model = () => {
  return (
    <div> 
        <Header  /> 
               <div className = "model-route">
                    <span className = "s-img1">
                         <img src = "/Model-s-main-pic.jpg" alt = "Main-S-Logo" />
                         <div className="text">
                              Interior of the Future 
                         </div>
                    </span>
                    <div className="text-on-car">
                         <div className="first-on-cart">
                              <span id = "main-title" > Model  S </span>
                              <span style = {{fontSize:'22px'}}> Plaid </span>
                         </div>
                         <div className="second-on-cart">
                              <div id = "quality-1"> <span id = "speed"> 396mi </span>   <span id = "speed-2" > Range (EPA est.) </span>   </div>
                              <div id = "quality-1">  <span id = "speed"> 1.99s </span>   <span id = "speed-2" > 9-60 mph </span>    </div>
                              <div id = "quality-1">  <span id = "speed">  200mph </span>   <span id = "speed-2" >  Top Speed </span>  </div>
                              <div id = "quality-1">  <span id = "speed"> 1,020hp </span>   <span id = "speed-2" > Peak Power </span> </div>
                         </div>
                    </div> 
                    <span className='s-img2'>
                              <img src = "/Model -s -route -122.png"  alt = "First-logo" />
                    </span>
               </div>
                 
                <div className = "model-s-partition">
                      <div className = "model-s-part1">
                        <div> 
                             <h2> Stay Connected </h2>   
                            <p> Instantly connect with multi-device Bluetooth, 
                                or fast charge devices with wireless and 36-watt
                             USB-C charging.</p>
                        </div>
                        <span className='s-img11'>
                                <img src = "/Model-S-route11-.png"  alt = "First-logo" />
                        </span>
                      </div>
                       <div className   = "model-s-part2">
                        <span className = 's-img22'>
                            <img src = "/Model-S-route12.png" alt = "Second-logo"  />
                        </span> 
                        <div> 
                             <h2> Room for Everything </h2>   
                            <p>With front and rear trunks and fold-flat seats you
                                 can fit your bike without taking the wheel off—and 
                                 your luggage too.</p>
                        </div>
                      </div>
                </div>



            <Footer />    
    </div>
  )
}

export default Model