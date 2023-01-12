import React from 'react'
import {IonButton, IonIcon} from "@ionic/react"
import {star} from "ionicons/icons"

export function IonButtonComponent() {

    const onClickButton = ()=>{console.log("ir a la web")}

  return (
    <div>
        <p>IonButton</p>

        <p>On click</p>
        <IonButton onClick={onClickButton}>
            Ir a la web
        </IonButton>

        <p>Disabled</p>
        <IonButton disabled>
            deshabilitado
        </IonButton>

        <p>expand</p>
        <IonButton expand='block'>
            Block
        </IonButton>
        <IonButton expand='full'>
            Full
        </IonButton>

        <p>shape</p>
        <IonButton shape='round'>
            Round
        </IonButton>

        <p>Fill</p>
        <IonButton fill='clear'>
            Clear
        </IonButton>

        <IonButton fill='outline'>
            Outline
        </IonButton>

        <p>size</p>

        <IonButton size='small'>
            Small
        </IonButton>
        <IonButton size='default'>
            Default
        </IonButton>
        <IonButton size='large'>
            Large
        </IonButton>

        <p>icon</p>

        <IonButton ><IonIcon slot='start' icon={star} /> Left Icon</IonButton>
        <IonButton ><IonIcon slot='end' icon={star} /> Right Icon</IonButton>
        <IonButton ><IonIcon slot='icon-only' icon={star} /></IonButton>


    </div>
  )
}
