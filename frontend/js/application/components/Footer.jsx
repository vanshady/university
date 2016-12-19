import React from 'react';

const Footer = () => {
    const footerStyle = {
        display: 'block',
        width: '100%',
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '12px',
    };
    return (
      <footer style={footerStyle}>
        <span>{ '\u00A9 2016 Minwei Xu and Xinyu Huang. All rights reserved.' }</span>
      </footer>);
};

export default Footer;
