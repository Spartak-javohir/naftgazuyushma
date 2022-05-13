import constantes from "./constants/constantes";

export default class SingUpService {
  static async PostSinUp(name, phone, email, password) {
    let resp = await fetch(constantes.API_URL + "v1/users/account", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: name,
        user_phone: phone,
        user_email: email,
        user_password: password,
      }),
    });
    resp = await resp.json();
    // console.log(resp);
    return resp;
  }
  static async PostSinIn(email, password){
    let resp = await fetch (constantes.API_URL + "v1/users",{
      method : "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        user_email: email,
        user_password: password,
      }),
    });
    resp = await resp.json();
    // console.log(resp);
    return resp;
    
    
  }
}
