import axios from "axios";
import { BASE_URL } from "../../config";

export async function getWhoami(token: string) {
  try {
    const reesponse = await axios.get(`${BASE_URL}/user/whoami`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return reesponse.data;
  } catch (e) {
    return null;
  }
}
