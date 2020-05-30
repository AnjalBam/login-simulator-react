import React, { useState } from "react";
import { connect } from "react-redux";

import * as ACTIONS from "../store/actions/actions";
import * as STYLES from "../styles/LoginFormStyles";

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDisplay, setLoadingDisplay] = useState("loading");
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      props.isAuthenticated
        ? props.un_authenticateUser()
        : props.authenticateUser(userName);
      setIsLoading(false);
      setUserName("");
    }, 1000);
  };
  return (
    <STYLES.LoginFormWrapper>
      <STYLES.LoginBoxWrapper>
        <STYLES.BoxContentLeft className={isLoading ? loadingDisplay : ""}>
          {!isLoading ? (
            <>
              <STYLES.LeftContentText header>
                Hey {props.userName ? props.userName : "there"},
              </STYLES.LeftContentText>

              <STYLES.LeftContentText>
                {props.isAuthenticated ? (
                  <>
                    Thank you for <br /> Visiting...
                  </>
                ) : (
                  <>
                    Please Login with <br /> your Name
                  </>
                )}
              </STYLES.LeftContentText>
            </>
          ) : (
            <STYLES.LoadingText>Loading...</STYLES.LoadingText>
          )}
        </STYLES.BoxContentLeft>

        <STYLES.BoxContentRight>
          <STYLES.RightContentText>
            {props.isAuthenticated
              ? "Click Button below to Logout"
              : "Please, Login below"}
          </STYLES.RightContentText>

          <STYLES.StyledForm onSubmit={handleSubmit}>
            {props.isAuthenticated ? null : (
              <input
                required
                type="text"
                placeholder="UserName"
                value={userName}
                onChange={handleChange}
              />
            )}
            <STYLES.LoginButton type="submit">
              {props.isAuthenticated ? "Log Out" : "Log In"}
            </STYLES.LoginButton>
          </STYLES.StyledForm>
        </STYLES.BoxContentRight>
      </STYLES.LoginBoxWrapper>
    </STYLES.LoginFormWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    userName: state.authReducer.userName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: (userName) => dispatch(ACTIONS.authenticateUser(userName)),
  un_authenticateUser: () => dispatch(ACTIONS.un_authenticateUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
