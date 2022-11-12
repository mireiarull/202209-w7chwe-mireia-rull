export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  email: string;
}
