import React, { useState } from 'react';
import { backspaceOutline, call } from 'ionicons/icons';
import { CreateAnimation, IonButton, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRouterLink, IonRow } from '@ionic/react';
import '../styles/General.css';
import '../styles/PhoneDisplay.css';
import PhoneButton from './PhoneButton';

interface PhoneDisplayProps { }

const PhoneDisplay: React.FC<PhoneDisplayProps> = () => {
  const [ dialedNumber, setDialedNumber ] = useState('');

  // adds a character to the dialed number
  function addCharacter(char: string) {
      if (dialedNumber.length < 3) {
          setDialedNumber(dialedNumber + char);
      }
  }

  // removes a character from the dialed number
  function removeCharacter() {
      if (dialedNumber) {
          setDialedNumber(dialedNumber.substr(0, dialedNumber.length - 1))
      } else {
          setDialedNumber('');
      }
  }

  // checks if the number entered is 911
  function isCorrect() {
      return dialedNumber === '911';
  }

  return (
    <div className="phoneContainer container" style={{width: '300px'}}>
      <IonItem className="textDisplay">
        CALL FOR EMERGENCY
      </IonItem>
      <IonItem className="numberDisplay">
        <IonLabel className="numberLabel" id="dialed">
          {dialedNumber}
        </IonLabel>
      </IonItem>
      <CreateAnimation
        duration={50}
        iterations={2}
        keyframes={[
          { offset: 0, left: '0px'},
          { offset: 0.5, left: '5px'},
          { offset: 1, left: '0px'}
        ]}
      >
      </CreateAnimation>
      <IonGrid>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='1' subText='' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='2' subText='ABC' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='3' subText='DEF' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='4' subText='GHI' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='5' subText='JKL' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='6' subText='MNO' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='7' subText='PQRS' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='8' subText='TUV' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='9' subText='WXYZ' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <PhoneButton mainText='*' subText='' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='0' subText='+' addCharacter={addCharacter} />
          </IonCol>
          <IonCol>
            <PhoneButton mainText='#' subText='' addCharacter={addCharacter} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
          <IonCol>
            <IonRouterLink href={isCorrect() ? './goodjob/home/question:0/1' : './tryagain'}>
              <IonButton shape="round" fill="outline" color="success" size="large" className="phoneButton">
                <IonIcon icon={call} size="small"></IonIcon>
              </IonButton>
            </IonRouterLink>
          </IonCol>
          <IonCol>
            <IonButton shape="round" fill="clear" className="backSpaceIcon" onClick={() => removeCharacter()}>
              <IonIcon icon={backspaceOutline} size="large"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default PhoneDisplay;
