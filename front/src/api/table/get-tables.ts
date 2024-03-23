import axios from "axios";
import { BASE_URL } from "../../config";

export async function getTables(token: string) {
  try {
    const reesponse = await axios.get(`${BASE_URL}/table`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return reesponse.data;
  } catch (e) {
    return null;
  }
}
