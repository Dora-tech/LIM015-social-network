/* eslint-disable no-unused-vars */
import {
  login,
  logInWithEmail,
  getUserInfo,
} from '../firebase/security.function.js';

export function viewLogin() {
  const divElem = document.createElement('article');
  divElem.className = 'article-login';
  divElem.innerHTML = `
  <figure class='figure-login'>
    <img class='fondo-Login1' src='./img/fondoLogin.png' id='fondoLogin1'  >
  </figure>
  <article class='contenedorLogin'>
      <figure class='figure-title-login'>
        <img src='img/pet.jpg' id='fondoPet' class='fondoAnimalPet'>
      </figure> 
   <form action="#" class='frmLogin'>
   <div class="form-login-inputs">
      <input id='email' placeholder='Email' class='btn-texto'>
      <input class='btn-texto' type='password' name='password' id='password' placeholder='Password'>
    </div>  
      <button id='btnsignin' class='btn-signin'>signin</button> 
      <span class='message'></span> 
      <span class='txt'>You can also enter with</span>
    <figure class='figure-google'>
      <img src='img/gmail.png' alt='iGoogle' class='logoGmail' id='btnGoogle'>
    </figure>    
    
    <span class='txt'>¿You do not have an account?</span>
      <button id='registro' class='btn-register' ><a href='#/register'class='a-login-signup'>register</a></button>
    </form>
</article>

`;
  return divElem;
}

function validateAndLogin() {
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  const message = document.querySelector('.message');
  message.innerHTML = '';
  if (email === '' || password === '') {
    message.innerHTML = 'Por favor llene todos los campos';
  } else {
    email = email.trim();
    email = email.toLowerCase();
    password = password.trim();
    logInWithEmail(email, password).then(() => {
      window.location.hash = '#/home';
      getUserInfo();
    }).catch((err) => {
      console.error(err);
      message.innerHTML = 'verifica tu correo, para poder ingresar';
    });
  }
}

function logInWithGoogleClick() {
  login()
    .then(() => {
      window.location.hash = '#/home';
      getUserInfo();
    })
    .catch((error) => {
      /*     Manejar errores aquí. */
      // console.log('error');
      /*    El correo electrónico de la cuenta del usuario utilizada. */
    });
}

export function initLogin() {
  const btnLoginGoogle = document.querySelector('#btnGoogle');
  const btnLoginEmail = document.querySelector('#btnsignin');

  btnLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // eslint-disable-next-line no-use-before-define
    logInWithGoogleClick();
  });

  btnLoginEmail.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // eslint-disable-next-line no-use-before-define
    validateAndLogin();
  });
}
