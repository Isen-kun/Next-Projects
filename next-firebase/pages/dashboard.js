import firebase from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  // console.log(user);

  const logout = () => {
    signOut(firebase.auth());
  };

  const router = useRouter();
  if (!loading && user === null) {
    router.push("/");
  }

  //read
  const [forms, formsLoading, formErrors] = useCollection(
    firebase.firestore().collection("FormData")
  );

  //logging
  // if (!formsLoading && forms) {
  //   forms.docs.map((doc) => console.log(doc.id, doc.data()));
  // }

  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/form">
        <a>Form Page</a>
      </Link>
      {loading && <h2>Loading..</h2>}
      <button onClick={logout}>Logout</button>
      <div>
        {forms &&
          forms.docs.map((doc) => {
            return (
              <div key={doc.id}>
                <h5>{doc.data().userId}</h5>
                <h5>{doc.data().firstName}</h5>
                <h5>{doc.data().lastName}</h5>
                <br />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Dashboard;
