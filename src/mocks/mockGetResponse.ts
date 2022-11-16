import { UserStructure } from "../types";

const mockGetResponseUsers: UserStructure[] = [
  {
    username: "admin",
    password: "",
    email: "admin@admin.com",
    id: "",
    job: "",
    name: "Admin",
    relation: "friends",
  },
  {
    username: "mireia",
    password: "",
    email: "mireia",
    id: "54321",
    job: "",
    name: "Mireia",
    relation: "enemies",
  },
];

const mockGetResponse = { mockGetResponseUsers };

export default mockGetResponse;
