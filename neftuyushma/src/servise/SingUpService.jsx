import constantes from "./constants/constantes";

export default class SingUpService {
  static async GetSinUp() {
    let resp = await fetch(constantes.API_URL + "v1/account");
    resp = await resp.json();

    return resp;
  }
}
