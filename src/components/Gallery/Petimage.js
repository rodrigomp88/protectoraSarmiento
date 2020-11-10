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
  
  const getCatsLinks = ()=>{
    let arrLinks = mascotas.filter(l =>{
      return l.kind === 'Gato'
    })
  setLinks(arrLinks)
    
  }
  
 const getDogsLinks = ()=>{
    let arrLinks = mascotas.filter(l =>{
     return l.kind === 'Perro'
  })
  setLinks(arrLinks)
    
}


  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="section-title">
          <h2>¡No compres!, adoptá.</h2>
          <p>Es muy útil que nos ayudes difundiendo mensajes de nuestra página web y nuestros animales en internet, mandándonos artículos interesantes o fotos, anunciando nuestros animales en adopción en las clínicas veterinarias y sobre todo comentando a tus amigos, compañeros de trabajo y amigos que antes de comprar un animal de compañía pueden adoptarlo.</p>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active" data-rel="all" onClick={getLinks}>Todos</li>
              <li data-filter=".filter-app" data-rel="1" onClick={getDogsLinks}>Perros</li>
              <li data-filter=".filter-card" data-rel="2" onClick={getCatsLinks}>Gatos</li>
            </ul>
          </div>
        </div>
        
    <div>            
      <div>
          <div className="gallery" id="gallery">
            {
            
            links.map((pet) => (
            <div  key={pet.id}>
                
                    <div className="imageInfo">
                    <img className="img-fluid" src={pet.avatar} alt={pet.name} />
                        {/* <h4>nombre: {pet.name}</h4> */}
                    <div className="memberInfo">
                        <h2 className="mb-2 font-weight-light h3 ">
                        <Info petId={pet.id} key={pet.id}/>
                        </h2>
                       
                    </div>
                    </div>
               
            </div>
            ))}
        </div>
        </div>
    </div>
    </div>
        </section>
          
  );
};

export default Petimage;
