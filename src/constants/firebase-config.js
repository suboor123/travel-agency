import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDMd2RLVcMFyWyf5bOGJuGwlH4cFD1xiyU',
    authDomain: 'krapton-e3f91.firebaseapp.com',
    databaseURL: 'https://krapton-e3f91-default-rtdb.firebaseio.com',
    projectId: 'krapton-e3f91',
    storageBucket: 'krapton-e3f91.appspot.com',
    messagingSenderId: '193286303475',
    appId: '1:193286303475:web:6aacdb132957b3d5e71186',
    measurementId: 'G-DLMXYEQ67H',
};

// Initialize Firebase & Database
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
