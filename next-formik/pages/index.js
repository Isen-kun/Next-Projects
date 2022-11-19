import DynamicForm from "../Components/DynamicForm";
import NewSignUp from "../Components/NewSignUp";
import SignUp from "../Components/SignUp";

const IndexPage = () => {
  return (
    <>
      {/* <SignUp /> */}
      <NewSignUp />
      <hr />
      <DynamicForm />
    </>
  );
};

export default IndexPage;
