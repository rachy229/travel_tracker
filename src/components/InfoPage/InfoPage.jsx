import React from 'react';
import './InfoPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
        <div>
          <h2> Thank You!</h2>
          <li>Prime Digital Academy</li>
          <li>Jemisin Cohort</li>
          <li>Our instructor, Liz</li>
          <li>My support system at home</li>

          <div className='link-div'>
            <a className='link' href='https://www.linkedin.com/in/rachel-bruce-777881243/' >Rachel Bruce</a>
          </div>
      </div>
    </div>
  );
}

export default InfoPage;
