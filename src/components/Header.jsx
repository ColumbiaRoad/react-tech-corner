import React from 'react';
import '../styles/header.css';
import crLogo from '../styles/assets/columbia-road-logo.png';
import futuLogo from '../styles/assets/futurice-logo-basic.png';

const Header = () => (
  <div className="cr-header">
    <img src={crLogo} alt="CR-Logo" className="cr-logo"/>
    <img src={futuLogo} alt="Futurice-Logo" className="futu-logo" />
  </div>
);

export default Header;
