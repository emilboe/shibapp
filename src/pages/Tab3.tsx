import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import About from '../components/About';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About this app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <About></About>
      </IonContent>
    </IonPage >
  );
};

export default Tab3;
