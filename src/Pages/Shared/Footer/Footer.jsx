import React from 'react';
import logo from './Poly-Fusion.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-900 text-neutral-content">
  <div>
  <img className="w-16"src={logo} alt="" /> 
    <p className='text-extra-bold text-xl'>Poly-Fusion 
    <br /><a href="#"><FontAwesomeIcon icon={faPhone} className="text-xl" /></a>  +123675324 <br /><a href="#"><FontAwesomeIcon icon={faEnvelope} className="text-xl" /></a>  language@polyfusion.com <br /><a href="#"><FontAwesomeIcon icon={faMapMarker} className="text-xl" /></a>  Poly-Fusion Language Learning School,
         123 Main Street
         Anytown, USA,
         Postal Code-12345 <br />Copyright © 2023 Poly-Fusion. All rights reserved.
    </p>
  </div> 
  <div className='mt-12'>
    <span className="footer-title">Get In Touch</span> 
    <div className="grid grid-flow-col gap-4">
    <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter}className="text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram}className="text-2xl" /></a>
            <a href="#"> <FontAwesomeIcon icon={faYoutube}className="text-2xl" /></a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;