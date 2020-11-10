import React from "react";
import Nav2 from '../AppNav/Navbarlogin'
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from '../layout/SignedOutLinks'
import SignOut from "../../UI/Routes/SignOut"

import { connect } from 'react-redux';

const Footer = (props) => {

  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    // <footer className="Styles mt-5">
    //   <Container color="blue" className="font-small pt-4 mt-4" fluid={true}>
    //     <Container fluid className="text-center ">
    //       <Row className="text-left">
    //         <Col className="Fonts py-2 p-0' md={3} sm={12}">
    //           <h5 className="title">Protectora Sarmiento</h5>
    //           <p>Asociación Civil sin fines de lucro</p>
    //           <p>Personería jurídica 0599 / 70</p>
    //           {/* <p>Cuit: 30-70152191-5</p>
    //           <p>Telefono: +54 9 3412 76-9534</p> */}

    //           <p>Rosario - Argentina</p>
    //         </Col>
    //         <Col className="Fonts2 p-0 d-flex justify-content-end'md={3} ">
    //           <h5 className="title">Contactanos</h5>
    //           <br />
    //           <ul>
    //             <li className="list-unstyled">
    //               <a href="https://www.facebook.com/ProtectoraSarmiento.Rosario/about/?ref=page_internal">
    //                 <i className="fab fa-facebook fa-2x fa-lg"></i>
    //               </a>
    //             </li>
    //             <br></br>
    //             <li className="list-unstyled">
    //               <a href="https://www.instagram.com/protectorasarmiento/?hl=es-la">
    //                 <i className="fab fa-instagram fa-2x fa-lg"></i>
    //               </a>
    //             </li>
    //             {/* <li className="list-unstyled">
    //             <a href="#!">Link 3</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 4</a>
    //           </li> */}
    //           </ul>
    //         </Col>
    //       </Row>
    //     </Container>
    //     <div className="footer-copyright text-center py-3">
    //       <Container fluid className="Fonts">
    //         &copy; {new Date().getFullYear()} Copyright:{" "}
    //       </Container>
    //     </div>
    //   </Container>
    // </footer>

    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-info">
              <h3>Protectora Sarmiento</h3>
              <p>
                2000 Rosario, Santa Fe, Argentina<br/>
                <p>Asociación Civil sin fines de lucro</p>
                <p>Personería jurídica 0599 / 70</p>
                <p>Cuit: 30-70152191-5</p><br/><br/>
                <strong>Teléfono:</strong> +54 9 3412 76-9534<br/>
                <strong>Correo:</strong> info@example.com
            </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-youtube bx-fade-up-hover"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook bx-fade-up-hover"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram bx-fade-up-hover"></i></a>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Navegación</h4>
              <ul>
                <li><Link  to='/'><i class="bx bx-chevron-right"></i>Inicio</Link></li>
                <li><Link  to='/Gallery'><i class="bx bx-chevron-right"></i>Mascotas</Link></li>
                <li><Link  to='MoneyBanner'><i class="bx bx-chevron-right"></i>Donaciones</Link></li>

              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Ingresa</h4>
              <ul>
                <li>
                  <Nav2 />
                  <SignOut />
                </li>
                <li>
                  {profile.isAdmin === true &&
                    <Link className='nav-link' title="Administrar" to='/Admin'>
                      <i class="icofont-gear-alt"></i>
                    </Link>}
                  {profile.isAdmin === true &&
                    <Link className='nav-link' title="Perfil" to='/MiPerfil'>
                      <i class="icofont-id"></i>
                    </Link>
                  }
                  {profile.isAdmin === true &&
                    <SignOut />
                  }
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Nuestro boletin de noticias</h4>
              <p>Suscribite para recibir toda la info de protectora sarmiento</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribite" />
              </form>

            </div>

          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>{new Date().getFullYear()}</span></strong>. Todos los derechos reservados
      </div>
        <div class="credits">
          <p>Hecho con 
          <i class='bx bxs-heart bx-burst bx-spin' ></i></p>

        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Footer);