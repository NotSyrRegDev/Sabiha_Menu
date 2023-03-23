import React from 'react';
import './Footer.css';


const Footer = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className='section fotter_section' >
        <footer>
            <div className="footer_area">
            <h1 className="footer_subheadline">بني ❤️ بواسطة  
              <span onClick={() => openInNewTab('https://notregsyrdev.web.app/') } > عمار حمدي حموش  - <br> </br>codingammarhamdi@gmail.com </span>
               </h1>
            </div>

        </footer>
    </div>
  )
}

export default Footer