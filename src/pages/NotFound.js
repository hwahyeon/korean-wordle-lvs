// React
import React from "react";
import { Link } from "react-router-dom";

// Component
import { Helmet } from "react-helmet";
import Header from "@components/Header";

// Style
import "@styles/pages/_notfound.scss";

// Images
import notfound from "@assets/notfound.webp";

const NotFound = () => (
  <div className="notfound">
    <Helmet>
      <title>한글 Wordle | 404</title>
    </Helmet>
    <Header />
    <div className="notfound__content">
      <h1 className="notfound__title">404 - Page Not Found</h1>
      <img src={notfound} alt="Not Found" className="notfound__image" />
      <p className="notfound__text">
        The page you are looking for does not exist. Please check the URL or
        return to the homepage.
      </p>
      <Link to="/" className="notfound__link">
        Go to Homepage
      </Link>
    </div>
  </div>
);

export default NotFound;
