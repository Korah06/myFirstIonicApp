import React from "react";
import { IonButton, IonLoading, useIonLoading } from "@ionic/react";
export function IonLoadingComponent() {
  const [present, dismiss] = useIonLoading();

  const loadData = () => {
    present({
      message: "Cargando informacion...",
    });

    setTimeout(() => {
      dismiss();
    }, 4000);
  };
  return (
    <div>
      <p>IonLoading</p>

      <IonButton onClick={loadData}>Cargar datos</IonButton>
    </div>
  );
}
