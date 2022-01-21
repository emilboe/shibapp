import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Accordion from '../components/Accordion';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Information about Shibas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Accordion> </Accordion>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
