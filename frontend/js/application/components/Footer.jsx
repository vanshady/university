import React from 'react';

class Footer extends React.Component {
    render() {
        const footerStyle = {
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginTop: '15px',
        };
        return (
          <footer style={footerStyle}>
            <span>{ '\u00A9 2016 Howard.Zuo, All rights reserved.' }</span>
          </footer>);
    }
}

export default Footer;
