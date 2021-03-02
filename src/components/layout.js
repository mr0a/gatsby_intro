import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';

export default ({children}) => (
	<div>
		<Helmet>
			<title>Gatsby Website</title>
		</Helmet>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark static-top">
            <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home
                    <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about/">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/employees/">Employees</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>

        <div className="container">
            {children}
        </div>
    </div>
);