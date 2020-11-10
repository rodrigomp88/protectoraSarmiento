import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import Foto1 from "../Carrousel/img/Carrousel1.jpg";
import Foto2 from "../Carrousel/img/Carrousel2.jpg";
import Foto3 from "../Carrousel/img/Carrousel3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrousel2.css";


export const Carrousel2 = () => {
    return (
        // <div className="carrusel">
        //     <div className="StyleCarouselOpacity">

        //         <div
        //             id="carouselExampleCaptions"
        //             className="carousel slide"
        //             data-ride="carousel"
        //             style={{ height: '30vmax' }}
        //         >
        //             <ol className="carousel-indicators">
        //                 <li
        //                     data-target="#carouselExampleCaptions"
        //                     data-slide-to="0"
        //                     className="active"
        //                 ></li>
        //                 <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        //                 <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        //                 <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        //             </ol>
        //             <div className="carousel-inner">
        //                 <div className="carousel-item active">
        //                     <Link to="/Gallery">
        //                         <img src={Foto1} className="d-block w-100" alt="..." />
        //                         <div className="carousel-caption d-none d-md-block">

        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="carousel-item">
        //                     <Link to="/MoneyBanner">
        //                         <img src={Foto2} className="d-block w-100" alt="..." />
        //                         <div className="carousel-caption d-none d-md-block">

        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="carousel-item">
        //                     <Link to="/Volunteering">
        //                         <img src={Foto3} className="d-block w-100" alt="..." />
        //                         <div className="carousel-caption d-none d-md-block">

        //                         </div>
        //                     </Link>
        //                 </div>                                                  
        //             </div>
        //             <a
        //                 className="carousel-control-prev"
        //                 href="#carouselExampleCaptions"
        //                 role="button"
        //                 data-slide="prev"
        //             >
        //                 <span
        //                     className="carousel-control-prev-icon"
        //                     aria-hidden="true"
        //                 ></span>
        //                 <span className="sr-only">Previous</span>
        //             </a>
        //             <a
        //                 className="carousel-control-next"
        //                 href="#carouselExampleCaptions"
        //                 role="button"
        //                 data-slide="next"
        //             >
        //                 <span
        //                     className="carousel-control-next-icon"
        //                     aria-hidden="true"
        //                 ></span>
        //                 <span className="sr-only">Next</span>
        //             </a>
        //         </div>

        //     </div>
        // </div>
  <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <div class="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/Carrousel1.jpg)'}}>
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">
                    <img src="assets/img/Logo.png" width="201px"height="103px" />
                </h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Leer más</a>
              </div>
            </div>
          </div>

          <div class="carousel-item" style={{backgroundImage:' url(assets/img/slide/Carrousel2.jpg)'}}>
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">
                <img src="assets/img/Logo.png" width="201px"height="103px" />
                </h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Leer más</a>
              </div>
            </div>
          </div>

          <div class="carousel-item" style={{backgroundImage: 'url(assets/img/slide/Carrousel3.jpg)'}}>
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">
                <img src="assets/img/Logo.png" width="201px"height="103px" />
                </h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Leer más</a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
  </section>
    );
};
