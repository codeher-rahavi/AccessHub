import React, { Fragment } from "react";
import { Route,Routes } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import SignIn from "./pages/signIn/signIn";
import LandingPage from "./pages/landinPage/landingpage";


const App = () => {
  return (
    <Fragment>
          <Routes>
              <Route path="signUp" element={<SignUp/>}/>
              <Route path="signIn" element={<SignIn/>}/>
              <Route path="landingPage" element={<LandingPage/>}/>
          </Routes>

    </Fragment>

  )
}
export default App;