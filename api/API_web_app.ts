import { request } from "@playwright/test";
import { env } from "../playwright.config";

export class API {
  async login(data): Promise<any> {
    const req = await request.newContext();
    const resp = await req.post(`${env.API_URL}/o/token/jwt`, {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
      },
      data,
    });
    const status = resp.status();
    if (status !== 200) {
      const errorBody = await resp.text();
      throw new Error(
        `Unexpected response status: ${status} Error response body: ${errorBody}`
      );
    }
    const response = await resp.json();
    return response;
  }

  async registerNewUser(user) {
    const req = await request.newContext();
    const resp = await req.post(`${env.API_URL}/v2/users`, {
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json;charset=UTF-8",
      },
      data: {
        email: user.email,
        password: user.password,
        country: "UA",
        locale: "uk",
      },
    });
    const status = resp.status();
    if (status !== 201) {
      const errorBody = await resp.text();
      throw new Error(
        `Unexpected response status: ${status} Error response body: ${errorBody}`
      );
    }

    const response = await resp.json();
    return response;
  }
}
