export const db = firebase.firestore();
export const onGetPost = (callback) => db.collection('post').onSnapshot(callback);

export const deletePost = (id) => db.collection('post').doc(id).delete();

export const saveCollection = (descriptionPost) => db.collection('post').add({
  description: descriptionPost,
});
