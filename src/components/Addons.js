import React from 'react';
import './Addons.css';
import { FormContext } from './App';
import { addons } from '../billing.js';

export default function Addons() {

  const { formData, updateFormData } = React.useContext(FormContext);

  const payMonthly = formData.billMonthly;

  return (
    <React.Fragment>
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>

    <div className="addonList">
      { addons.map( addon => ( 
        <div key={addon.id} className={
          formData.addonIds.includes(addon.id) ? "addonItem active" : "addonItem"
        }>
        <div>
          <input type="checkbox" id={"addon"+addon.id} name={"addon"+addon.id}
            checked={formData.addonIds.includes(addon.id)}
            onChange={() => {
              if (formData.addonIds.includes(addon.id)) {
                updateFormData("addonIds", formData.addonIds.filter(x => x !== addon.id));
              } else {
                updateFormData("addonIds", [...formData.addonIds, addon.id]);
              }
            }}
          />
          <label htmlFor="addon1"></label>
        </div>
        <div className="addonDesc">
          <h2>{addon.name}</h2>
          <p>{addon.description}</p>
        </div>
        <div className="addonAmt">
          <p>{payMonthly 
            ? "+$"+addon.pricePerMonth+"/mo"
            : "+$"+addon.pricePerYear+"/yr"
          }</p>
        </div>
      </div>
      ))}
    </div>
    </React.Fragment>
  );
}
