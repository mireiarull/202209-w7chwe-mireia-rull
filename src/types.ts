export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  email: string;
}

export interface User {
  id: string;
  userName: string;
  email: string;
  token: string;
}

export interface JwtPayloadCustom {
  id: string;
  userName: string;
  email: string;
}
