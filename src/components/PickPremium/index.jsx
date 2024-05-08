import React from "react";
import Button from "../Button";
import style from "./PickPremium.module.css";
import { plans } from "./PickPremiumData";
import { planDetails } from "./PlanDetails";
import { paymentOptions } from "./PickPremiumData";

function Card() {
  return (
    <div className={style.bigpremiumsection}>
      <div className={style.payment}>
        <h2>Pick your Premium</h2>
        <p>Listen without limits on your phone, speaker,and other devices</p>
        <div className={style.paymentoptions}>
          {paymentOptions.map((paymentOption) => (
            <div>
              <img src={paymentOption.type} />
            </div>
          ))}
        </div>
      </div>
      <div className={style.premiumsection}>
        {plans.map((plan) => (
          <div className={style.premiumsectionitem}>
            <Button content="1 month free" element={style.bluebg} />
            <Button
              content="One-time plans available"
              element={style.squareborder}
            />
            <p className={style.plantype}>{plan.plantype}</p>
            <p className="">{plan.cost}</p>
            <p className="">{plan.account}</p>
            <span className={style.hr}></span>
            <div className={style.details}>
              {planDetails.map((detail) => (
                <div className={style.detailitem}>{detail.planlist.first}</div>
              ))}
            </div>
            <Button content="VIEW PLANS" element={style.wider} />
            <span className={style.hr}></span>
          </div>
        ))}
      </div>
      <div className={style.special}>
        <p>Special discount for eligible students in university</p>
        <Button content="LEARN MORE" element={style.border} />
      </div>
    </div>
  );
}

export default Card;
