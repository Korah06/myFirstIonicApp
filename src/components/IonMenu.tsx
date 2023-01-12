import React from "react";

import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export function IonMenuComponent() {
  return (
    <div>
      <IonMenu contentId="main-content" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>contenido del menu.....</p>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mi primer menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Abrir menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonPage>
    </div>
  );
}
