import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-light p-2 rounded'>
            <h4 className='mb-4 mt-1'>Qzone</h4>
            <img src={qzone1} className='my-3 w-100' alt="" />
            <img src={qzone2} className='my-3 w-100' alt="" />
            <img src={qzone3} className='my-3 w-100' alt="" />
        </div>
    );
};

export default Qzone;