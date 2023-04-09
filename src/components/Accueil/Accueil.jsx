import React from "react";
import {Button} from "primereact/button";
import { useLocation } from "wouter";

export default function Accueil() {
  const [location, setLocation] = useLocation();
  return (
    <section>
      <div
        className="">
        <h1>Bienvenue</h1>
        <p>
          Votre clinique vétérinaire se digitalise, bienvenue sur notre site Internet. Ici, vous retrouverez
          tout ce dont vous avez besoin pour prendre soins de vos petites boules de poiles et de plumes
          favorites !<br/> <br/>De la prise de rendez-vous, à la boutique en passant par le blog, tous les
          outils
          pour prendre soins de vos animaux vous sont mit à disposition sur ce site !
        </p>
      </div>

      <div className="">
        <Button label="Prendre rendez vous" onClick={() => setLocation('/rendezvous')} />
      </div>

      <div className="">
        <p className="text-center text-lg xl:text-2xl font-bold p-5">
          Des questions ? <br/> Rejoignez le <a href="/questions"> forum </a> pour trouver les réponses !
        </p>
      </div>

      <div
        className="flex justify center mt-10 w-full xl:w-[1675px] xl:h-[750px] bg-[#FFFCF5] xl:p-1 xl:shadow-md xl:shadow-gray-400 xl:rounded-xl">
        <iframe
          title="map"
          className="h-[350px] xl:h-full w-full xl:rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.9049598451643!2d4.035742916272193!3d49.25924728035102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e975b21e62f077%3A0x41f7a9b01efab44!2s1%20Rue%20des%20Templiers%2C%2051100%20Reims!5e0!3m2!1sfr!2sfr!4v1673370325096!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>)
}
