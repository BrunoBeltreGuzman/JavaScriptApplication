export default class InfUser {
       constructor() {}

       setDataInputs() {
              try {
                     let name = localStorage.getItem("name");
                     let password = localStorage.getItem("password");
                     let email = localStorage.getItem("email");
                     document.getElementById("name").value = name;
                     document.getElementById("email").value = email;
              } catch (error) {
                     console.log(error);
              }
       }
}
