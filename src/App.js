import React, { Component } from 'react';

import Left from "./components/Left";
import Right from "./components/Right";

class App extends Component {

  state = {
    start: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>,
    profile : {
        name: 'RAKOTONDRAMANANA',
        firstName: 'David Henintsoa'
    },
    etatCivil : {
        birthday: '15 Novembre 2000 à Toamasina',
        sexe: 'Homme',
        nationalite: 'Malagasy',
        situation: 'Célibataire',
        adresse: 'Lot II N 39 Analamahitsy'
    },
    contacte : {
        mobile: '+261 32 56 834 99',
        mail: 'tsoa.le.rdh@gmail.com'
    },
    caractere : [
        {id: 1, nom: 'Travailleur'},
        {id: 2, nom: 'Honnête'},
        {id: 3, nom: 'Rapide (en execution)'},
        {id: 4, nom: "Capacité d'apprendre rapide"},
        {id: 5, nom: 'Intègre'},
    ],
    compotencesPro : [
        {nom: 'Bureautique (Pack Microsoft Office)',niveau: 90},
        {nom: 'Programmation Web',niveau: 70},
        {nom: 'Réseau', niveau: 55},
        {nom: 'Multimédia (Image, Vidéo, Audio)', niveau: 65},
        {nom: 'Système Linux', niveau: 40}
    ],
    webProgrammation: [
        {id: 1, nom: 'HTML5'},
        {id: 2, nom: 'JAVASCRIPT, AJAX, JQUERY'},
        {id: 3, nom: 'PHP, PDO'},
        {id: 4, nom: 'mySQL'}
    ],
    connaissanceNotion: [
        {id: 1, nom: 'REACT'},
        {id: 2, nom: 'LARAVEL'}
    ],
    connaissanceLanguistique: [
        {id: 1, nom: 'Malagasy', descri: 'Langue maternelle'},
        {id: 2, nom: 'Français', descri: 'Parlé et écrit'},
        {id: 3, nom: 'Anglais', descri: 'Moyenne'}
    ],
    diplomeCertificat: [
        {
            id: 1,
            nom: 'Diplôme de Technicien Supérieur (DTS) en Informatique',
            ecole: 'Engineering School of Tourism, Informatics, Interpretership and Management "ESTIIM\'"',
            annee: 2020
        },
        {
            id: 2,
            nom: 'Diplôme de BACCALAUREAT série Technique Electronique',
            ecole: 'Institution de Formation Professionnel Mahery',
            annee: 2018
        },
        {
            id: 3,
            nom: 'BREVET D\'ETUDE PROFFESSIONEL (B.E.P) en Electronique',
            ecole: 'Lycée Technique Privée RENEL RAKOTOBE',
            annee: 2018
        },
        {
            id: 4,
            nom: 'ATTESTATION DE STAGE en Technicien Electronique',
            ecole: 'Lycée Technique Privée RENEL RAKOTOBE',
            annee: 2017
        }
    ],
    formation: [
        {
            id: 1,
            annee: '2019 - 2020',
            ecole: 'Engineering School of Tourism, Informatics, Interpretership and Management "ESTIIM\'"',
            filiere: 'Filière Informatique',
            niveau: '2ème Année'
        },
        {
            id: 2,
            annee: '2018 - 2019',
            ecole: 'Institut des Arts et des Technologies Avancées (InATA)',
            filiere: 'Filière Informatique & Infographie',
            niveau: '1ère Année'
        }
    ],
    experienceActivitePro: [
        {
            id: 1,
            nom: 'RESPONSABLE CLASSEMENT / CALCUL DE TEMPS',
            descri: 'Au sein de la Fédération du Sport Automobile de Madagscar (FSAM)',
            date: 'Depuis Juillet 2019'
        },
        {
            id: 2,
            nom: 'STAGIAIRE EN DEVELLOPEUR D\'APP WEB/DESKTOP',
            descri: 'Au sein de la Ministère de l\'agriculture, de l\'Élevage et de la Pêche (MAEP)',
            date: 'Octobre 2020 - Decembre 2020'
        }
    ]
}

  render () {
    return (
      <div className="row">
        <div className="col-4">
          <Left data={this.state} />
        </div>
        <div className="col-8">
          <Right data={this.state} />
        </div>
      </div>
    );
  }
}
const style = {
  left: {
    
  }
}
export default App;