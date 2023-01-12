import React from "react";

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from "@ionic/react";

export function IonCardComponent() {
  return (
    <div>
      <p>IonCard</p>
      <IonCard>
        <img
          src="https://miro.medium.com/max/828/1*vyQWmoZvi4Z2j6HfbS_juQ.webp"
          alt="Mario Espasa"
        ></img>
        <IonCardHeader>
          <IonCardTitle>Mario Espasa</IonCardTitle>
          <IonCardSubtitle>Frontend Developer</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Lorem ipsum dolor sit</IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Maria Lloret</IonCardTitle>
          <IonCardSubtitle>Farmaceutica</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          dignissimos non excepturi tempora eligendi cupiditate a repudiandae
          maxime nostrum error animi dolor dolore dolores possimus, odit magnam
          alias dolorem harum!
        </IonCardContent>

        <IonButton fill="clear">Like</IonButton>
        <IonButton fill="clear">Redes Sociales</IonButton>
      </IonCard>
    </div>
  );
}
