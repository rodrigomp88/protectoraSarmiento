import React, { useEffect, useState } from "react";
import Info from "../Info/Info";
import styles from './Gallery.css'

import { db } from "../../index";

const Petimage = () => {
  const [links, setLinks] = useState([]);
  const [mascotas, setMascotas] = useState([]);

  const getLinks = async () => {
    db.collection("pet").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
      setMascotas(docs)
    });
  };

  useEffect(() => {
    getLinks();

  }, []);

  const getCatsLinks = () => {
    let arrLinks = mascotas.filter(l => {
      return l.kind === 'Gato'
    })
    setLinks(arrLinks)

  }

  const getDogsLinks = () => {
    let arrLinks = mascotas.filter(l => {
      return l.kind === 'Perro'
    })
    setLinks(arrLinks)

  }
  console.log(mascotas)

  // const filtrarMascotas = (tipo) =>{
  //   if(tipo === 'Gato'){
  //     setMascotas({
  //       ...mascotas,
  //       kind: links.kind.filter(m=>m.kind === 'Gato')
  //     })
  //   }
  //   if(tipo === 'Perro'){
  //     setMascotas({
  //       ...mascotas,
  //       kind: links.kind.filter(m=>m.kind === 'Perro')
  //     })
  //   }
  //   if(tipo === 'Todos'){
  //    setMascotas({
  //       ...mascotas,
  //       kind: links.kind
  //     })
  //   }
  // }


  return (
    // <div>
    //   <div>
    //     <div className="col-md-12 d-flex justify-content-center     mb-5">
    //       <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="all" onClick={getLinks}>Todos</button>
    //       <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="1" onClick={getDogsLinks}>Perros</button>
    //       <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="2" onClick={getCatsLinks}>Gatos</button>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="gallery" id="gallery">
    //       {

    //         links.map((pet) => (
    //           <div key={pet.id}>

    //             <div className="imageInfo">
    //               <img className="img-fluid" src={pet.avatar} alt={pet.name} />
    //               {/* <h4>nombre: {pet.name}</h4> */}
    //               <div className="memberInfo">
    //                 <h2 className="mb-2 font-weight-light h3 ">
    //                   <Info petId={pet.id} key={pet.id} />
    //                 </h2>

    //               </div>
    //             </div>

    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>

    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>


        <div className="row portfolio-container">

        {

        links.map((pet) => (
          <div key={pet.id}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-eye"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}

        </div>
          </div>
          </section>
  );
};

export default Petimage;
