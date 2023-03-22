import React from 'react';
import './card-content.css';
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