import React from "react";

export const PCard = (props) => {
  return (
    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
      <a className='nav-link' href={props.link} target="_blank">
        <div class="portfolio-wrap">
          <img src={props.img} class="img-fluid" alt="" />
          <div class="portfolio-info">
            <h4>{props.tittle}</h4>
            <p>{props.sub}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PCard