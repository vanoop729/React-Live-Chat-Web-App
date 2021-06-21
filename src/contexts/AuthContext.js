import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      console.log(auth.currentUser);
      if (user) history.push("/Chats");
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {/* If not loading, show the children */}
      {!loading && children}
    </AuthContext.Provider>
  );
};
