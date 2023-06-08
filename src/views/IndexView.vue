<template>
  <div class="md:container md:mx-auto">
    <div class="my-4">
        <img src="../assets/iut_romero.jpg" alt="photo de l'iut d'évry, site de romero">
    </div>
    <div class="flex flex-row justify-around m-16">
      <div class="w-11/12 mr-8 p-4 text-justify">
        <h2 class="text-3xl">
          Présentation
        </h2>
        <div class="mt-4">
          <p>Deux parcours sont proposés :</p>
          <ul>
            <li class="list-disc ml-8">Parcours 1 : Administration et sécurisation des réseaux et services Internet et Intranet</li>
            <li class="list-disc ml-8">Parcours 2 : Développement avancé d’applications Web Internet et Intranet</li>
          </ul>
        </div>
        <h2 class="text-3xl mt-4">
          Programme
        </h2>
        <div class="mt-4">
          <p>Tronc commun :</p>
          <p class="ml-3 mt-1">Communication et connaissance de l’entreprise</p>
          <ul>
            <li class="list-disc ml-8">Communication et technique de recherche d’emploi</li>
            <li class="list-disc ml-8">Gestion et management de projets</li>
            <li class="list-disc ml-8">Organisation et Gestion des Entreprises</li>
            <li class="list-disc ml-8">Anglais</li>
          </ul>
          <p class="ml-3 mt-1">Intégration des réseaux locaux et développement intranet et internet</p>
          <ul>
            <li class="list-disc ml-8">Réseaux Informatiques</li>
            <li class="list-disc ml-8">Outils de configuration systèmes et virtualisation</li>
            <li class="list-disc ml-8">Programmation objets en Python</li>
            <li class="list-disc ml-8">Bases de données relationnelles</li>
          </ul>
          <p class="ml-3 mt-1">Développement des services WEB  intranet et internet</p>
          <ul>
            <li class="list-disc ml-8">Programmation des services Web</li>
            <li class="list-disc ml-8">Développement en HTML, CSS, JavaScript, PHP, XML</li>
            <li class="list-disc ml-8">Conception des sites internet, CMS, WP, Joomla</li>
          </ul>
        </div>
        <h2 class="text-3xl mt-4">
          Admission
        </h2>
        <div class="mt-4">
          <p>Admission sur dossier, tests de connaissances, et éventuellement entretien.</p>
          <p>Dépôt de candidature : de mars à juin.</p>
          <p>Tous les candidats doivent obligatoirement déposer leur candidature sur le site : adresse disponible à partir du 1er mars 2020</p><br>
          <p>Conditions d’admission :</p>
          <p>Etudiants, Salariés, demandeurs d’emploi, individuels en reprise d’études :</p>
          <p class="ml-4">– Titulaire d’un diplôme Bac +2 (L2, DUT, BTS SIO, BTS IRIS, DEUST, …) dans les domaines de l’Informatique, Scientifiques et Techniques ou de Gestion de niveau III.</p>
          <p class="ml-4">– Bénéficiant d’une procédure VAP (Validation des Acquis Professionnels) avec une expérience professionnelle dans le domaine concerné par la Licence.</p>
          
        </div>
        <h2 class="text-3xl mt-4">
          Parcours
        </h2>
        <div class="mt-4">
          <p class="underline">Parcours ASR2I</p>
          <div class="ml-4">
            <p>Pour le Parcours Administration et Sécurisation des Réseaux et services Internet et Intranet (ASR2I), 
              il est chargé de l’administration et la gestion d’un parc informatique, la supervision et la sécurisation d’un réseau local, 
              et de l’intégration de produits et de services Intranet ou/et Internet. Les postes visés sont intermédiaires entre des techniciens supérieurs et des ingénieurs. 
              Savoir-faire et compétences à l’issue de ce parcours:</p>
              <p class="ml-4">1. Modéliser des données pour mieux intégrer les services web, concevoir et réaliser des sites web Intranet et Internet, CMS, programmer côté client et serveur.</p>
              <p class="ml-4">2. Configurer un réseau local pour un ensemble de postes informatiques, dans un environnement hétérogène (Windows, Linux) et assurer l’interconnexion avec le monde extérieur.</p>
              <p class="ml-4">3. Administrer au quotidien un parc hétérogène de postes serveurs et bureautiques rattachés au réseau informatique pour garantir, en permanence, leur disponibilité et leur sécurité.</p>
              <p class="ml-4">4. Intégrer des solutions de sécurité des applications et des données.</p>
          </div>
          <p class="underline mt-2">
            <router-link :to="{ name: 'la-formation'}">Parcours DAWII</router-link>
          </p>
          <div class="ml-4">
            <p>Pour le Parcours Développement avancé d’Applications Web Internet et Intranet (DAW2I), il est chargé de développement Web en Front-End et Back-End, et intégration de produits et de services Intranet ou/et Internet.  
              Savoir-faire et compétences à l’issue de ce parcours:</p>
              <p class="ml-4">1. Modéliser des données pour mieux intégrer les services web, concevoir et réaliser des sites web Intranet et Internet, CMS, programmer côté client et serveur.</p>
              <p class="ml-4">2. Développer des applications WEB à partir des langages de haut niveau après avoir défini avec le client les besoins et le cahier des charges.</p>
              <p class="ml-4">3. Intégrer des services et des applications WEB aussi bien pour un Intranet que pour l’Internet.</p>
              <p class="ml-4">4. Maîtriser et paramétrer les outils de collaboration entre les applications web.</p>
          </div>
          
        </div>
      </div>
      <div class="w-2/5 ml-8">
        <aside class="information_eclole p-2 px-3 pb-5">
          <div class="justify-content-start mb-5">
            <h3 class=" fas fa-map-marker-alt text-lg font-bold"> Localisation</h3>
            <div>
              36 rue du Pelvoux
              <br />
              ZI de la Petite Montagne Nord
              <br />
              91080 Courcouronnes
            </div>
          </div>
          <div class="justify-content-start my-5">
            <h3 class="fas fa-university text-lg font-bold"> Département</h3>
            <p>
              Génie Électrique et Informatique
              <br />
              Industrielle (GEII)
            </p>
          </div>
          <div class="justify-content-start mt-5">
            <h3 class="far fa-envelope-open-text text-lg font-bold"> Responsable</h3>
            <p>
              Khalifa DJEMAL
              <br />
              k.djemal@iut.univ-evry.fr
            </p>
          </div>
          <div class="justify-content-start mt-5">
            <h3 class="far fa-calendar-alt font-bold"> Alternance</h3>
            <p>
              - Septembre, octobre, novembre et décembre : une
                semaine sur deux en entreprise
              <br />
              - De janvier à mai : deux semaines successives par mois
              <br>
              - A partir du mois de juin : 100% en entreprise.
              </p>
          </div>
          <div class="justify-content-start mt-5">
            <h3 class="fas fa-school font-bold "> Centre de formation (CFA)</h3>
            <p class="underline">
              <a href="https://www.cfa-eve.fr/Formation/82/licence-pro-metiers-de-linformatique-applications-web">Plus d’infos sur le site du CFA-EVE</a>
              </p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>