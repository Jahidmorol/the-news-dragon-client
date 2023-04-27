import React from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" />
            <p className='my-2 '>Journalism Without Fear or Favour</p>
            <h5>{moment().format("dddd, MMMM Do YYYY")}</h5>
        </div>
    );
};

export default Header;