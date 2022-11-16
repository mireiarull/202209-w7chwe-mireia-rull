import { rest } from "msw";
import mockGetResponse from "./mockGetResponse";

const url = process.env.REACT_APP_API_SOCIAL;

const handlers = [
  rest.get(`${url}/users/list`, async (request, response, context) => {
    return response(context.status(200), context.json(mockGetResponse));
  }),
  rest.get(`${url}/users/profile/1`, async (request, response, context) => {
    return response(context.status(200), context.json(mockGetResponse));
  }),
];

export default handlers;
