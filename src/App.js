import React from "react";
import { useEffect, useState } from "react";
import GoogleAuth from "./components/googleauth";
import initializeFirebase from "./services/init";

initializeFirebase();

function App() {
  return (
    <div className="App">
      <GoogleAuth />
    </div>
  );
}

export default App;
