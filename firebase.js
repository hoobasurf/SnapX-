// firebase.js
// Import Firebase SDK depuis le CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
// Tu pourras ajouter d'autres services Firebase si nécessaire
// Exemple: import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcGNNTTaMht1CaTa6FfCPoFWWfHDHoP9k",
  authDomain: "snapx-bb732.firebaseapp.com",
  projectId: "snapx-bb732",
  storageBucket: "snapx-bb732.firebasestorage.app",
  messagingSenderId: "443585238239",
  appId: "1:443585238239:web:bc5f21dc5150a62163856a",
  measurementId: "G-6GBQ218MGG"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export pour pouvoir utiliser Firebase dans d'autres fichiers
export { app, analytics };
