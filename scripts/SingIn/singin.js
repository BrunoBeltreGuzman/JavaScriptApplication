export default class SingIn {
       constructor() {}
       singIn(name, email, password) {
              if (name != "" && email != "" && password != "") {
                     try {
                            localStorage.setItem("name", name);
                            localStorage.setItem("email", email);
                            localStorage.setItem("password", password);
                     } catch (error) {
                            console.log("Error: " + error);
                     }
              } else {
                     console.log("Error Sing In");
              }
       }
}
