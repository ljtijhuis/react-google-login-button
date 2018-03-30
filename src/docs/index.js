import React from "react";
import { render } from "react-dom";
import GoogleLoginButton from '../';
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>React Google Login Button</h1>
      <GoogleLoginButton
        googleClientId='818385300561-bvk0pjf09k2ojp9vdjhns08hh2ae36sl.apps.googleusercontent.com'
        onLoginSuccess={(googleUser) => {
          console.log('Replace this function to start using this information');
          console.log('Google User:', googleUser.getBasicProfile());
          console.log('ID token:', googleUser.getAuthResponse().id_token);
        }}
        onLoginFailure={() => console.log('Login failed')}
        width={140}
        height={40}
        longTitle={false}
        theme="light"
      />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
