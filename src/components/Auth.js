import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    setUser(result.user);
  };

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Log In with Google</button>
      )}
    </div>
  );
};

export default GoogleAuth;
