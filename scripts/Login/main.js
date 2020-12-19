import Controllers from "./controllers.js";
import Login from "./login.js";

class Main extends Login {
       constructor() {
              super();
       }
       ctrlLogin() {
              const name = document.getElementById("name").value;
              const password = document.getElementById("password").value;

              if (name != "" && password != "") {
                     let boo = this.login(name, password);
                     if (boo) {
                            sessionStorage.setItem("session", "true");
                            let message = document.getElementById("message");
                            Controllers.success(message);
                            setTimeout(() => {
                                   window.location = "./../pages/home.html";
                            }, 3000);
                     } else {
                            let message = document.getElementById("message");
                            Controllers.danger(message);
                            setTimeout(() => {
                                   message.style.display = "none";
                                   message.classList.remove("alert-danger");
                                   message.classList.add("alert-success");
                            }, 3000);
                     }
              } else {
                     let message = document.getElementById("message");
                     Controllers.danger(message);
                     setTimeout(() => {
                            message.style.display = "none";
                            message.classList.remove("alert-danger");
                            message.classList.add("alert-success");
                     }, 3000);
              }
       }
}

const form = document.getElementById("formLogin");
form.addEventListener("submit", function (event) {
       event.preventDefault();
       new Main().ctrlLogin();
});
