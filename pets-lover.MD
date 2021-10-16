# 💻🙋Red Social - Pets Lover 🐶🐱

## Índice
* [1. Introduccion](#1-Introduccion)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historia de usuario](#3-Historia-de-usuario)
* [4. Diseño de interfaz](#4-Diseño-de-interfaz)
* [5. Testeo de usabilidad](#5-Testeo-de-usabilidad)
* [6. Testing](#6-Testing)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Tecnologias utilizadas](#8-Tecnologias-utilizadas)
* [9. Autoras](#9-Autoras)

## 1. Introduccion
El objetivo de este proyecto era desarrollar un SPA que le permita ver, publicar datos e interactuar. A partir de las historias de usuario, la red social debe brindar funcionalidades acordes a las necesidades del usuario.
## 2. Resumen del proyecto
Pets-Lover es una red social dirigida a personas amantes de las mascotas. En él, el usuario puede publicar fotos de mascotas, tips y cualquier cosa relacionada con el mundo de las mascotas, además de poder editar, borrar su publicación y dar me gusta a las publicaciones de otros usuarios.
## 3. Historia de usuario

|<sub> ID. DE LA HISTORIA 	|<sub> ROL |<sub> CARACTERÍSTICA/FUNCIONALIDAD 	|<sub> RAZÓN/RESULTADO |<sub> CRITERIO DE ACEPTACIÓN</sub>|
|---	|---	|---	|--- |---	|
|<sub>1. Crear cuenta	| <sub>Como usuario nuevo quiero poder crear una cuenta con nombre de usuario , email y password para poder ingresar a la red social.|<sub>Quiero que el usuario quiere crearse una cuenta cuando esté interesado en compartir informacion en la red social, y conocer sus beneficios entonces se creara un apartado que permita al usuario llenar sus datos de username, email, password o registrarse con su cuenta gmail.com y luego estos datos serán guardados.|<sub>El usuario ingresara satisfactoriamente sus datos de registro, el cual usara al ingresar al website	|  <sub>sera un diseño facil de usar y comprender, para el registro de una nueva cuenta |
|<sub>2. Login	| <sub>Como usuario registrado quiero poder ingresar con mi cuenta gmail o nombre de usuario y password para entrar al timeline del website.|<sub>Dado que el usuario quiere ingresar a la cuenta con sus datos cuando este quiera visualizar o compartir informacion en la red social, entonces se creara un apartado que permita al usiario llenar sus datos como son email y password. y estos datos seran validados|<sub>El usuario ingresa satisfactoriamente sus datos de login, el cual se usara para el ingreso en el website.|<sub>El login tendra una casilla para el email, otra para el password, un boton de ingreso. con esto podra ingresar al website |
|<sub>3. Diseño responsive	|  <sub>Como usuario que uso frecuentemente el celular quiero poder manejar de manera sencilla el producto. (Responsive) para que pueda usar las herramientas del website de manera eficiente.|<sub>Quiero que el usuario usa  frecuentemente su dispositivo móvil cuando esta interesado en compartir, visualizar, manipular informacion en la red social entonces se desarrollará el producto con la técnica mobile first (Responsive)|   <sub>El usuario manipulara de manera eficiente los elementos del website desde su dispositivo |   <sub>El website se adaptara al tamaño que necesite el usuario para poder usarlo.|
|<sub>4. Entorno SPA|  <sub>Como usuario que frecuentemente usa la red social "FindMyPaw" quiero obtener los resultados de manera óptima (SPA) para reducir el tiempo de espera de las páginas.  |  <sub>Dado que el usuario usa frecuentemente la red social cuando esta interesado en compartir, visualizar, manipular. para poder unsar la infromacion de manera rapida en la red social, entonces construira Single-PAge application.	|   <sub>Para el usuario puede manipular de manera optima través de las diferentes páginas del SPA. |  <sub>El usuario puede manipular de manera optima a traves de las diferentes paginas del spa.|
|<sub>5. Diseño responsive|  <sub>Como usuario quiero poder acceder al contenido de la red social para interactuar con las herramientas del producto|<sub>Dado que el usuario registrado interactua con el contenido del timeline cuando esta interesado e compartir, visualizar, manipular informacion de la red social, entonces se creara el apartado de timeline, que tendra interaccion con los usuarios.|   <sub>El usuario podra entrar al timeline y obtener informacion compartida por los usuarios.|<sub>	Podra interactuar, compartir y visualizar contenido.|
|<sub>6. Crear publicación|<sub>como usuario quiero compartir el estado de un animal mediante imagen o redaccion para que pueda acceder al apartado de compartir y crear post |  <sub>Dado que el usuario registrado quiere compartir informacion cuando tenga la oportunidad de encontrar animales que necesitan ayuda entonces se desarrrollara el apartado de "crear post"|<sub>El ususario capaz de crear post con la informacion deseada|<sub>El usuario podra crear post con los cuales interactuara con los demas usuarios.|
|<sub>7. consultar likes|<sub>Como usuario autor quiero poder visualizar la cantidad de likes para obtener el conteo de interaccion de los usuarios. |<sub>Dado que el usuario registrado quiere visualizar los  likes cuando los usuarios interactuán con el post entonces se desarrollará una funcion de conteo de likes|<sub>El usuario es capaz de visualizar el conteo de likes de su post.|<sub>El usuario podra ver los links que obtenga el post y solo padra dar un like por pubicacion.|
|<sub>8. Eliminar publicación|<sub>como usuario autor quiero poder eliminar y confirmar la elimincacion de un post para quitar informacion que haya publicado en el timeline.  |  <sub>Dado que el usuario quiere eliminar su post cuando quiera retirar la informacion ingresada entonces se desarrollara un apartado de "eliminar post" en la parte superior del post (tres puntos) y un modal para confirmar la eliminación.|<sub>El usuario es capaz de eliminar su post, con una confirmacion previa.|<sub>El usuario solo podra eliminar sus post, no podra eliminar los post de otros usuarios.|
|<sub>9. Editar publicación|<sub>Como usuario autor quiero poder editar y guardar el post editado para corregir o incorporar nueva informacion.|  <sub>dado que el usuario quiere poder editar su post cuando quiera corregir informacion entonces se desarrollara un apartado de "editar post en la parte superior del post ( tres punto).|   <sub>El usuario es capaz de editar de manera eficiente su post publicando.|<sub>	El usuario, podra editar solo los post escritos por el.|
|<sub>10. Visualizar publicación|  <sub>Como usuario autor quiero: poder visualizar mi post despues de publicarlo para corregir o incorporar nueva informacion.|  <sub>Dado que el usuario quiere poder visualizar su post cuando termine de publicarlo entonces se recargara la pagina despues e enviar el post para poder visualizarlo y poder editarlo.|   <sub>El usuario es capaz de visualizar de manera eficiente  su post publicado.|<sub>El usuario podra visualizar su post al momento que sea publicado.|
|<sub>11. like publicación|<sub>Como usuario que interactúa con el contenido del website interesado en alguna  publicación quiero poder dar likes y quitarlos cuando lo desee.|  <sub>Dado que el usuario quiere interactuar dando likes cuando esté interesado o le guste alguna publicación entonces se desarrollará un botón de corazón en la publicación para que interactúe con el post, mediante un solo click|<sub>El usuario es capaz de dar y quitar un like en cada publicación.|<sub>El usuario podra like su post al momento que sea publicado.|


## 4. Diseño de interfaz
### 4.1 Prototipado en alta fidelidad
![Prototipo-inicial](../src/img/figmapetlovers.png)
![Prototipo-inicial](../src/img/login.png)
![Prototipo-inicial](../src/img/register.png)
![Prototipo-inicial](../src/img/homepet.png)
![Prototipo-inicial](../src/img/profile.png)
### 4.2 Responsive
Debe verse bien en dispositivos de pantallas grandes (computadoras/es, laptops, etc.) y pequeñas (tablet, celulares, etc.),
- Vista mobile y vista Desktop
* ![responsive](../src/img/responsive.png)

## 5. Testeo de usabilidad

El proyecto se basó en un sistema de cuentas de usuario, siendo lo que las redes sociales actuales utilizan para garantizar la seguridad y la organización en un sistema con muchos usuarios. Ajustándonos a los requerimientos, contamos con las siguientes secciones:

* **Sign In:** Para usuarios que ya tengan una cuenta creada.
* **Sign Up:** Para usuarios nuevos.
* **Home:** El ususario podrá crear, editar, eliminar y reaccionar a las publicaciones tanto suyas como de otros usuarios.
* **Log out:** Para cuando el usuario desee cerrar sesión.
## 6. Testing
## 7. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

__UX:__

- [x] Diseñar la aplicación pensando y entendiendo al usuario.  
- [x] Crear prototipos para obtener feedback e iterar.  
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).  
- [x] Planear y ejecutar tests de usabilidad.  

__HTML:__  

- [x] Uso de HTML semántico.  

__CSS:__

- [x] Uso de selectores de CSS.  
- [x] Modelo de caja (box model): borde, margen, padding.  
- [x] Construir tu aplicación respetando el diseño realizado (maquetación).  
- [x] Uso de flexbox en CSS.  
- [ ] Uso de CSS Grid Layout  

__DOM - WEB API:__  

- [x] Uso de selectores del DOM.  
- [x] Manejo de eventos del DOM (listeners, propagación, delegación)  
- [x] Manipulación dinámica del DOM (appendChild |createElement | createTextNode| innerHTML | textContent | etc.).  
- [x] Ruteado (History API, evento hashchange, window.location)  
- [x] History API  
- [x] Localstorage  

__JAVASCRIPT:__  

- [x] Uso de condicionales (if-else | switch | operador ternario).  
- [x] Uso de funciones (parámetros | argumentos | valor de retorno).  
- [x] Manipular arrays (filter | map | sort | reduce).  
- [x] Manipular objects (key | value).  
- [x] Uso de ES Modules (import | export).  
- [x] Diferenciar entre expression y statements.  
- [x] Diferenciar entre tipos de datos atómicos y estructurados (datos primitivos y no primitivos).  
- [x] Variables (declaración, asignación, ámbito)  
- [x] Uso de bucles/ciclos (while, for, for..of)  
- [x] Funciones (params, args, return)  
- [x] Uso de Callbacks  
- [x] Consumo de Promesas  

__TESTING:__  

- [x] Testeo unitario.  
- [ ] Testeo asíncrono. 
- [x] Uso de librerias de Mock.  
ESTRUCTURA DEL CODIGO, GUIA DE ESTILO
- [x] Organizar y dividir el código en módulos (Modularización).  
- [x] Uso de identificadores descriptivos (Nomenclatura | Semántica).  
- [x] Uso de mocks y espías.  
- [x] Módulos de ECMAScript (ES Modules)  
- [x] Uso de identificadores descriptivos (Nomenclatura y Semántica)  
- [x] Uso de linter (ESLINT).
GIT / GITHUB  
- [x] Instalación y configuración  
- [x] Uso de comandos de git (add | commit | pull | status | push).  
- [x] Manejo de repositorios de GitHub (clone | fork | gh-pages | code review)  
- [x] Colaboración en Github (branches | pull requests | tags)/(branch, checkout, fetch, merge, reset, rebase, tag)  
- [ ] Creación de cuenta y repos, configuración de llaves SSH  
- [x] Organización en Github (projects | issues | labels | milestones)

__FIREBASE:__

- [x] Firestore  
- [x] Firebase Auth  
- [ ] Firebase security rules  
- [ ] Observables  



## 8. Tecnologias utilizadas
Para este proyecto se utilizo lo siguiente:
* JavaScript(ES6+)
* HTML5
* CSS3
* Firebase Firestore
* Firebase Auth
* EsLint
* github

***

## 9. Autoras
### Trabajo colaborativo:💪
Este proyecto fue realizado por:
* [Dora Elizabeth Callisaya Choquecota](https://github.com/Dora-tech)
* [Elizabeth Ramona Pinto Arraez](https://github.com/Elipinto23)

***
### Cuarta proyecto de especialización Front End generacion LIM015 Laboratoria Peru - 2021

Red Social: Pets Lover

