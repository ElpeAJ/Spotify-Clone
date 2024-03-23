import React from "react";
import Button from "../Button";
import style from "./PickPremium.module.css";
import { plans } from "./PickPremiumData";
import { planDetails } from "./PlanDetails";

function Card() {
  return (
    <div className={style.premiumsection}>
      {plans.map((plan) => (
        <div className={style.premiumsectionitem}>
          <Button content="1 month free" element={style.bluebg} />
          <Button content="One-time plans available" element={style.squareborder} />
          <p className={style.plantype}>{plan.plantype}</p>
          <p>{plan.cost}</p>
          <p>{plan.account}</p>
          <hr />
          <div>
           {planDetails.map((detail)=>(
            <div>{detail.planlist.first}</div>
           ))
           }
          </div>
          <Button content="VIEW PLANS" element={style.blackbg} />
        </div>
      ))}
    </div>
  );
}

export default Card;
