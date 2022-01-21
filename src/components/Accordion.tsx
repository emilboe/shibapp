import React from 'react';
import './Accordion.css';

import { IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonPage, IonThumbnail } from '@ionic/react';
import { arrowDownCircle } from 'ionicons/icons';

fetch('http://shibe.online/api/shibes')
  .then(function (response) {
    // The API call was successful!
    console.log('Response!')
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });


export const AccordionExample: React.FC = () => {

  return (
    <IonAccordionGroup>
      <div className="shibInfo">
        <h1>Shibas are Great</h1>
        <p>Shiba Inus are an ancient Japanese breed, the Shiba Inu is a small, but well-muscled dog that once was employed as a hunter. Today, the spirited, good-natured Shiba is the most popular companion dog in Japan</p>
        <h1>Coats</h1>
        <p>Shiba Inus have a very thick double coat that insulates them from cold harsh weather and mountainous environments.</p>
        <h3>Outercoat</h3>
        <p>
          The outer coat consists of hairs that are very straight, thick and course. These hairs are roughly 2 inches long, rigid and made to protect them from the freezing elements.
          The outercoat of a Shiba Inu is naturally waterproof.
        </p>
        <h3>Undercoat</h3>
        <p>The undercoat of a Shiba Inu has the consistency of wool. These finer and softer hairs are designed for only for one purpose – to insulate and protect from extreme cold and blocking out moisture.</p>
      </div>
      <IonAccordion value="colors">
        <IonItem slot="header">
          <IonLabel>Colors</IonLabel>
        </IonItem>

        <IonList slot="content">
          <IonItem>
            <IonThumbnail slot="start">
              <img src="https://shibainu.io/wp-content/uploads/2021/02/orange-red-shiba-inu.jpg" />
            </IonThumbnail>
            <p>The <strong>Red</strong> Shiba Inu is the ambassador of the breed</p>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="https://shibainu.io/wp-content/uploads/2021/02/shiba_inu_sesame_color.jpg" />
            </IonThumbnail>
            <p>The <strong>sesame</strong> Shiba Inu coat color is also the rarest and most difficult to properly define.</p>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="https://res.cloudinary.com/nkh/image/upload/v1618187597/Cream_Shiba_Inu.jpg" />
            </IonThumbnail>
            <p>The <strong>cream</strong> Shiba Inu is one of the most desirable color coats with a pure creamy base and white urajiro area.</p>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="https://shibainu.io/wp-content/uploads/2021/02/black_and_tan_shiba_inu.jpg" />
            </IonThumbnail>
            <p>Shiba Inus also come in a <strong>black and tan</strong> coat.</p>
          </IonItem>
        </IonList>
      </IonAccordion>

      <div className="shibInfo">
        <h1>Temperament</h1>
        <p>Shibas are extremely intelligent and sometimes appear aloof to strangers and other dogs.</p>
        <p>When unhappy or uncomfortable, the breed will product a loud scream, known as the “Shiba Scream.” They may also emit this scream when overly excited or happy.</p>
        <p>Whether with intrepid boldness, squinty-eyed cuteness or calm dignity, he is king.</p>
        <p>The Shiba is a relatively fastidious breed and feels the need to maintain itself in a clean state. They can often be seen licking their paws and legs, much as cats do. They generally go out of their way to keep their coats clean.</p>
        <p>Because of their fastidious and proud nature, Shiba puppies are easy to housebreak and in many cases will housebreak themselves.</p>
        <p>Having their owner simply place them outside after meal times and naps is generally enough to teach the Shiba the appropriate method of toilet training.</p>

      </div>
      <IonAccordion value="shapes">
        <IonItem slot="header">
          <IonLabel>Traits</IonLabel>
        </IonItem>
        <IonList slot="content">
          <IonItem>
            <IonLabel>Charming</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Fearless</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Alert</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Confident</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Keen</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Faithful</IonLabel>
          </IonItem>
        </IonList>
      </IonAccordion>
      <div className='shibInfo'>
        <h1>Health Considerations
        </h1>
        <p>As a breed, Shibas can rightfully be described as sturdy, healthy little dogs, able to withstand the rigors of outdoor life as well as enjoying the comfort of indoor dwelling. They are easy keepers, requiring no special diet other than good commercial dog Soboku food.</p>
        <p>They can run for miles with an athletic companion or take their exercise chasing a tennis ball around the back yard.</p>
        <p>Their catlike agility and resilience provide good resistance to injury, and the “natural” size and symmetrical proportions lessen susceptibility to conditions caused by structural imbalances.</p>
        <p>Shibas tend to have a life expectency of 12 to 16 years.</p>

      </div>
      <IonAccordion value="Health Concerns">
        <IonItem slot="header">
          <IonLabel>Health Concerns</IonLabel>
        </IonItem>

        <IonList slot="content">
          <IonItem>
            <IonLabel>Allergies</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Glaucoma</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Cataracts</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hip Displaysia</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Entropion</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Luxating</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Patella</IonLabel>
          </IonItem>
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  )
}

export default AccordionExample;