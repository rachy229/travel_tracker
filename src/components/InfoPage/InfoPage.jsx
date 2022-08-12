import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
        <div>
        <h1>Technologies used</h1>
        <h4>Node</h4>
        <h4>Express</h4>
        <h4>React with hooks</h4>
        <h4>Redux</h4>
        <h4>Redux-Sagas</h4>
        <h4>Postgresql</h4>
        <h4>Material UI</h4>
        <h4>Mapbox GL JS</h4>
        <h4>Mapbox Static Images API</h4>
      </div>
    </div>
  );
}

export default InfoPage;
