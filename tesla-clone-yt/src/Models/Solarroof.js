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
            <h1> Transform your roof and produce clean energy </h1>
        </span>
        <span className='s-img2'>
                <img src = "/Solar ROOF 2.jpg"  alt = "First-logo" />
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
                    <span className='s-img2'>
                            <img src = "/Model-S-route11-.png"  alt = "First-logo" />
                    </span>
                </div>
                <div className="model-s-part2">
                
                    <span className='s-img3'>
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

export default Solarroof