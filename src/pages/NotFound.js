import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import notfound from "@assets/notfound.webp";
import Header from '@components/Header';

const NotFound = () => (
  <div>
    <Helmet>
      <title>Page Not Found</title>
      <meta name="description" content="Sorry, the page you are looking for does not exist." />
    </Helmet>
    <Header />
    <h1>404 - Page Not Found</h1>
    <img src={notfound} alt="wordle icon" style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }} />
    <p>The page you are looking for does not exist. Please check the URL or return to the homepage.</p>
    <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none', color: 'blue' }}>
      Go to Homepage
    </Link>
  </div>
);

export default NotFound;