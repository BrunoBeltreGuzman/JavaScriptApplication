export default class OutUser {
       constructor() {}
       outUser() {
              try {
                     sessionStorage.setItem("session", "false");
              } catch (error) {
                     console.log("Error: " + error);
              }
       }
}
