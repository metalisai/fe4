import React from 'react';
import { createContext, useState, useRef } from 'react';
import './App.css';
import Plans from './Plans';
import Addons from './Addons';
import Info from './Info';
import Confirm from './Confirm';

import tyIcon from '../Assets/Images/icon-thank-you.svg';

export const FormContext = createContext();

export default function App() {

  const [formData, setFormData] = useState( {
    step: 1,
    name: "",
    email: "",
    phone: "",
    billMonthly: true,
    planId: 1,
    addonIds: [1,2],
  });

  const updateFormData = (key, value) => {
    setFormData(x => ({ ...x, [key]: value }));
  }

  const infoRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Personal info",
    },
    {
      id: 2,
      title: "Plan",
    },
    {
      id: 3,
      title: "Add-ons",
    },
    {
      id: 4,
      title: "Summary",
    }
  ]

  function setStep(stepId) {
    if (stepId < 1 || stepId > steps.length) return;
    if (formData.step > steps.length) return;
    if (formData.step === 1 && !infoRef.current()) return;
    updateFormData("step", stepId);
  }

  function nextStep() {
    if (formData.step === steps.length) return;
    if (formData.step === 1 && !infoRef.current()) return;
    setFormData(x => ({ ...x, step: x.step + 1 }));
  }

  function prevStep() {
    if (formData.step === 1) return;
    setFormData(x => ({ ...x, step: x.step - 1 }));
  }

  function confirm() {
    updateFormData("step", 5);
  }

  function stepClass(stepId) {
    if (formData.step === stepId) {
      return "formStep active";
    } else if (formData.step === stepId + 1) {
      return "formStep prev";
    } else if (formData.step === stepId - 1) {
      return "formStep next";
    } else {
      return "formStep";
    }
  }

  return (
    <React.Fragment>
      <section className="formContainer">
        <div className="stepView">
          <ul className="stepList">
            { steps.map(curStep => (
              <li key={curStep.id} onClick={() => setStep(curStep.id)}>
                <div>
                  <span className={`stepNr ${formData.step === curStep.id || formData.step === 5 && curStep.id === 4 ? "stepNrActive" : ""}`}>{curStep.id}</span>
                </div>
                <div>
                  <div className="stepDesc">Step {curStep.id}</div>
                  <div className="stepStatus">{curStep.title}</div>
                </div>
              </li>
            ))
            }
          </ul>
        </div>
        <div className="formView">
          <div className="stepContainer">

            <div className={stepClass(1)}>
              <FormContext.Provider value={{ formData, updateFormData }}>
                <Info isFormValidRef={infoRef} />
              </FormContext.Provider>
            </div>

            <div className={stepClass(2)}>
              <FormContext.Provider value={{ formData, updateFormData }}>
                <Plans />
              </FormContext.Provider>
            </div>

            <div className={stepClass(3)}>
              <FormContext.Provider value={{ formData, updateFormData }}>
                <Addons />
              </FormContext.Provider>
            </div>

            <div className={stepClass(4)}>
              <FormContext.Provider value={{ formData, updateFormData }}>
                <Confirm />
              </FormContext.Provider>
            </div>

            <div className={stepClass(5)}>
              <div className="thanks">
                <img src={tyIcon} alt="Thank you!" />
                <div>
                  <h1>Thank you!</h1>
                  <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>
              </div>
            </div>

          </div>

          <div className={`btnContainer${formData.step > steps.length ? " hide" : ""}`}>
            <button className="btn btnBack" onClick={prevStep}>Go Back</button>

            {(formData.step === steps.length) 
              ? <button className="btn btnConfirm" onClick={confirm}>Confirm</button> 
              : <button className="btn btnNext" onClick={nextStep}>Next</button>
            }
          </div>

        </div>
      </section>
    </React.Fragment>
  );
}
