import React from "react";

import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react";
import {
  add,
  share,
  logoTwitter,
  logoFacebook,
  logoDiscord,
} from "ionicons/icons";

export function IonFabComponent() {
  return (
    <div>
      <p>IonFab</p>

      <IonFab>
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>

      <IonFab slot="fixed" horizontal="end" vertical="bottom">
        <IonFabButton>
          <IonIcon icon={share} />
        </IonFabButton>

        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={logoTwitter} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoDiscord} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={logoFacebook} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </div>
  );
}
