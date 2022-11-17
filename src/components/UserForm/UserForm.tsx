import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { useParams } from "react-router";
import { UserFormStyled } from "./UserFormStyled";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";

const UserForm = (): JSX.Element => {
  const { updateMyUserApi, loadUserByIdApi } = useApi();
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
      [event.target.id]:
        event.target.id === "image"
          ? (event.target as HTMLInputElement).files![0]
          : event.target.value,
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

    updateMyUserApi(formDataToSubmit, myUserId!);
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
                />
              </div>
            </div>
          </div>
          <Button text="Update" action={() => {}}></Button>
          {formData.image?.name && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Your avatar"
              className="edit-profile__icon"
              height={200}
            />
          )}
        </UserFormStyled>
      )}
    </>
  );
};

export default UserForm;
