import constantes from "./constants/constantes";

export default class SingUpService {
  static async PostSinUp(name, phone, email, password) {
    let resp = await fetch("http://localhost:8888/v1/users/account", {
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
    console.log(resp);
    resp = await resp.json();
    console.log(resp);
    return resp;
  }
}
