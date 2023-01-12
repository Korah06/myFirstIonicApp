import React from "react";
import { IonBadge } from "@ionic/react";
export function IonBadgeComponent() {
  return (
    <div>
      <p>IonBadge</p>
      <IonBadge>12</IonBadge>
      <br />
      <IonBadge>Nuevo curso</IonBadge>
      <br />
      <br />
      <p>IonBadge color</p>
      <IonBadge color="primary">22K</IonBadge>
      <IonBadge color="secondary">220K</IonBadge>
      <IonBadge color="tertiary">22K</IonBadge>
    </div>
  );
}
