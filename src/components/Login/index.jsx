import React from "react";
import Button from "../Button";
import styles from "./Login.module.css";
//import { LoginDetails } from "./LoginDetails";
import Logo from "../../app/assets/images/spotify-black.svg";
import Facebook from "../../app/assets/images/fb.svg";
//import Apple from "../../app/assets/images/apple.svg";
//import Google from "../../app/assets/images/google.svg";
//import Eyeslash from "../../app/assets/images/eyeslash.svg";


// function Login() {
//   return (
//     <div className={styles.loginPage}>
//       <div className={styles.header}>
//         <img src={LoginDetails.logo}/>
//       </div>
//       <div className={styles.loginFormWrapper}>
//         <div className={styles.loginForm}>
//           <div className={styles.continue}>
//             <Button
//               onClick={() => {}}
//               type="primary"
//               className={styles.facebookBtn}
//             >
//               <img src={LoginDetails.fb}/>
//               <p className={styles.btnText}>Continue with Facebook</p>
//             </Button>
//             <Button
//               onClick={() => {}}
//               type="primary"
//               className={styles.appleBtn}
//             >
//               <img src={LoginDetails.ap}/>
//               <p className={styles.btnText}>Continue with Apple</p>
//             </Button>
//             <Button
//               onClick={() => {}}
//               type="secondary"
//               className={styles.googleBtn}
//             >
//               <img src={LoginDetails.goo}/>
//               <p className={`${styles.btnText} ${styles.googleText}`}>
//                 Continue with Google
//               </p>
//             </Button>
//           </div>
//           <div className={styles.divider}>
//             <span>OR</span>
//           </div>
//           <div className={styles.form}>
//             <label for={styles.username}>Email address or username</label>
//             <br />
//             <input
//               type="text"
//               id={styles.username}
//               placeholder="Email address or username"
//             />{" "}
//             <br />
//             <label for={styles.password}>Password</label>
//             <br />
//             <div className={styles.passwordWrapper}>
//               <input
//                 type="password"
//                 id={styles.password}
//                 placeholder="Password"
//               />
//               <img src={LoginDetails.eye}/>
//             </div>
//             <br />
//             <p>
//               <a href="#/forgotPassword">Forgot your password?</a>
//             </p>{" "}
//             <br />
//             <div className={styles.login}>
//               <div className={styles.rememberMe}>
//                 <input type="checkbox" id={styles.remember} />
//                 <label for={styles.remember}>Remember me</label>
//               </div>
//               <Button
//                 className={styles.loginBtn}
//                 onClick={() => {}}
//                 type="primary"
//               >
//                 log in
//               </Button>
//             </div>
//           </div>
//           <div className={styles.formFooter}>
//             <h3 className={styles.signupTxt}>Don't have an account?</h3>
//             <Button
//               className={styles.signupBtn}
//               onClick={() => {}}
//               type="secondary"
//             >
//               Sign up for Spotify
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
function Login() {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <span></span>
      <div content="" className={styles.form}>
        <Button className={styles.button}>
          <img src={Facebook} alt="facebook" />
          <p className={styles.btnText}>Continue with Facebook</p>
        </Button>
        <Button className={styles.button}>
          <img src={Facebook} alt="facebook" />
          <p className={styles.btnText}>Continue with Facebook</p>
        </Button>
        <Button/>
      </div>
    </div>
  );
}

export default Login;
