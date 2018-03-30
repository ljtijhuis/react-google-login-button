import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleLogin extends Component {
  componentDidMount() {
    this.loadGoogleLibrary();
  }

  loadGoogleLibrary() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";

    script.onload = () => {
      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init({
          client_id: this.props.googleClientId,
        });

        // Render the button
        window.gapi.signin2.render('google-signin-button', {
          width: this.props.width,
          height: this.props.height,
          longtitle: this.props.longTitle,
          theme: this.props.theme,
          onfailure: this.props.onLoginFailure,
          onsuccess: this.props.onLoginSuccess,
        });

        // Sign in the user if they are currently signed in.
        if (auth2.isSignedIn.get() == true) {
          auth2.signIn();
        }
      });
    };

    document.body.appendChild(script);
  }

  // signOut() {
  //   var auth2 = window.gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(() => {
  //     console.log('User signed out.');
  //   });
  // }

  render() {
    return (
      <div id="google-signin-button"></div>
    )
  }
}

GoogleLogin.propTypes = {
  googleClientId: PropTypes.string.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  onLoginFailure: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  longTitle: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark']),
}

GoogleLogin.defaultProps = {
  width: 140,
  height: 40,
  longTitle: false,
  theme: 'light',
}

export default GoogleLogin;
