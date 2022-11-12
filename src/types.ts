export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  email: string;
  name: string;
  job: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
  email: string;
}

export interface UserStructure {
  username: string;
  name: string;
  job: string;
}
