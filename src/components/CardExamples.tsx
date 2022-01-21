import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonImg, IonRippleEffect, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { pin, wifi, wine, warning, walk, add, settings, logoVimeo } from 'ionicons/icons';

const CardExamples: React.FC = () => {
  const [imgSrc, setImg] = useState('https://images.dog.ceo/breeds/shiba/shiba-10.jpg');
  const Statements = ["Gorgeous", "Fluffy", "Amazing", "Incredible", "Wonderful", "Good dog", "Dreamy"]
  let randomStatement = Statements[Math.floor(Math.random() * Statements.length)]
  const [header, setHeader] = useState(randomStatement);
  console.log(randomStatement)

  function fetchDogURL() {

    var url = "https://dog.ceo/api/breed/shiba/images/random";

    fetch(url)
      .then(function (data) {
        return data.json();
      })
      .then(function (retrieved) {
        setImg(retrieved.message);
        setHeader(randomStatement);
        console.log(retrieved)
      });

  }

  return (
    <div>
      <IonCard >
        <IonCardHeader>
          <IonItem>
            <IonCardTitle>{header}</IonCardTitle>
          </IonItem>
        </IonCardHeader>
        <IonButton
          expand='block'
          onClick={() => {
            fetchDogURL()
          }}
        >
          Show me another shoob pls
          <IonRippleEffect></IonRippleEffect>
        </IonButton>
        <IonCardContent>
          <IonItem>
            <IonImg src={imgSrc} />
          </IonItem>

          <IonCardSubtitle>
            There are few things in life more heartwarming than to be welcomed by a Shiba
          </IonCardSubtitle>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default CardExamples