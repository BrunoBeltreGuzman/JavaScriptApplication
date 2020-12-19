import Controllers from "./controllers";

export default class Login {
       constructor() {}
       login(name, password) {
              if (name != "" && password != "") {
                     try {
                            let nameLocal = localStorage.getItem("name");
                            let passwordLocal = localStorage.getItem(
                                   "password"
                            );
                            if (
                                   name == nameLocal &&
                                   password == passwordLocal
                            ) {
                                   sessionStorage.setItem("session", "true");
                                   return true;
                            } else {
                                   return false;
                            }
                     } catch (error) {
                            console.log("Error: " + error);
                     }
              } else {
                     console.log("Error Sing In");
              }
       }
}

class Ctrl extends Login {
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
       new Ctrl().ctrlLogin();
});
