import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Solarpanel = () => {
  return (
    <div> 
    <Header  /> 
    <div className = "model-route">
        <span className = "s-img1">
            <img src = "/Solar Panel-1 .jpg" alt = "Main-S-Logo" />
            <div className="text">
               <span>Lowest Cost Solar Panels in America </span>
            </div>
        </span>
        <div className="text-on-car">
                         <div className="first-on-cart">
                              <span id = "main-title" > Solar for Existing Roofs </span>
                              <span style = {{fontSize:'22px'}}> Lowest Cost Panels in America- Money-back guarantee </span>
                         </div>
                         <div className="second-on-cart">
                              <div id = "quality-1"> <span id = "speed">  Sunlight </span>   <span id = "speed-2" > to Energy </span>   </div>
                              <div id = "quality-1">  <span id = "speed">  Lowest </span>   <span id = "speed-2" > Price for Solar </span>    </div>
                              <div id = "quality-1">  <span id = "speed">  24/7 </span>   <span id = "speed-2" >  Energy Monitoring </span>  </div>
                              <div id = "quality-1">  <span id = "speed">  Feedback </span>   <span id = "speed-2" >  Appreciated </span>  </div>
                         </div>
                    </div> 
        <span className='s-img2'>
                <img src = "/Solar Panel-2 .jpg"  alt = "First-logo" />
        </span>
    </div>
            <div className = "model-s-partition">
                <div className="model-s-part1">
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
                <div className="model-s-part2">
                
                    <span className='s-img22'>
                        <img src = "/Model-S-route12.png" alt = "Second-logo" />
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

export default Solarpanel