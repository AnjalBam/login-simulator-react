import React from "react";
import LoginForm from "./js/components/LoginForm";

import { MainExternalWrapper } from "./js/styles/MainStyles";

function App() {
  return (
    <MainExternalWrapper>
      {/* <MainHeading>Login App</MainHeading> */}
      <LoginForm />
    </MainExternalWrapper>
  );
}

export default App;
