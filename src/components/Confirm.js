import React from 'react';
import { useContext } from 'react';
import "./Confirm.css";
import { FormContext } from './App';
import { plans, addons } from '../billing.js';

export default function Confirm() {

  const { formData, updateFormData } = useContext(FormContext);
  const billMonthly = formData.billMonthly;
  const planAmount = billMonthly ? plans[formData.planId-1].pricePerMonth : plans[formData.planId-1].pricePerYear;
  const planName = plans[formData.planId-1].name;
  const billAmount = planAmount + addons.filter(x => formData.addonIds.includes(x.id)).reduce((a,b) => a + (billMonthly ? b.pricePerMonth : b.pricePerYear), 0);

  return (
    <React.Fragment>
      <h1>Confirm</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="confirmDetails">
        <div className="confirmPlan">
          <div>
            <h2>{planName} {billMonthly?"(Monthly)":"(Yearly)"}</h2>
            <a href="#" onClick={() => updateFormData("step", 2)}>Change</a>
          </div>
          <span className="planAmt">{'$'+planAmount+(billMonthly?"/mo":"/yr")}</span>
        </div>
        <hr />
        <div className="confirmAddons">
          { addons.filter(x => formData.addonIds.includes(x.id)).map(addon => (
              <div key={addon.id} className="spread">
                <div className="aName">{addon.name}</div>
                <div className="aAmt">{billMonthly ? "+$"+addon.pricePerMonth+"/mo" : "+$"+addon.pricePerYear+"/yr"}</div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="spread">
        <div className="totalName">Total{ billMonthly?" (per month)":" (per year)"}</div>
        <div className="finalAmount">{'$'+billAmount+(billMonthly?"/mo":"/yr")}</div>
      </div>
    </React.Fragment>
  );
}
