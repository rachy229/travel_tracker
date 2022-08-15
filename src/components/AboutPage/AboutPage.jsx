import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Technologies used</h2>
          <li>Node</li>
          <li>Express</li>
          <li>React with hooks</li>
          <li>Redux</li>
          <li>Redux-Sagas</li>
          <li>Postgresql</li>
          <li>Material UI</li>
          <li>Mapbox GL JS</li>
          <li>Mapbox Static Images API</li>

        <h2>Next Steps</h2>
          <li>Additional date filtering</li>
          <li>image upload</li>
      </div>
    </div>
  );
}

export default AboutPage;
