import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#D3D3D3' }}>
            <a className="navbar-brand mb-0 h1 font-italic text-dark" href="#">Rent-a-Car NS</a>
            <img src={logo} alt="logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars" style={{color:'#fff'}}/>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-dark ml-5" to="/"><i className="fas fa-home"></i>Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark ml-5" to="/terms">Terms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark ml-5" to="/contacts">Contact Us</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <a class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>
                    <a class="btn-floating btn-lg btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>
                    <a class="btn-floating btn-lg btn-email" type="button" role="button"><i class="fas fa-envelope"></i></a>
                    <a class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fab fa-whatsapp"></i></a>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}
export default Navbar;
