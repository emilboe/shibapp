import React from 'react';
import './About.css';

import { IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonIcon, IonImg } from '@ionic/react';
import { logoGithub, logoCodepen, logoLinkedin } from 'ionicons/icons';
import emilboeshoob from './emilboeshoob.png';




const About: React.FC = () => {

  return (
    <div>
      <div className="container">
        <div className="avatar">
          <a href="https://replit.com/@emilboe">
            <img src={emilboeshoob} alt="emilboe" />
          </a>
        </div>
        <div className="about">
          <h1>Made by emilboe</h1>
          <p>Made for fun to test out Ionic :)</p><br></br>
          <p>Follow me on:</p>
            <a href="https://github.com/emilboe/" target="_blank"><IonIcon icon={logoGithub} slot="start" />     </a>
            <a href="https://linkedin.com/in/emil-boen/" target="_blank"><IonIcon icon={logoLinkedin} slot="start" />     </a>
            <a href="https://codepen.io/emilboe/" target="_blank"><IonIcon icon={logoCodepen} slot="start" />     </a>
        </div>
      </div>
    </div >
  )

}

export default About;