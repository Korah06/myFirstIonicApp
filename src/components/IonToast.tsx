import React from "react";

import { IonButton, useIonToast } from "@ionic/react";

export function IonToastComponent() {
  const [present] = useIonToast();

  const openToast = (position: "top" | "middle" | "bottom") => {
    present({
      message: "Hello World",
      duration: 1500,
      position: position,
    });
  };

  const openToastOptions = () => {
    present({
      message: "Hello World",
      duration: 3000,
      onDidDismiss: (e) => console.log(e),
      buttons: [
        { text: "Cerrar", role: "cancel", handler: () => console.log("CLOSE") },
      ],
    });
  };

  return (
    <div>
      <p>IonToast</p>
      <IonButton expand="block" onClick={() => openToast("bottom")}>
        Presiona para Toast
      </IonButton>

      <p>IonToast - options</p>
      <IonButton expand="block" onClick={openToastOptions}>
        Toast Options
      </IonButton>
    </div>
  );
}
