import React from "react";

import { IonButton, useIonPicker } from "@ionic/react";

export function IonPickerComponent() {
  const [present] = useIonPicker();

  const open = async () => {
    present({
      columns: [
        {
          name: "languages",
          options: [
            { text: "javascript", value: "javascript" },
            { text: "python", value: "python" },
            { text: "typescript", value: "typescript" },
          ],
        },
      ],
      buttons: [
        { text: "Cancelar", role: "cancel" },
        {
          text: "Ok",
          handler: (value) => {
            console.log("result ==>", value);
          },
        },
      ],
    });
  };

  return (
    <div>
      <p>IonPicker</p>
      <IonButton onClick={open}>Seleccionar Lenguaje</IonButton>
    </div>
  );
}
