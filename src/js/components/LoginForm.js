import React, { useState } from "react";
import { connect } from "react-redux";

import * as ACTIONS from "../store/actions/actions";
import * as STYLES from "../styles/LoginFormStyles";

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDisplay, setLoadingDisplay] = useState("loading");
  return (
    <STYLES.LoginFormWrapper>
      {/* <h1>This is a Login Form</h1>
      <button
        onClick={() =>
          setTimeout(() => {
            props.isAuthenticated
              ? props.un_authenticateUser()
              : props.authenticateUser();
          }, 1000)
        }>
        {props.isAuthenticated ? "Log Out" : "Log In"}
      </button> */}

      <STYLES.LoginBoxWrapper>
        <>
          <STYLES.BoxContentLeft className={isLoading ? loadingDisplay : ""}>
            {!isLoading ? (
              <>
                <STYLES.LeftContentText header>
                  Hey there,
                </STYLES.LeftContentText>

                <STYLES.LeftContentText>
                  Thank you for <br /> Visiting..
                </STYLES.LeftContentText>
              </>
            ) : (
              <STYLES.LoadingText>Loading...</STYLES.LoadingText>
            )}
          </STYLES.BoxContentLeft>

          <STYLES.BoxContentRight>
            <STYLES.RightContentText>
              Please, Login below
            </STYLES.RightContentText>

            <STYLES.LoginButton
              onClick={() => {
                setIsLoading(true);
                return setTimeout(() => {
                  props.isAuthenticated
                    ? props.un_authenticateUser()
                    : props.authenticateUser();
                  setIsLoading(false);
                }, 1000);
              }}>
              {props.isAuthenticated ? "Log Out" : "Log In"}
            </STYLES.LoginButton>
          </STYLES.BoxContentRight>
        </>
      </STYLES.LoginBoxWrapper>
    </STYLES.LoginFormWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: () => dispatch(ACTIONS.authenticateUser()),
  un_authenticateUser: () => dispatch(ACTIONS.un_authenticateUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
