// src/components/Header.jsx
import React from 'react';

function Header(props) {
  return (
    <header style={{ padding: '20px', background: '#282c34', color: 'white', textAlign: 'center' }}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
}

export default Header;