import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFEH0_aPA-2gmq3bhDSyhbPPw6umMIJAo',
  authDomain: 'memoran-36d09.firebaseapp.com',
  databaseURL:
    'https://memoran-36d09-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'memoran-36d09',
  storageBucket: 'memoran-36d09.firebasestorage.app',
  messagingSenderId: '577920749012',
  appId: '1:577920749012:web:52c11757862f3183245a41',
  measurementId: 'G-K6HFLRYW8T',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);