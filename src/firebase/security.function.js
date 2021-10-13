/* eslint-disable no-console */
/* eslint-disable max-len */

export const emailVerication = () => firebase.auth().currentUser.sendEmailVerification();

export const registerWithEmail = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export async function login() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const response = await firebase.auth().signInWithPopup(googleProvider);
  return response.user;
}

// funcion para cerrar sesion
export function logout() {
  firebase.auth().signOut();
  sessionStorage.clear();
}

export const logInWithEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export function getUserInfo() {
  const currentUser = firebase.auth().currentUser;
  // Obtener la info del usuario
  const uid = currentUser.uid;
  const name = currentUser.displayName;
  const email = currentUser.email;
  const photo = currentUser.photoURL;
  // Guardar la info en localStorage
  sessionStorage.setItem('uid', uid);
  sessionStorage.setItem('name', name);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('photo', photo);
}
