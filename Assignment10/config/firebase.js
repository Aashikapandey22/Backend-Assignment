const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase
initializeApp({
    credential: cert(serviceAccount)
});

// Connect Firestore
const db = getFirestore();

console.log("Firebase Firestore connected successfully!");

module.exports = db;