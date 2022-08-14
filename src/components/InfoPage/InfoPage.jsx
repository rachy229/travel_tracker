import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
        <div>
          <h2> Thank You!</h2>
          <h5>Prime Digital Academy</h5>
          <h5>Jemisin Cohort</h5>
          <h5>Our instructor, Liz</h5>
          <h5>My support system at home</h5>
      </div>
    </div>
  );
}

export default InfoPage;
