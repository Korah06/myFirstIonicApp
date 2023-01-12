import React from "react";

import { useState } from "react";

import {
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

export function IonModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenClose = () => setIsOpen((prevState) => !prevState);

  return (
    <div>
      <p>IonModal</p>

      <IonButton expand="block" onClick={onOpenClose}>
        Abrir Modal
      </IonButton>

      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mi modal</IonTitle>
            <IonButton slot="end" onClick={onOpenClose}>
              Cerrar
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ipsa aut, facere exercitationem deleniti odio.
          </p>
        </IonContent>
      </IonModal>
    </div>
  );
}
