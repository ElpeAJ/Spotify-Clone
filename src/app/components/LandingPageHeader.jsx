import "./LandingPageHeader.css";
import { Logo } from "./Logo";
import Button from "./button";

export const LandingPageHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#/Premium">Premium</a>
          </li>
          <li>
            <a href="#/Support">Support</a>
          </li>
          <li>
            <a href="#/Download">Download</a>
          </li>
          <li>|</li>
          <li className="active">
            <a href="#/Sign up">Sign up</a>
          </li>
          <li className="active">
            <a href="#/Log in">Log in</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export function Banner(){
  return (
    <div className="blue-banner">
      <h2>Get Premium free for 1 month</h2>
      <p>
        Just 119/month after. Debit and credit cards accepted. Cancel anytime.
      </p>
      <div className="buttons">
      <Button content="GET STARTED" element="black-bg"/>
      <Button content="SEE OTHER PLANS" element="border"/>
      </div>
      <p className="terms">
        <a href="#">Terms and conditions apply.</a> 1 month free not available
        for users who have already tried Premium
      </p>
    </div>
  );
}
