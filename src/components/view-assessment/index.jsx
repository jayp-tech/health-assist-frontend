import React from 'react'
import './index.css'

export default function ViewAssessment({ assessmentResult }) {
    return (
        <div className="view-assessment-container">
            <div className="table-header">Assessment Data</div>
            <table className="va-table">
                <tr className='va-row'>
                    {/* <thead className='va-header'> */}
                    <th className='va-index'>
                        Sr.
                    </th>
                    <th className='va-question'>
                        Questions
                    </th>
                    <th className='va-description'>
                        Answer
                    </th>
                    {/* </thead> */}
                </tr>
                {(assessmentResult.attemptedQuestions || []).map((attemptedQuestion, index) => {
                     let answerText = '';
                     switch (attemptedQuestion.answer) {
                       case 1:
                         answerText = 'Not At All';
                         break;
                       case 2:
                         answerText = 'More Than Half The Days';
                         break;
                       case 3:
                         answerText = 'Nearly Every day';
                         break;
                       case 0:
                         answerText = 'Several Days';
                         break;
                       default:
                         answerText = 'Not Selected';
                         break;
                     }
                    return (
                        <tr className="va-row" key={`attempted-question-${index}`}>
                            <td className="va-index" >{index + 1}</td>
                            <td className="va-question">{attemptedQuestion.question}</td>
                            <td className="va-description">{answerText}</td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    )
}