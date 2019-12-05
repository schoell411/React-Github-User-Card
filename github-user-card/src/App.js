import React from 'react';
import User from './components/User';
import Followers from './components/Followers';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>GitHub Followers</h1>
      <User />
      <h2>Followers:</h2>
      <div className="follower-list">
        <Followers />
      </div>
    </div>
  );
}

export default App;