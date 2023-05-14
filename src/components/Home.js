import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header/>
    <div className="buton">
      <Link to="/hist">
        <button>Explore!</button>
      </Link>
      </div>
      <Footer />
    </div> 
  )
}

export default Home