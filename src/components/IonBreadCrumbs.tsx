import React from "react";
import { useState } from "react";
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from "@ionic/react";
import { home } from "ionicons/icons";

export function IonBreadCrumbsComponent() {
  const [max, setMax] = useState<number | undefined>(3);
  return (
    <div>
      <p>IonBreadCrumbs</p>
      <IonBreadcrumbs
        maxItems={max}
        onIonCollapsedClick={() => setMax(undefined)}
      >
        <IonBreadcrumb href="#home">
          <IonIcon slot="start" icon={home} /> Home
        </IonBreadcrumb>
        <IonBreadcrumb href="#consolas">Consola</IonBreadcrumb>
        <IonBreadcrumb href="#juego">Juegos</IonBreadcrumb>
        <IonBreadcrumb href="#lucha">Lucha</IonBreadcrumb>
      </IonBreadcrumbs>
    </div>
  );
}
