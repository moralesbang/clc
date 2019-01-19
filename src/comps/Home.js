import React from 'react';
import { CONTACT_NUMBER, WPP_TEXT } from '../constants';

const Home = () => {
  return (
    <>
      <div className="home-section sm:py-24">
        <h1 className="section-title">¡Bienvenidos a la nueva cancha sintética!</h1>

        <p className="text-center mb-12 max-w-md">
          Un espacio para los amantes del fútbol, para compartir con la familia y los amigos. Somos 
          la mejor cancha de mini-fútbol del municipio de Chaparral, reserva tu visita.
        </p>

        <h3 className="mb-4">¿Qué debo tener en cuenta?</h3>

        <ul>
          <li>Cada equipo debe estar formado máximo 9 jugadores</li>
          <li>Estamos ubicados en <address>Vía Chaparral - Calarma, Barrio Fundadores</address></li>
          <li></li>
        </ul>

        <h4 className="mb-4">Precios:</h4>

        <div className="flex flex-wrap flex-column sm:flex-row justify-center mb-4">
          <div className="m-4">
            <div className="bg-green rounded-t-lg px-3 py-2 text-center">
                7:00 AM - 5:00PM
            </div>
            
            <div className="box-rounded-bottom-green w-48 flex items-center justify-between">
              <span className="mr-2">$</span>
              <span className="box-price">80'000</span>
              <span>/hora</span>
            </div>
          </div>

          <div className="m-4">
            <div className="bg-green rounded-t-lg px-3 py-2 text-center">
              5:00 AM - 10:00PM
            </div>

            <div className="box-rounded-bottom-green w-48 flex items-center justify-between">
              <span>$</span>
              <span className="box-price">100'000</span>
              <span>/hora</span>
            </div>
          </div>

          <div className="m-4">
            <div className="bg-green rounded-t-lg px-3 py-2 text-center">
              > 11:00PM
            </div>

            <div className="box-rounded-bottom-green w-48 flex items-center justify-between">
              <span>$</span>
              <span className="box-price">90'000</span>
              <span>/hora</span>
            </div>

          </div>
        </div>

        <a className="btn-green tracking-wide no-underline reserve-btn text-xl" href={`https://wa.me/${CONTACT_NUMBER}?text=${WPP_TEXT}`}>
          Revervar
        </a>
      </div>

      <div className="home-section sm:py-24 bg-green-light">
        <h1 className="section-title">Nuestros Servicios</h1>

        <div className="services">
          <div>
            <span className="text-lg font-semibold">Cancha Sintética</span>
            <p className="max-w-md">
              Typewriter seitan scenester ugh coloring book, jianbing trust fund pok pok tattooed hella man bun. Truffaut sustainable ramps marfa slow-carb pok pok mixtape, wayfarers next level pork belly trust fund. Swag live-edge hot chicken, organic meh slow-carb vice normcore selfies godard actually kombucha. Flexitarian humblebrag af, wayfarers microdosing bicycle rights ennui asymmetrical tousled meggings. Everyday carry la croix pop-up, kogi tumblr disrupt celiac thundercats ramps try-hard echo park. Salvia roof party tbh pinterest craft beer, pickled hammock vaporware enamel pin.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold">Estacionamiento Privado</span>
          </div>
          
          <div>
            <span className="text-lg font-semibold">Cafetería y Bar</span>
          </div>
          
          <div>
            <span className="text-lg font-semibold">Zona WIFI</span>
          </div>

          <div>
            <span className="text-lg font-semibold">Duchas y vestuarios</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;