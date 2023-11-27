import React from 'react';
import './Plans.css';
import { FormContext } from './App';
import { plans } from '../billing.js';

export default function Plans() {

  const { formData, updateFormData } = React.useContext(FormContext);

  const payMonthly = formData.billMonthly;

  return (
    <React.Fragment>
      <h1>Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="planList"> 
        { plans.map(plan => (
        <div key={plan.id} 
          className={formData.planId === plan.id ? "planItem active" : "planItem"}
          onClick={() => updateFormData("planId", plan.id)}
        >
          <img src={plan.icon} alt="Arcade" />
          <div>
            <h2>{plan.name}</h2>
            <p>{"$" + (payMonthly ? plan.pricePerMonth + "/mo" : plan.pricePerYear + "/yr")}</p>
            { payMonthly ? null : <p className="freeMonths">2 months free</p> }
          </div>
        </div>)) }
      </div>

      <div className="periodSwitch">
        <span className={payMonthly?"active":""}>Monthly</span>
        <div>
          <input type="checkbox" id="period" name="period" className="toggleSw" checked={!payMonthly} onChange={() => updateFormData("billMonthly", !payMonthly)} />
          <label htmlFor="period" className="toggleLabel"></label>
        </div>
        <span className={payMonthly?"":"active"}>Yearly</span>
      </div>
    </React.Fragment>
  );
}
