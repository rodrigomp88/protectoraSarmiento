import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";

const SignOut = () => {
  const firebase = useFirebase();

  const signoutWithGoogle = () => {
    firebase.auth().signOut().then(() => {
      history.push("/");
    }).catch(function(error) {
        // An error happened.
      });
  };

  const history = useHistory();
  return (
    
      <Link 
        to='/'
        title="Salir"
        onClick={(event) => {
          event.preventDefault();
          signoutWithGoogle();
        }}
      >
       <i class="icofont-logout"></i>
      </Link>
    
  );
};

export default SignOut;
