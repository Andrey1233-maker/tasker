import axios from "axios";
import { BASE_URL } from "../../config";

export async function postTables(token: string, createDto: any) {
  try {
    const reesponse = await axios.post(`${BASE_URL}/table`, createDto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return reesponse.data;
  } catch (e) {
    return null;
  }
}
