import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import "./Footer.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Footer = () => {
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
            <h3>Mamba</h3>
            <p>
              A108 Adam Street 
              NY 535022, USA
              <strong>Phone:</strong> +1 5589 55488 55
              <strong>Email:</strong> info@example.com
            </p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Mamba</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;