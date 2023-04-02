import React from "react";
// import { ProgressBar, Step } from "react-step-progress-bar";
// import "react-step-progress-bar/styles.css";
import { toReadableDateFormat } from "../../lib/time-util";
import { PatientRecordStatus } from "../../lib/types";
import { Steps } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import OneImage from "./images/1.png";
import TwoImage from "./images/2.png";
import ThreeImage from "./images/3.png";
import FourImage from "./images/4.png";
import FiveImage from "./images/5.png";
import CancelImage from "./images/Cancel.png";

import "./patient-status.css";

export const PatientStatus = ({ payload }) => {
    const STATUS_ACCEPT = {
        [PatientRecordStatus.NULL]: {
            before: null,
            current: "Please take the assessment to get started!",
            after: "You finished assessment",
        },
        [PatientRecordStatus.COUNSELOR_IN_PROGRESS]: {
            before: "The counselor will review your case.",
            current: "Your file is under review by the counselor.",
            after: "Your file was reviewed and see next step for further step.",
        }, // reject or accept
        [PatientRecordStatus.COUNSELOR_REJECTED]: {
            before: null,
            current:
                "The counselor has rejected your file. Please fill out the form again if you want to restart the process.",
            after: null,
        },

        [PatientRecordStatus.COUNSELOR_APPOINTMENT]: {
            before: "The counselor will assign appointment date.",
            current:
                "Your appointment with the counselor has been scheduled on " +
                toReadableDateFormat(payload.startDateTime) +
                ".",
            after: "Your file has been forwarded to a doctor for review.",
        },
        [PatientRecordStatus.DOCTOR_IN_PROGRESS]: {
            before: "The Consuler will forward your case to doctor",
            current: "Your file is under review by the doctor.",
            after: "Your file was reviewed and see next step for further step.",
        },
        // reject or appoinment
        [PatientRecordStatus.DOCTOR_REJECTED]: {
            before: null,
            current:
                "The doctor has rejected your file. Please fill out the form again if you want to restart the process.",
            after: null,
        },

        [PatientRecordStatus.DOCTOR_APPOINTMENT]: {
            before: "The doctor will review your case.",
            current:
                "Your appointment with the doctor has been scheduled on " +
                toReadableDateFormat(payload.startDateTime) +
                ".",
            after: null,
        },
    };

    const stepsInformation = [];
    let flag = false;
    let currentIndex = 0;
    let setImage;
    for (let [key, value] of Object.entries(STATUS_ACCEPT)) {
        if (key === payload.patientRecordStatus) {
            if (
                payload.patientRecordStatus ===
                PatientRecordStatus.DOCTOR_REJECTED
            ) {
                stepsInformation.push({
                    title: "In Progress",
                    description: value.current,
                    status: "error",
                });
                setImage = CancelImage;
                break;
            } else if (
                payload.patientRecordStatus ===
                PatientRecordStatus.COUNSELOR_REJECTED
            ) {
                stepsInformation.push({
                    title: "In Progress",
                    description: value.current,
                    status: "error",
                });
                setImage = CancelImage;
                break;
            }
            flag = true;
            stepsInformation.push({
                title: "In Progress",
                description: value.current,
                status: "process",
            });
            switch (currentIndex) {
                case 0:
                    setImage = OneImage;
                    break;
                case 1:
                    setImage = TwoImage;
                    break;
                case 2:
                    setImage = ThreeImage;
                    break;
                case 3:
                    setImage = FourImage;
                    break;
                case 4:
                    setImage = FiveImage;
                    break;
                default:
                    break;
            }
        } else if (!flag) {
            if (key === PatientRecordStatus.DOCTOR_REJECTED) {
                continue;
            } else if (key === PatientRecordStatus.COUNSELOR_REJECTED) {
                continue;
            }
            currentIndex++;
            stepsInformation.push({
                title: "Finished",
                description: value.after,
                status: "finish",
            });
        } else {
            if (key === PatientRecordStatus.DOCTOR_REJECTED) {
                continue;
            } else if (key === PatientRecordStatus.COUNSELOR_REJECTED) {
                continue;
            }
            stepsInformation.push({
                title: "Waiting",
                description: value.before,
                status: "wait",
            });
        }
    }

    return (
        <div className="status-container">
            <h1 className="status-heading">Your Status</h1>
            <div className="step-container">
                <Steps current={currentIndex} vertical>
                    {stepsInformation.map((step) => {
                        return (
                            <Steps.Item
                                style={{ fontWeight: "700" }}
                                title={step.title}
                                description={step.description}
                                status={step.status}
                            />
                        );
                    })}
                </Steps>
            </div>
            <div className="step-container card-container">
                <div className="status-card">
                    <img src={setImage} alt="" />
                </div>
            </div>
            <div className="extra"></div>
        </div>
    );
};
