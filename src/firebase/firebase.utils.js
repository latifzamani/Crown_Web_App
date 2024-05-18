import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config= {
    apiKey: "AIzaSyCllgyYnIbk_NJIQXoivh-i_y1K99qqyM8",
    authDomain: "crowndb-df0ec.firebaseapp.com",
    projectId: "crowndb-df0ec",
    storageBucket: "crowndb-df0ec.appspot.com",
    messagingSenderId: "62181040376",
    appId: "1:62181040376:web:91af36caeec986918c5b0d",
    measurementId: "G-YQE2WTFZ1K"
  };

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
           if(!userAuth) return ;
           const userRef=firestore.doc(`users/${userAuth.uid}`);
           const snapShot=await userRef.get();
           if(!snapShot.exists){
            const {displayName,email}=userAuth;
            const createdAt=new Date();

            try {
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
              });
              
            } catch (error) {
              
               console.log('Error creating user',error.message);
            }
           }

           return userRef;
  };


  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>(console.log('y'), auth.signInWithPopup(provider));
   
  export default firebase;