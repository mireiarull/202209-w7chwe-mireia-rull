import UserForm from "../../components/UserForm/UserForm";
import Header from "../../components/Header/Header";
import EditPageStyled from "./EditPageStyled";

const EditPage = () => {
  return (
    <EditPageStyled>
      <main className="container">
        <Header />
        <UserForm />
      </main>
    </EditPageStyled>
  );
};

export default EditPage;
