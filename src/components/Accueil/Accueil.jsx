import React from "react";

export default function Accueil() {
  return (
    <section class="mt-[45px] lg:mt-[60px] h-full w-full">
      <div class="h-[75vh] lg:h-[60vh] flex flex-col lg:flex-row-reverse justify-between">
        <div class="h-[40vh] w-full lg:h-full lg:w-[60vw]">
          <a
            href="https://fr.freepik.com/photos-gratuite/hamster-europeen-prairie-fleurie_15390300.htm#query=hamster&position=2&from_view=search&track=sph">
          </a>
        </div>
        <div
          class="h-[60vh] w-full lg:h-full lg:w-[40vw] bg-gradient-to-b from-[#342C2A] to-[#292321] flex flex-col justify-center items-center p-5 lg:items-start gap-4 2xl:gap-10 2xl:pl-32 2xl:pr-14">
          <h1 class="text-4xl lg:text-5xl text-center lg:text-start text-[#88A927] font-bold">Bienvenue</h1>
          <p class="text-md text-center lg:text-start lg:text-lg 2xl:text-xl text-white font-thin">
            Votre clinique vétérinaire se digitalise, bienvenue sur notre site Internet. Ici, vous retrouverez
            tout ce dont vous avez besoin pour prendre soins de vos petites boules de poiles et de plumes
            favorites !<br/> <br/>De la prise de rendez-vous, à la boutique en passant par le blog, tous les
            outils
            pour prendre soins de vos animaux vous sont mit à disposition sur ce site !
          </p>
          <div class="flex flex-col lg:flex-row gap-4 lg:gap-5 2xl:gap-10 xl:mt-5">
          {/*Connection*/}
          </div>
        </div>
      </div>

      {/*SERVICES */}
      <div class="w-full h-full flex flex-col items-center mt-16 xl:mt-0">

        {/* Titre services */}
        <div class="flex justify-center xl:justify-start xl:left-0 mt-10 w-full xl:w-[1520px]">
          <div
            class="flex justify-center bg-titreL bg-cover bg-center h-[70px] w-[250px] lg:h-[100px] lg:w-[280px] xl:h-[120px] xl:w-[420px] items-center">
            <h1 class="text-center text-4xl xl:text-5xl text-[#88A927]">
              Services
            </h1>
          </div>
        </div>

        {/* Section cards */}
        <div class="flex justify-center mt-10 xl:mt-32 w-full xl:w-[1520px] p-5">
          <div class="h-full w-full flex flex-col xl:flex-row justify-center items-center gap-20 xl:gap-5">

            {/* Card 1 */}
            <a href="/rendezvous">
              <div
                class="h-[375px] w-[300px] xl:h-[550px] xl:w-[400px] bg-[#FFFCF5] rounded-2xl shadow-md shadow-gray-400 p-1 hover:translate-y-1 hover:translate-x-1 hover:transition hover:duration-300">
                <div class="flex flex-col items-center h-full w-full">
                  <div
                    class="h-[240px] xl:h-[400px] w-full bg-card2 z-0 bg-cover bg-center rounded-t-xl flex justify-center">
                    <div class="relative z-10 h-full w-full object-cover object-center flex justify-center items-end">

                    </div>
                  </div>
                  <div class="z-30 bg-[#FFFCF5]">
                    <p class="text-center text-lg xl:text-2xl font-bold p-5">
                      Besoin d'un rendez-vous ? <br/> Cliquez ici !
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/shop">
              <div
                class="h-[375px] w-[300px] xl:h-[550px] xl:w-[400px] bg-[#FFFCF5] rounded-2xl shadow-md shadow-gray-400 p-1 hover:translate-y-1 hover:translate-x-1 hover:transition hover:duration-300">
                <div class="flex flex-col items-center h-full w-full">
                  <div
                    class="h-[240px] xl:h-[400px] w-full bg-card1 z-0 bg-cover bg-center rounded-t-xl flex justify-center">
                    <div class="relative z-10 h-full w-full object-cover object-center flex justify-center items-end">

                    </div>
                  </div>
                  <div class="z-30 bg-[#FFFCF5]">
                    <p class="text-center text-lg xl:text-2xl font-bold p-5">
                      Besoin de croquettes, de soins, d'accesoires ? C'est par ici !
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/forum">
              <div
                class="h-[375px] w-[300px] xl:h-[550px] xl:w-[400px] bg-[#FFFCF5] rounded-2xl shadow-md shadow-gray-400 p-1 hover:translate-y-1 hover:translate-x-1 hover:transition hover:duration-300">
                <div class="flex flex-col items-center h-full w-full">
                  <div
                    class="h-[240px] xl:h-[400px] w-full bg-card3 z-0 bg-cover bg-center rounded-t-xl flex justify-center">
                    <div class="relative z-10 h-full w-full object-cover object-center flex justify-center items-end">

                    </div>
                  </div>
                  <div class="z-30 bg-[#FFFCF5]">
                    <p class="text-center text-lg xl:text-2xl font-bold p-5">
                      Des questions ? <br/> Rejoignez le forum pour trouver les réponses !
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Card 4 */}
            <a href="/contact">
              <div
                class="h-[375px] w-[300px] xl:h-[550px] xl:w-[400px] bg-[#FFFCF5] rounded-2xl shadow-md shadow-gray-400 p-1 hover:translate-y-1 hover:translate-x-1 hover:transition hover:duration-300">
                <div class="flex flex-col items-center h-full w-full">
                  <div
                    class="h-[240px] xl:h-[400px] w-full bg-card2 z-0 bg-cover bg-center rounded-t-xl flex justify-center">
                    <div class="relative z-10 h-full w-full object-cover object-center flex justify-center items-end">

                    </div>
                  </div>
                  <div class="z-30 bg-[#FFFCF5]">
                    <p class="text-center text-lg xl:text-2xl font-bold p-5">
                      Des questions sur vos animaux contactez nous !
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* LOCALISATION */}

        {/* Titre localisation */}
        <div class="w-full h-full flex flex-col items-center mt-5 xl:mt-20">
          <div class="flex justify-center xl:justify-end left-0 mt-10 w-full xl:w-[1520px]">
            <div
              class="flex justify-center bg-titreR bg-cover bg-center h-[70px] w-[250px] lg:h-[100px] lg:w-[280px] xl:h-[120px] xl:w-[470px] items-center">
              <h1 class="text-center text-4xl xl:text-5xl text-[#88A927]">
                Localisation
              </h1>
            </div>
          </div>
        </div>

        {/* Section carte */}
        <div
          class="flex justify center mt-10 w-full xl:w-[1675px] xl:h-[750px] bg-[#FFFCF5] xl:p-1 xl:shadow-md xl:shadow-gray-400 xl:rounded-xl">
          <iframe
            title="map"
            class="h-[350px] xl:h-full w-full xl:rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.9049598451643!2d4.035742916272193!3d49.25924728035102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e975b21e62f077%3A0x41f7a9b01efab44!2s1%20Rue%20des%20Templiers%2C%2051100%20Reims!5e0!3m2!1sfr!2sfr!4v1673370325096!5m2!1sfr!2sfr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>)
}
