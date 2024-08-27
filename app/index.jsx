import Homepage from './homepage'
import Login from './login'
import { useState } from "react";
import '../shim.js'

//Code to have it working on web

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  // Initially should be false
  // Here auth code should be placed

  if (loggedIn) {
    return <Homepage />
  }
  else {
    return <Login />
  }

}