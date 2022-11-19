import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewSignUp = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 15 characters or less")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="input-container">
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
          />
          <ErrorMessage name="firstName" />
        </div>
        <div className="input-container">
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="First Name"
          />
          <ErrorMessage name="lastName" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewSignUp;
