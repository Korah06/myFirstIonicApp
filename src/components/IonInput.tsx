import React from "react";

import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";

export function IonInputComponent() {
  return (
    <div>
      <p>IonInput</p>
      <IonInput placeholder="Nombre y apellidos" />

      <p>IonInput types</p>
      <IonList>
        <IonItem>
          <IonLabel>Nombre:</IonLabel>
          <IonInput placeholder="Antonio Garcia Lopez" />
        </IonItem>

        <IonItem>
          <IonLabel>Numero:</IonLabel>
          <IonInput type="number" placeholder="69" />
        </IonItem>

        <IonItem>
          <IonLabel>Contraseña:</IonLabel>
          <IonInput type="password" />
        </IonItem>

        <IonItem>
          <IonLabel>Correo:</IonLabel>
          <IonInput type="email" placeholder="example@email.com" />
        </IonItem>

        <IonItem>
          <IonLabel>TLF:</IonLabel>
          <IonInput type="tel" placeholder="000-000-000" />
        </IonItem>
      </IonList>

      <p>IonInput Label positioning</p>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Input:</IonLabel>
          <IonInput type="text" placeholder="example" />
        </IonItem>
      </IonList>
    </div>
  );
}
