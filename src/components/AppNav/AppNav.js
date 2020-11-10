
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav2 from './Navbarlogin'
import { connect } from 'react-redux';

import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from '../layout/SignedOutLinks'
import Admin from './Admin'

import SignOut from "../../UI/Routes/SignOut"
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const AppNav = (props) => {

  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <div>
    
  <section id="topbar" class="d-none d-lg-block">
    <div class="container clearfix">
      <div class="contact-info float-left">
        <i class="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
        <i class="icofont-phone"></i> +1 5589 55488 55
      </div>
      <div class="social-links float-right">
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="skype"><i class="icofont-youtube"></i></a>
      </div>
    </div>
  </section>

  
  <header id="header">
    <div class="container">

      <div class="logo float-left">
      <Link className='nav-link' to='/'><h1 class="text-light">Protectora</h1></Link>
        
        {/* <a href="index.html"><img src="/img/Logo.png" alt="" class="img-fluid"/></a> */}
      </div>

      <nav class="nav-menu float-right d-none d-lg-block">
        <ul>
          <li><Link className='nav-link' to='/'>Inicio</Link></li>
          <li><Link className='nav-link' to='/Gallery'>Mascotas</Link></li>
          <li><Link className='nav-link' to='MoneyBanner'>Donaciones</Link></li>
          <li><a href="#contact">Contact Us</a></li>
          <li>{profile.isAdmin === true &&
              <Link className='nav-link' to='/Admin'>Administrador</Link>}</li>
              <li><NavLink to='/entrar'>Ingresar</NavLink></li>
          <li class="drop-down"><Nav2 />
            <ul>
              <li><a href="#"><Link className="dropdown-item" to="/MiPerfil">Ver mi Perfil</Link>
        <SignOut /></a></li>
              
                
            </ul>
          </li>
          
        </ul>
      </nav>

    </div>
  </header>
    {/* <Container className='p-0' fluid={true}>
      <NavBar className='border-bottom' bg='light' expand='lg'>
        <NavBar.Brand href="/">
          <img src="/img/Logo.png"
            width="201px"
            height="103px"
            alt=""
            loading="lazy"
          />
        </NavBar.Brand>

        <NavBar.Toggle className='border-0' aria-controls='navbar-toggle' />
        <NavBar.Collapse id='navbar-toggle'>
          <Nav className='ml-auto'>
            <Link className='nav-link' to='/AboutUs'>Historia</Link>
            <Link className='nav-link' to='/Volunteering'>Voluntariado</Link>
            <Link className='nav-link' to='/Gallery'>Mascotas</Link>
            <Link className='nav-link' to='/Gallery'>Tienda</Link>
            <Link className='nav-link' to='MoneyBanner'>Donaciones</Link>
            {profile.isAdmin === true &&
              <Link className='nav-link' to='/Admin'>Administrador</Link>}
          </Nav>
          <Nav2 />
        </NavBar.Collapse>
      </NavBar>
    </Container> */}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(AppNav)