import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ textDecoration: 'underline', color: 'blue' }}>Go to Home</a>
    </div>
  );
};

export default NotFound;