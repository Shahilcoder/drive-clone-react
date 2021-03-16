import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__container">
              <img src="https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png" alt="deive" />
              <h2>Drive</h2>
            </div>
              <div className="header__searchbutton">
                  <input className="searchButton" placeholder="Search in Drive"/>
              </div>
        </div>
    );
}

export default Header;
