import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

//Untuk memudahkan protect halaman. Harus login dulu baru bisa
const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  //supaya ga keliatan flasshing
  if (isLoading) {
    return;
  } else {
    return children;
  }
};

export default ProtectedComponent;
