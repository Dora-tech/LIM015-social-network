/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { logout,publishPost } from '../security/security.function.js';

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
                    <img class="profile-user-img" src=${localStorage.getItem('photo')}>
                    <p id='name-profile'>${localStorage.getItem('name')}</p>
                    <p id='email-profile'>${localStorage.getItem('email')}</p>
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
      <div class="posts-container">
      <div id="showPost" class="show-post"> </div>
      </div>
      `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHomen;
  return divElem;
}

export function initHome() {
  const btnLogout = document.getElementById('btnExit');
  btnLogout.addEventListener('click', () => {
    logout();
    window.location.hash = '#/login';
  });
}

const db = firebase.firestore();
// const getPost = () => db.collection('post').get();
/* const form= document.getElementById('') */
const onGetPost = (callback) => db.collection('posts').onSnapshot(callback);

const deletePost = (id) => db.collection('posts').doc(id).delete();

const UpdatePost = (description,id) => db.collection('posts').doc(id).update({
  description,
});

document.querySelector('#showPost');
window.addEventListener('DOMContentLoaded', async (e) => {
  // const querySnapshop = await getPost();
  onGetPost((querySnapshot) => {
    document.querySelector('#showPost').innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.data());

      const info = doc.data();
      info.id = doc.id;
      // console.log(info);
      document.querySelector('#showPost').innerHTML += `
    
      <div class='post-body' data-idpost='${info.id}'>
      <img class="profile-user-img" src=${info.photo}><h3>${info.name}</h3>  <h3>${info.day}</h3>         
      <div class="description-div">
        
            <h3 data-h3id="${info.id}">${info.description}</h3>
            <div id="showbtnEdits" class="show-btnedits" data-test="${info.id}"> </div>
            <div id="bnts">
              <img id= "btnDelete" class="btnDelite" data-id="${info.id}"src='img/close-1.svg'>
              <img id="btnEdit" class="btn-edit" data-myid="${info.id}" src='img/edit3.svg'>
            </div>
            </div>

            <div class="date-likes">
                 <div class="likes-container">
                    <img class="like-post" src="img/like1.svg">
                  <img class="send-post" src='img/send.svg' >
                 </div>
                  <div class="likes-counter">
                  
                     <span></span><a id="p-likes" class="mostrar-likes" style="cursor:pointer;">0 Likes</a>
                    </div>
                </div>
        </div>
    `;
      const btnsDelite = document.querySelectorAll('.btnDelite');
      btnsDelite.forEach((btn) => {
        // eslint-disable-next-line no-shadow
        btn.addEventListener('click', async (e) => {
          await deletePost(e.target.dataset.id);
        });
      });
      const btnsEdit = document.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        // eslint-disable-next-line no-shadow
        btn.addEventListener('click', async (e) => {
        //  await deletePost(e.target.dataset.id);
        console.log(e.target.dataset.myid);
        document.querySelector(`[data-h3id="${e.target.dataset.myid}"]`).style.display = 'none'
        document.querySelector(`[data-test="${e.target.dataset.myid}"]`).innerHTML = `
        <div id="bntsmyedit">
        <input id = '${e.target.dataset.myid}' class='input-edit'  type='text' >
        
          <button id="btnSave" class="btnSave" data-idsave="${e.target.dataset.myid}">Save</button>
          <button id="btnCancel" class="btnCancel" data-myidcancel="${e.target.dataset.myid}">Cancel</button>
        </div>
        `;

        const editInput = document.getElementById(e.target.dataset.myid);
        const mih3=document.querySelector(`[data-h3id="${e.target.dataset.myid}"]`);
        editInput.value=mih3.innerHTML;
        editInput.focus();
        const btnsCancel = document.querySelectorAll('.btnCancel');
        btnsCancel.forEach((btncancel) => {
          // eslint-disable-next-line no-shadow
          btncancel.addEventListener('click', async (e) => {
            document.querySelector(`[data-h3id="${e.target.dataset.myidcancel}"]`).style.display = 'block'
           // document.querySelector(`[data-idInput="${e.target.dataset.myidcancel}"]`).style.display = 'none'
            document.querySelector(`[data-test="${e.target.dataset.myidcancel}"]`).innerHTML = "";
          });
        });
        const btnsSave = document.querySelectorAll('.btnSave');
        btnsSave.forEach((btnsave) => {
          // eslint-disable-next-line no-shadow
          btnsave.addEventListener('click', async (e) => {
            await UpdatePost(editInput.value,e.target.dataset.idsave);            
          });
        });
        //-----
        });
      });
    });
  });
});

// se crea la coleccion
/* const saveCollection = (descriptionPost) => db.collection('input-timeline').doc().set({
  descriptionPost,
}); */


// --------- Evento del botón "Publicar"-----------//
document.addEventListener('click', async (e) => {
  if (e.target.id === 'publish-btn') {
    const inputPost = document.querySelector('.input-timeline');
    if (inputPost.value.trim().length > 0) {
/*       const descriptionPost = document.querySelector('#input-timeline');
      console.log(descriptionPost);*/
      //await saveCollection(inputPost.value); 
      const date = new Date(Date.now());
      const objPublicacion = {
        photo: localStorage.getItem('photo'),
        name: localStorage.getItem('name'),
        description: inputPost.value,
        day: date.toLocaleString(),
        user: localStorage.getItem('uid'),
        likesUser: [],
      };
      publishPost(objPublicacion)
        .then((resolve) => {
          console.log(resolve);// eslint-disable-line
        })
        .catch((reject) => {
          console.log(reject);// eslint-disable-line
        });
    } else {
      alert('Por favor, llena los campos'); // eslint-disable-line
    }
    inputPost.value = '';
  }
});