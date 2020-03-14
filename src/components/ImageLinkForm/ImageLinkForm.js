import React from 'react';
import './ImageLinkForm.css'

const ImageLinkFrom = () => {
    return(
        <div>
            <p className='f3'>
                {'This magic brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5 form'>
                    <input className='f4 pa2 w-70 center' type='tex'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkFrom;
