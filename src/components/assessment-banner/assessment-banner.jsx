import React from 'react';
import './assessment-banner.css';
import BannerImage from './images/assessment-banner.jpg'

function AssessmentBanner() {
  return (
    <div className="assessment-banner-container">
      <div className="assessment-banner" style={{ backgroundImage: `url(${require('./images/assessment-banner.jpg')})` }}>
        <div className="assessment-banner__content">
          <h1>Welcome to the Assessment</h1>
          <p>Please complete the questionnaire to get started</p>
        </div>
      </div>
      <p className="attribution">
        Banner image from <a href="https://pngtree.com/freebackground/medical-care-safety-health-banner_1027477.html?sol=downref&id=bef">pngtree.com</a>
      </p>
    </div>
  );
}

export default AssessmentBanner;