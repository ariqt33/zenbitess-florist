import React from 'react';
import './main.css';

function Main() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://t3.ftcdn.net/jpg/08/53/18/12/360_F_853181200_9bmL7be0iu5DNYXoVM4yDs4Zfwk2r5PP.jpg"alt
            height="38"
          />
          <span className="logo-text">Zenbitess Florist</span>
        </div>
        <ul className="nav-list">
          <li>Main</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Main;
