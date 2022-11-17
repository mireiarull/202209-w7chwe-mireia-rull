import jwtDecode from "jwt-decode";
import { JwtPayloadCustom } from "../types";

const decodeToken = (token: string) => {
  const jwtPayload: JwtPayloadCustom = jwtDecode(token);

  return {
    id: jwtPayload.id,
    username: jwtPayload.username,
    email: jwtPayload.email,
  };
};

export default decodeToken;
