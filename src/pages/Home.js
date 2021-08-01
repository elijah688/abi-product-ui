import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Product from "../components/Product";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Product/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
