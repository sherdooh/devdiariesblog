// lib/authService.js
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error.message);
    
    let errorMessage;
    switch (error.code) {
      case 'auth/invalid-credential':
        errorMessage = 'The email address or password is incorrect.';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email address.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'The password is incorrect.';
        break;
      default:
        errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

// Logout function
export const logout = async () => {
  await signOut(auth);
};

// Listen to auth state changes
export const authStateListener = (callback) => onAuthStateChanged(auth, callback);

// Admin email list for validation
const adminEmails = ["sherkiplah@gmail.com", "admin@amin.com"]; 

export const isAdminUser = (user) => {
  const isAdmin = user && adminEmails.includes(user.email);
  console.log("Checking admin status for user:", user.email, "Is Admin:", isAdmin);
  return isAdmin;
};
