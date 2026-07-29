// src/components/Footer.jsx
import React from 'react';

function Footer(props) {
  return (
    <footer style={{ padding: '10px', background: '#f1f1f1', textAlign: 'center', position: 'fixed', width: '100%', bottom: 0 }}>
      <p>{props.copyright}</p>
    </footer>
  );
}

export default Footer;