import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Brain.png'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 120, width: 120 }} >
            <div className="Tilt-inner pa3">
                <img style={{paddingTop:'5px', width:'80px', height:'80px'}} alt='Logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;