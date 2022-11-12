import { useFormik } from "formik";
import firebase from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Form = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const db = firebase.firestore();
  const addFormDocument = async (values) => {
    console.log(values.firstName, values.lastName, user.uid);
    await db.collection("FormData").doc().set({
      firstName: values.firstName,
      lastName: values.lastName,
      userId: user.uid,
    });
  };

  const router = useRouter();
  if (!loading && user === null) {
    router.push("/");
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },

    onSubmit: (values) => {
      addFormDocument(values);
      router.push("/dashboard");
    },
  });

  return (
    <>
      <h1>Form Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
