import axios from "axios";
import { BASE_URL } from "../../config";

export async function postLogin(email: string, password: string) {
  try {
    const reesponse = await axios.post(`${BASE_URL}/user/sign-in`, {
      email,
      password,
    });

    return reesponse.data;
  } catch (e) {}
}
