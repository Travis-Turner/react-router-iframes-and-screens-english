import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'; 

function Dashboard () {
  return (
    <div className="dashboard">
      <h2>Emoji Critic — Everything About Emojis</h2>
      <p>
       The #1 Destination for Emoji Reviews on the World Wide Web since 2020!
      </p>
      <Link to="/reviews">
        Click here to see my latest reviews!
      </Link>
    </div>
  )
}

export default Dashboard;

