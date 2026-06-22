import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

type Props = {
  children: ReactNode;
};

function ProtectedRoute({ children }: Props) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

export default ProtectedRoute;