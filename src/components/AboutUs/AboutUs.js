import React from "react";
import { Link } from 'react-router-dom';
import PCard from "./PCard";

export const AboutUs = () => {
  return (
    <section id="portfolio" class="portfolio section-bg">
    <div class="section-title">
      <h2>¡Conoce a nuestro equipo!</h2>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row portfolio-container">

            <PCard
                link="https://github.com/MrFoxxz"
                img="assets/img/team/Fox.jpg"
                tittle="Fox"
                sub="FullStack Developer / Front-end Designer"
            ></PCard>
            <PCard
                link="https://github.com/valerisvso"
                img="assets/img/team/Valeria.jpg"
                tittle="Valeria"
                sub="FullStack Developer"
            ></PCard>
            <PCard
                link="https://github.com/ail3ngrimaldi"
                img="assets/img/team/Ailen.jpg"
                tittle="Ailen"
                sub="FullStack Developer"
            ></PCard>
            <PCard
                link=""
                img="assets/img/team/Dario.jpg"
                tittle="Dario"
                sub="FullStack Developer"
            ></PCard>
            <PCard
                link=""
                img="assets/img/team/team-1.jpg"
                tittle="Team 1"
                sub="FullStack Developer"
            ></PCard>
            <PCard
                link=""
                img="assets/img/team/team-2.jpg"
                tittle="Team 2"
                sub="FullStack Developer"
            ></PCard>
            <PCard
                link=""
                img="assets/img/team/team-3.jpg"
                tittle="Team 3"
                sub="Front-end Designer"
            ></PCard>
            <PCard
                link=""
                img="assets/img/team/team-4.jpg"
                tittle="Team 4"
                sub="FullStack Developer"
            ></PCard>
            <PCard
                link="https://www.soyhenry.com/"
                img="assets/img/team/Henry.jpg"
                tittle="Henry"
                sub="Developer Academy"
            ></PCard>

        </div>
    </div>
  </section>
  );
};

export default AboutUs