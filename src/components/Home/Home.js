import React, { useState, useEffect } from "react";
import { Carrousel2 } from "../Carrousel/Carrousel2";
import { EventsHome } from "../Events/EventsHome";

const Home = (props) => {
  const [values, setValues] = useState(false);

  useEffect(() => {
    setValues(props.bool)
  }, [props.bool])


  return (
    <div className="StyleHome">

      <Carrousel2 />

      <section id="about" class="about">
        <div class="container">

          <div class="row">
            <div class="col-lg-6 video-box" data-aos="fade-up" data-aos-delay="100">
              <img class="mb-4" src="https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.0-9/84985666_2934435266609344_8840466609970610176_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=5cEbvo-tyT8AX-FQXoq&_nc_ht=scontent.fmdz5-1.fna&oh=4f8adb17ac81b1be40945c4399e6ad2f&oe=5FB3E968" alt="" width="100%" height="auto" />
              <a href="https://www.youtube.com/embed/w-tu_Wpsz3U" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            </div>

            <div class="col-lg-6 mt-5" data-aos="fade-up" data-aos-delay="100">
              <div class="section-title" >
                <h2>PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO</h2>
                <p>La Protectora de Animales "Domingo Faustino Sarmiento” se
                  fundó en 1969 en nuestra ciudad, Rosario.</p>
              </div>
              <div class="icon-box" >
                <div class="icon"><i class="bx bx-fingerprint"></i></div>
                <h4 class="title">Nuestra protectora:</h4>
                <p class="description">
                  rescata, cura y mantiene animales que quizás de otra manera no
                  habrían sobrevivido. Nos ocupamos de esterilizar y proveer
                  todas las vacunas necesarias dejando a los animales aptos para
                  su posterior adopción. </p>
              </div>
              <div class="icon-box" >
                <div class="icon"><i class="bx bx-gift"></i></div>
                <h4 class="title">Nuestra institución:</h4>
                <p class="description">no recibe subsidio alguno de parte de autoridades gubernamentales,
                sostenemos esta obra gracias a las cuotas de los socios y al
                  trabajo que aportamos hace años los voluntarios.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section class="counts section-bg">
        <div class="container">

          <div class="row">

            <div class="col-lg-3 col-md-6 text-center" data-aos="fade-up">
              <div class="count-box">
                <i class="icofont-simple-smile" style={{ color: '#20b38e' }}></i>
                <span data-toggle="counter-up">232</span>
                <p>Mascotas adoptadas en hogares felices</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="count-box">
                <i class="icofont-document-folder" style={{ color: '#c042ff' }}></i>
                <span data-toggle="counter-up">521</span>
                <p>Mascotas esperando un hogar</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
              <div class="count-box">
                <i class="icofont-live-support" style={{ color: '#46d1ff' }}></i>
                <span data-toggle="counter-up">1,463</span>
                <p>Almas bondadosas que han realizado una donación</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
              <div class="count-box">
                <i class="icofont-users-alt-5" style={{ color: '#ffb459' }}></i>
                <span data-toggle="counter-up">15</span>
                <p>Voluntarios activos en la protectora</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="services" class="about-lists">
        <div class="container">

          <div class="section-title">
            <h2>¿Cómo puedo ayudar?</h2>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 icon-box content-item" data-aos="fade-up">
              <div class="icon"><i class="icofont-computer"></i></div>
              <h4 class="title">SER SOCIO</h4>
              <p class="description">
                Somos una ASOCIACIÓN SIN FINES DE LUCRO ! Nos mantenemos sólo con la colaboración de la gente. La cuota mínima es de $40 y todos reciben un comprobante.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box content-item" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="icofont-chart-bar-graph"></i></div>
              <h4 class="title">VOLUNTARIADO</h4>
              <p class="description">
                Siempre sumamos voluntarios para ayudar a limpiar los caniles, cambiar el agua, darle de comer a los pichis, ayudar con la medicación, sacarlos a pasear y darles mimos.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box content-item" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="icofont-earth"></i></div>
              <h4 class="title">HOGARES DE TRÁNSITO</h4>
              <p class="description">
                Una muy buena opción para aquellos que no pueden comprometerse a tener un animalito de por vida, pero si lo pueden tener en tránsito un tiempito para encontrarle un hogar definitivo.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box content-item" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="icofont-image"></i></div>
              <h4 class="title">RESCATE DE ANIMALES</h4>
              <p class="description">
                Si te parte el corazón ver un animalito en peligro, y querés hacer algo, podés contar con nosotros para asesorarte sobre cómo actuar en cada situación ! Siempre recibimos muchísimos pedidos de ayuda, y no podemos tener más animalitos, pero siempre estamos dispuestas a ayudarte con medicamento, vetes, etc.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box content-item" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="icofont-settings"></i></div>
              <h4 class="title">CONTROL DE LA POBLACIÓN ANIMAL</h4>
              <p class="description">
                Actualmente Rosario esta sufriendo una superpoblación de animales en las calles. La ÚNICA solución a esto, es CASTRAR!! Si ves un animal (perro/gato- macho/hembra) en la calle, que no tiene dueño, llevalo a esterilizar. Es totalmente gratuito en Imusa.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box content-item" data-aos="fade-up" data-aos-delay="500">
              <div class="icon"><i class="icofont-tasks-alt"></i></div>
              <h4 class="title">TRANSPORTE</h4>
              <p class="description">
                Podés colaborar con nosotros ayudándonos a transportar los animales que tenemos en adopción a la clínica veterinaria o a los hogares de tránsito, ya que muchas veces tenemos que hacerles placas, llevarlos a fisioterapia, etc,. También sería de gran ayuda que alguien que disponga de una furgoneta nos pudiese acompañar para llevar la jaula-trampa que muchas veces necesitamos utilizar para los rescates de perros.</p>
            </div>
          </div>

        </div>
      </section>

      <section id="about" class="about">
        <div class="container">

          <div class="row">
            <div class="col-lg-6 video-box" data-aos="fade-up" data-aos-delay="100">
              <img class="mb-4" src="https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.0-9/84985666_2934435266609344_8840466609970610176_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=5cEbvo-tyT8AX-FQXoq&_nc_ht=scontent.fmdz5-1.fna&oh=4f8adb17ac81b1be40945c4399e6ad2f&oe=5FB3E968" alt="" width="100%" height="auto" />
              <a href="https://www.youtube.com/embed/w-tu_Wpsz3U" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            </div>

            <div class="col-lg-6 mt-5" data-aos="fade-up" data-aos-delay="100">
              <div class="section-title" >
                <h2>PROTECTORA DE ANIMALES DOMINGO FAUSTINO SARMIENTO</h2>
                <p>La Protectora de Animales "Domingo Faustino Sarmiento” se
                  fundó en 1969 en nuestra ciudad, Rosario.</p>
              </div>
              <div class="icon-box" >
                <div class="icon"><i class="bx bx-fingerprint"></i></div>
                <h4 class="title">Nuestra protectora:</h4>
                <p class="description">
                  rescata, cura y mantiene animales que quizás de otra manera no
                  habrían sobrevivido. Nos ocupamos de esterilizar y proveer
                  todas las vacunas necesarias dejando a los animales aptos para
                  su posterior adopción. </p>
              </div>
              <div class="icon-box" >
                <div class="icon"><i class="bx bx-gift"></i></div>
                <h4 class="title">Nuestra institución:</h4>
                <p class="description">no recibe subsidio alguno de parte de autoridades gubernamentales,
                sostenemos esta obra gracias a las cuotas de los socios y al
                  trabajo que aportamos hace años los voluntarios.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <EventsHome /> */}
    </div>
  );
};

export default Home;