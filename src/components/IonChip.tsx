import React from "react";

import { IonChip, IonAvatar, IonLabel, IonIcon } from "@ionic/react";
import { closeCircle, pin } from "ionicons/icons";

export function IonChipComponent() {
  return (
    <div>
      <p>IonChip</p>
      <IonChip>Default</IonChip>
      <IonChip disabled>Disabled</IonChip>
      <IonChip outline>Outline</IonChip>

      <p>IonChip Component & Icon</p>
      <IonChip>
        <IonAvatar>
          <img
            src="https://miro.medium.com/max/1200/1*vyQWmoZvi4Z2j6HfbS_juQ.png"
            alt="Mario"
          />
        </IonAvatar>
        <IonLabel>Mario Espasa</IonLabel>
        <IonIcon icon={closeCircle} />
      </IonChip>

      <IonChip>
        <IonIcon icon={pin} color="primary" />
        <IonLabel>Location</IonLabel>
        <IonIcon icon={closeCircle} />
      </IonChip>

      <p>IocChip temas</p>
      <IonChip>Default</IonChip>
      <IonChip color="primary">Primary</IonChip>
      <IonChip color="secondary">Secondary</IonChip>
    </div>
  );
}
