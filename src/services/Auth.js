import firebase from "../config/firebase-config";
const Auth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Auth;
