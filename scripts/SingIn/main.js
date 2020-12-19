import Controllers from "./controllers.js";
import SingIn from "./singin.js";

class Main extends SingIn {
       constructor() {
              super();
       }
       ctrlSingIn() {
              const name = document.getElementById("name").value;
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              if (name != "" && email != "" && password != "") {
                     this.singIn(name, email, password);
              } else {
                     let message = document.getElementById("message");
                     Controllers.danger(message);
              }
       }
}

const form = document.getElementById("formSingIn");
form.addEventListener("submit", function (event) {
       event.preventDefault();
       new Ctrl().ctrlSingIn();
       let message = document.getElementById("message");
       Controllers.danger(message);
       setTimeout(() => {
              window.location = "./../pages/login.html";
       }, 3000);
});
