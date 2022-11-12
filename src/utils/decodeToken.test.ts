import jwtDecode from "jwt-decode";
import { JwtPayloadCustom } from "../types";

describe("Given a decodeToken funcion", () => {
  describe("When it's called with a token", () => {
    test("Then it shoudl return an object", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pcmVpYTQiLCJpZCI6IjYzNmZjMzZjY2IxMDFhM2NkNGJlZGQ4YSIsImlhdCI6MTY2ODI2OTE3OSwiZXhwIjoxNjY4NDQxOTc5fQ.n1WpQo6lzeGiJpfngUzr86iO55218EvdpUAIRSThbUE";

      const jwtPayload: JwtPayloadCustom = jwtDecode(token);

      const expectedId = "636fc36ccb101a3cd4bedd8a";

      expect(jwtPayload.id).toStrictEqual(expectedId);
    });
  });
});
