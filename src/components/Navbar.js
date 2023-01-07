import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <div className="iwaiter_navbar">

            <div className="menu_div">
                <div className="menu_icon_div">
                    <div className="box_navbar"></div>
                    <div className="box_navbar"></div>
                    <div className="box_navbar"></div>
                </div>
            </div>

            <div className="logo_div">
            <img src="/images/icons/logo.jpeg" alt="" />
            </div>

            <div className="search_div">
            <img src="/images/icons/search.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Navbar