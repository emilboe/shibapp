import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CardExamples from '../components/CardExamples';
import './Tab1.css';

const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shiba Pictures</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Utforsk</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />

        <CardExamples></CardExamples>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
