import SessionLoad from "./sessionLoad.js";
class Main {
       constructor() {}

       loadSession() {
              let body = document.querySelector("body");
              body.onload = new SessionLoad().load();
       }
}

new Main().loadSession();
