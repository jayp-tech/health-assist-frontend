import React from 'react';
import './card-content.css';
import Step4Image from "./images/counselor.jpg";
import Step2Image from "./images/create-account.jpg";
import Step5Image from "./images/doctor.png";
import Step1Image from "./images/mental-health.jpg";
import Step3Image from "./images/patient-checklist.jpg";
import './landing-banner.css';

export default function CardImageComponent() {
    return (
        <div className="assessment-banner-container">
        <div className="assessment-banner" style={{ backgroundImage: `url(${require('./images/landing-banner.jpg')})` }}>
          <div className="assessment-banner__content elementToFadeInAndOut">
            <h1>Welcome to HealthAssist</h1>
            <p>Healing minds, transforming lives</p>
          </div>
        </div>
      </div>
    )
}