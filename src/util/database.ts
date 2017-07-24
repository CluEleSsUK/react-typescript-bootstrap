import * as firebase from "firebase"
import {isProd} from "./env";

let config = {
    apiKey: "AIzaSyCPuQRCLpdwL_XiR62Q-sVceV_TDOgqnIc",
    authDomain: "wevat-customer.firebaseapp.com",
    databaseURL: "https://wevat-customer.firebaseio.com",
    projectId: "wevat-customer",
    storageBucket: "wevat-customer.appspot.com",
    messagingSenderId: "94247977804",
};

if (isProd) {
    config = {
        apiKey: "AIzaSyCODr6N2vdeuXP61KKz31pwZhITCxhSMuk",
        authDomain: "wevat-customer-8333e.firebaseapp.com",
        databaseURL: "https://wevat-customer-8333e.firebaseio.com",
        projectId: "wevat-customer-8333e",
        storageBucket: "wevat-customer-8333e.appspot.com",
        messagingSenderId: "462955734706",
    }
}

//this is required as you can't run the firebase admin sdk on clientside
firebase.initializeApp(config);
firebase.auth().signInWithEmailAndPassword("blah@blah.com", "blahblah123");

export const db = firebase.database();
export const auth = firebase.auth();

