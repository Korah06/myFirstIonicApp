import React from "react";
import { IonRippleEffect } from "@ionic/react";
import "./IonRippleEffect.css";

export function IonRippleEffectComponent() {
  return (
    <div>
      <p>IonRippleEfect</p>
      <div className="ion-activatable ripple-parent rectangle">
        <IonRippleEffect />
      </div>
    </div>
  );
}
