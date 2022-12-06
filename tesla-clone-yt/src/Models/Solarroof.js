import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Solarroof = () => {
  return (
    <div> 
    <Header  /> 
    <div className = "model-route">
        <span className = "s-img1">
            <img src = "/Solar ROOF.1.jpg" alt = "Main-S-Logo" />
            <div className="text">
               <span> Transform your roof and produce clean energy </span>
            </div>
        </span>
        <div className="text-on-car">
                         <div className="first-on-cart">
                              <span id = "main-title-roof" > Solar Roof </span>
                              <span style = {{fontSize:'22px'}} id = "sub-title-roof"> Transform your roof and produce clean energy  </span>
                         </div>
                         <div className="second-on-cart">
                              <div id = "quality-1"> <span id = "speed"> Greater </span>   <span id = "speed-2" > Build Quality </span>   </div>
                              <div id = "quality-1">  <span id = "speed">  25-Year </span>   <span id = "speed-2" > Tile Warranty </span>    </div>
                              <div id = "quality-1">  <span id = "speed">  24/7 </span>   <span id = "speed-2" >  Outage Protection </span>  </div>                       
                              <div id = "quality-1">  <span id = "speed"> Custom </span>   <span id = "speed-2" > Options Available </span>  </div>                        
                        
                        </div> 
        {/* <span className='s-img2'>
                <img src = "/Solar ROOF 2.jpg"  alt = "First-logo" />
        </span> */}
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
</div>
  )
}

export default Solarroof