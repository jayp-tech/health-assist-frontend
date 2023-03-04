import React from 'react'
import "./card-content.css"

export default function CardContentComponent() {
    return (
        <div className='what-we-do'>
            <h2>WHAT WE DO</h2>
            <div className='container'>
                <div className='col-4'>
                    <p className='side-heading'><i className='fas'></i>Convenient access to medical services</p>
                    <p>Our platform provides easy and quick access to medical services for patients, doctors, and counsellors. Patients can conduct a self-assessment test, and the results will be sent to the counselor for review. The counselor will determine whether the patient needs further appointments or medical attention.</p>
                </div>
                <div className='col-4'>
                    <p className='side-heading'><i className='fas'></i>Personalized treatment plan</p>
                    <p>Our well-known psychiatrists and counsellors will review the self-assessment test results to determine the best treatment plan for each patient. Each patient will receive personalized care based on their symptoms and medical history. Our goal is to provide effective and efficient care to help patients achieve optimal mental health.</p>
                </div>
                <div className='col-4'>
                    <p className='side-heading'><i className='fas'></i>Your details are safe</p>
                    <p>All patient data will be handled extremely safely, ensuring patient confidentiality. Our platform will generate reports for management to help improve our services. We are committed to protecting patient privacy and providing high-quality medical care.</p>
                </div>
            </div>
        </div>
    )
}