import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router";
import { UserFormStyled } from "./UserFormStyled";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";

const UserForm = (): JSX.Element => {
  const { updateMyUserApi, loadUserByIdApi } = useApi();
  const navigate = useNavigate();
  const myUserInfo = useAppSelector(({ users }) => users.profile);

  const { id: myUserId } = useParams<"id">();

  useEffect(() => {
    if (!myUserInfo) {
      loadUserByIdApi(myUserId!);
    } else {
      setFormData(myUserInfo);
    }
  }, [myUserId, loadUserByIdApi, myUserInfo]);

  const [formData, setFormData] = useState(myUserInfo);

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (!formData) {
      return;
    }
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    if (!formData) {
      return;
    }

    event.preventDefault();

    const formDataToSubmit = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      name: formData.name,
      job: formData.job,
      interest: formData.interest,
      residence: formData.residence,
      image: formData.image,
      id: myUserId!,
    };
    console.log(formDataToSubmit);
    updateMyUserApi(formDataToSubmit, myUserId!);
    navigate("/home");
  };

  return (
    <>
      {formData && (
        <UserFormStyled onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div>
              <div className="form__item">
                <label className="form__label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  id="username"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.username || ""}
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.password || ""}
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.name || ""}
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.email || ""}
                  required
                />
              </div>
            </div>
            <div>
              <div className="form__item">
                <label className="form__label" htmlFor="job">
                  Profession
                </label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.job || ""}
                />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="interest">
                  Hobbies
                </label>
                <input
                  type="text"
                  name="interest"
                  id="interest"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.interest || ""}
                />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="residence">
                  Residence
                </label>
                <input
                  type="text"
                  name="residence"
                  id="residence"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.residence || ""}
                />
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleFormChange}
                  autoComplete="off"
                  value={formData.image || ""}
                />
              </div>
            </div>
          </div>
          <Button text="Update" action={() => {}}></Button>
        </UserFormStyled>
      )}
    </>
  );
};

export default UserForm;
