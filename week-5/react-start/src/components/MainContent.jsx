import React from 'react';

function MainContent(props) {
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{props.greeting}</h2>
      <p>{props.bodyText}</p>
    </main>
  );
}

export default MainContent;
