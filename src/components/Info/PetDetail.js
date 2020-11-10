import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Info.css";

// FacebookShareButton permitirá compartir cualquier tipo de contenido a través de sus props
import FacebookShareButton from '../FacebookShareButton/FacebookShareButton'

import { db } from "../../index";

export default function PetDetail(props) {

  const [pet, setPet] = useState([]);

  useEffect(() => {
    const getPet = async () => {
      var docRef = db.collection("pet").doc(props.match.params.id);

      docRef.get().then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setPet(doc.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
    };
    getPet();
  }, [props.match.params.id]);

  

  return (

    <div className="container mt-5 col d-flex justify-content-center">
      <div class="card " style={{ width: '22rem' }}>
        <img class="card-img-top" src={pet.avatar} alt={pet.name} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Presentamos a {pet.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>

    // <div className="card">
    //   <div class="card-footer w-100 display-5">
    //     Presentamos a {pet.name}
    //   </div>
    //   <div className="row no-gutters">
    //     <div className="col-auto">
    //       <img src={pet.avatar} alt={pet.name} class="img-fluid" width='200' height='200' />
    //     </div>
    //     <div className="col">
    //       <div className="card-block px-2">
    //         <p className="card-text font-weight-bold">Mascota:</p>
    //         <div className='d-flex justify-content-around'>
    //           <p className="card-text"><strong>Edad:</strong> {pet.age} años</p>
    //           <p className="card-text"><strong>Tamaño: </strong>{pet.size}</p>
    //           <p className="card-text"><strong>Sexo:</strong> {pet.gender}</p>
    //           <p className="card-text"><strong>Castrado:</strong> {pet.castreted}</p>
    //         </div>
    //         <p className="card-text"><strong>Personalidad</strong> {pet.personality}</p>
    //         {/* <p className="card-text"><strong>Historia: </strong> {pet.history}</p> */}
    //         <Link to={{ pathname: `/Adoptions/Form/${pet.name}/`, state: pet }}>
    //           <button className='btn btn-info'>
    //             Adoptar
    //                 </button>
    //         </Link>
    //         <FacebookShareButton
    //           url="https://www.facebook.com/ProtectoraSarmiento.Rosario"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}