import lipi from "../../app/assets/images/lipi.svg";
import paytm from "../../app/assets/images/paytm.svg";
import visa from "../../app/assets/images/visa.svg";
import mastercard from "../../app/assets/images/mastercard.svg";
import amex from "../../app/assets/images/amex.svg";
import club from "../../app/assets/images/club.svg";

export const plans = [
  {
    plantype: "Mini",
    planlist: {
      first: "Ad-free Music listening on mobile",
      second: "Group Session",
      third: "Download 30 songs on 1 mobile device",
    },
    cost: "From ₹7/day",
    account: "1 account on mobile only",
  },
  {
    plantype: "Individual",
    planlist: {
      first: "Ad-free Music listening",
      second: "Group Session",
      third: "Download 10K songs/device on 5 devices",
    },
    cost: "₹119/month after offer period",
    account: "1 account",
  },
  {
    plantype: "Duo",
    planlist: {
      first: "For couples who live together",
      second: "Ad-free Music listening",
      third: "Group Session",
      fourth: "Download 10K songs/device on 5 devices per account",
    },
    cost: "₹149/month after offer period",
    account: "2 account",
  },
  {
    plantype: "Family",
    planlist: {
      first: "For Family who live together",
      second: "",
      third: "Ad-free Music listening",
      fourth: "Group Session",
      fifth: "Download 10K songs/device on 5 devices",
    },
    cost: "₹179/month after offer period",
    account: "Up to 6 accounts",
  },
];

export const paymentOptions = [
  { type: lipi },
  { type: paytm },
  { type: visa },
  { type: mastercard },
  { type: amex },
  { type: club },
];
