import React from "react";

import { IonCheckbox, IonItem, IonLabel } from "@ionic/react";
export function IonCheckBoxComponent() {
  return (
    <div>
      <p>IonCheckBox</p>
      <IonItem>
        <IonCheckbox slot="start" indeterminate={true} />
        <IonLabel>Aceptar terminos y Condiciones</IonLabel>
      </IonItem>
    </div>
  );
}
