import React from "react";

import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";

export function IonDateTimeComponent() {
  return (
    <div>
      <p>IonDateTime</p>
      {/*<IonDatetime />*/}

      <p>IonDateTime button</p>
      <IonDatetimeButton datetime="datetime" />
      <IonModal keepContentsMounted={true}>
        <IonDatetime id="datetime" />
      </IonModal>
    </div>
  );
}
