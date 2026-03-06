// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDyptaMe1PQZgDNJ2OzUILoAhZTJLbpTro",
  authDomain: "complaint-system-2-8c113.firebaseapp.com",
  databaseURL: "https://complaint-system-2-8c113-default-rtdb.firebaseio.com",
  projectId: "complaint-system-2-8c113",
  storageBucket: "complaint-system-2-8c113.firebasestorage.app",
  messagingSenderId: "220960024495",
  appId: "1:220960024495:web:6c6bafc62a0398d3bf715a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect Realtime Database
const database = getDatabase(app);

// Export database
export { database };