import constantes from "./constants/constantes";

export default class SingUpService {
  static async GetSinUp(name, phone, email, password) {
    let resp = await fetch(constantes.API_URL + "v1/users/account", {
      method: "POST",
      headers: {
        "Content-Type": "applecation/json",
      },
      body: JSON.stringify({
        user_name: name,
        user_phone: phone,
        user_email: email,
        user_password: password,
      }),
    });
    resp = await resp.json();

    return resp;
  }
  static async GetAllRegions() {
    let resp = await fetch(constantes.API_URL + "v1/countries");
    resp = await resp.json();

    return resp;
  }
}
