import { signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

type UserProfile = {
  uid: string;
  email: string;
  role: "admin" | "viewer";
  createdAt: string;
};

function Dashboard() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const profileRef = doc(db, "users", currentUser.uid);
      const profileSnap = await getDoc(profileRef);

      if (!profileSnap.exists()) {
        setMessage("Profile not found.");
        return;
      }

      const currentProfile = profileSnap.data() as UserProfile;
      setProfile(currentProfile);

      if (currentProfile.role === "admin") {
        const usersSnap = await getDocs(collection(db, "users"));
        const userList = usersSnap.docs.map((d) => d.data() as UserProfile);
        setUsers(userList);
      }
    }

    loadData();
  }, []);

  async function logout() {
    await signOut(auth);
    window.location.href = "/login";
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>

      {profile && (
        <div>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>
      )}

      {profile?.role === "admin" && (
        <>
          <h2>All Users</h2>
          {users.map((user) => (
            <div className="card" key={user.uid}>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </div>
          ))}
        </>
      )}

      {profile?.role === "viewer" && (
        <p>You can only view your own profile.</p>
      )}

      {message && <p>{message}</p>}

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;