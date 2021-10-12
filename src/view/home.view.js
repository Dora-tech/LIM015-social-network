/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import { logout } from '../firebase/security.function.js';
import {
  db, onGetPost, deletePost, saveCollection,
} from '../firebase/database.functions.js';

export function viewHome() {
  const viewHomen = `
        <header id="header-bar-nav">
        <nav class="headerNav">
            <img class="logo-nav" src="../img/pet.jpg"></img>
            <ul class="ul-nav" id="navList">
                <li class="li-nav">
                <a href="#">
                    <img src='../img/logout.png' id ='btnExit' class='logo_home'>Logout
                  </a>
                </li>
            </ul>
        </nav>
      </header>
      <section id="main-page">
        <div class="container">
            <div class="popup-wrapper" style="display:none;">
                <div class="popup">
                    <div class="popup-close">X</div>
                    <div id="div-contenido-likes" class="popup-content">
                    </div>
                </div>
              </div>
                <!----------------perfil---------------->
                <div class = 'profile-container'> 
                  <div class="profile">
                    <img class="profile-user-img" src=${sessionStorage.getItem('photo')}>
                    <p id='name-profile'>${sessionStorage.getItem('name')}</p>
                    <p id='email-profile'>${sessionStorage.getItem('email')}</p>
                  </div>
                </div>
                <!----------------muro---------------->
                <div class = 'timeline-container'>
                  <div class= 'timeline'>
                    <input id = 'input-timeline' class='input-timeline' type='text' placeholder='Write your post here'><br>
                    <div class= 'container-btn'>
                      <img class="imgpicture" src='img/picture.svg'>
                      <input id="publish-btn" type=button value='Post'>
                    </div>
                  </div>
                </div>
        </div>
      </section>
      <section id="showPosts">
      <div id="showPost" class="show-post">
      </section>
       </div>
      `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHomen;
  return divElem;
}

function addListenerButtonDelete() {
  const btnsDelete = document.querySelectorAll('.btnDelete');
  btnsDelete.forEach((btn) => {
    // eslint-disable-next-line no-shadow
    btn.addEventListener('click', async (e) => {
      await deletePost(e.target.dataset.id);
    });
  });
}

function showPosts() {
  // const querySnapshop = await getPost();
  onGetPost((querySnapshot) => {
    document.querySelector('#showPost').innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      const info = doc.data();
      info.id = doc.id;
      console.log(info);
      document.querySelector('#showPost').innerHTML += `
      <div>${info.description}</div>
      <div id="bnts">
      <button id= "btnDelete" class="btnDelete" data-id="${info.id}">Delete</button>
      <button id="btnEdit" class="btn-edit" >Edit</button>
      </div>
      `;
    });
    addListenerButtonDelete();
  });
}

// boton de post
function btnpost() {
  const btnposts = document.querySelector('#publish-btn');
  btnposts.addEventListener('click', async (e) => {
    const inputTimeLine = document.querySelector('#input-timeline');
    console.log(inputTimeLine);
    await saveCollection(inputTimeLine.value);
  });
}

export function initHome() {
  const btnLogout = document.getElementById('btnExit');
  btnLogout.addEventListener('click', () => {
    window.location.hash = '#/login';
    logout();
  });
  showPosts();
  btnpost();
}
