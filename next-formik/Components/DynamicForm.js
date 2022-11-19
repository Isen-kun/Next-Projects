import { Formik, Form, Field, ErrorMessage } from "formik";

const DynamicForm = () => {
  const form = {
    Name: "",
    Age: "",
    Address: "",
  };

  const initialValues = form;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        {Object.keys(form).map((q) => {
          return (
            <div key={q}>
              <p>{q}</p>
              <Field type="text" id={q} name={q} />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default DynamicForm;
