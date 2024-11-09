// app/hooks/useAuth.js
import { useState, useEffect } from "react";
import { authStateListener, isAdminUser } from "@/lib/authService";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authStateListener(async (currentUser) => {
      console.log("Auth State Changed - Current user:", currentUser);

      setUser(currentUser);
      if (currentUser) {
        const adminStatus = await isAdminUser(currentUser);
        console.log("Admin status for user:", adminStatus);
        setIsAdmin(adminStatus);
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
      console.log("Auth Hook - Set loading to false");
    });

    return unsubscribe; 
  }, []);

  console.log("Auth Hook - User:", user, "Is Admin:", isAdmin, "Loading:", loading);
  return { user, isAdmin, loading };
};
