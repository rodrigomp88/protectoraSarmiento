import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav2 from "./Navbarlogin";
import { connect } from "react-redux";

import SignedInLinks from "../layout/SignedInLinks";
import SignedOutLinks from "../layout/SignedOutLinks";
import Admin from "./Admin";

import SignOut from "../../UI/Routes/SignOut";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const AppNav = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <div>
      <section id="topbar" class="d-none d-lg-block">
        <div class="container clearfix">
          <div class="contact-info float-left">
            <i class="icofont-envelope"></i>
            <a href="mailto:info@example.com">info@example.com</a>
            <i class="icofont-phone"></i> +54 9 3412 76-9534
          </div>
          <div class="social-links float-right">
            <a href="#" class="facebook">
              <i class="icofont-facebook bx-fade-up-hover"></i>
            </a>
            <a href="#" class="instagram">
              <i class="icofont-instagram bx-fade-up-hover"></i>
            </a>
            <a href="#" class="youtube">
              <i class="icofont-youtube bx-fade-up-hover"></i>
            </a>
          </div>
        </div>
      </section>

      <header id="header">
        <div class="container">
          <div class="logo float-left">
            <h1 class="text-light">
              <Link to="/">Protectora</Link>
            </h1>

            {/* <img src="assets/img/logo.png" alt="" class="img-fluid"/> */}
          </div>

          <nav class="nav-menu float-right d-none d-lg-block">
            <ul>
<<<<<<< HEAD
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/Volunteering">Se Voluntario</Link>
              </li>
              <li>
                <Link to="/Gallery">Mascotas</Link>
              </li>
              <li>
                <Link to="MoneyBanner">Donaciones</Link>
              </li>
              <li>
                {profile.isAdmin === true && (
                  <Link title="Administrar" to="/Admin">
                    <i class="icofont-gear-alt"></i>
                  </Link>
                )}
              </li>
              <li>
                {profile.isAdmin === true && (
                  <Link title="Perfil" to="/MiPerfil">
                    <i class="icofont-id"></i>
                  </Link>
                )}
              </li>
              <li>{profile.isAdmin === true && <SignOut />}</li>
              {/* <li>{profile.isAdmin === true &&
              <Link to='/Admin'>Administrador</Link>}</li>
              <li><NavLink to='/entrar'>Ingresar</NavLink></li>
          <li class="drop-down"><Nav2 />
            <ul>
              <li><a href="#"><Link className="dropdown-item" to="/MiPerfil">Ver mi Perfil</Link>
        <SignOut /></a></li>
              
                
            </ul>
          </li> */}
=======
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/Gallery'>Mascotas</Link></li>
              <li><Link to='MoneyBanner'>Donaciones</Link></li>

              {/* {profile.isAdmin === true &&
                <li class="drop-down"><a>Administrador</a>
                  <ul>
                    <li>
                      <Link title="Administrar" to='/Admin'>
                        <i class="icofont-gear-alt"> Administar</i>
                      </Link>
                    </li><hr></hr>
                    <li>
                      <Link title="Perfil" to='/MiPerfil'>
                        <i class="icofont-id"> Perfil</i>
                      </Link>
                    </li><hr></hr>
                    <li>
                      <SignOut />
                    </li>
                  </ul>
                </li>
              } */}
              {/* <li>
                {profile.isAdmin === true &&
                  <Link className='nav-link' to='/Admin'>Administrador</Link>}
              </li> */}
              <li>
                <Nav2 />
              </li>
>>>>>>> main
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(AppNav);
