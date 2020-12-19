export default class SessionLoad {
       constructor() {}

       setUserName() {
              const name = localStorage.getItem("name");

              const userName = document.getElementById("userName");
              userName.innerHTML = name;
       }

       load() {
              if (
                     sessionStorage.getItem("session") &&
                     sessionStorage.getItem("session") == "true"
              ) {
                     this.setUserName();
              } else {
                     window.location.href = window.location = "../";
              }
       }
}
