import OutUser from "./outUser.js";
import InfUser from "./infUser.js";
import UpdateUser from "./updateUer.js";
import DeleteUser from "./deleteUser.js";

class Main {
       constructor() {}

       out() {
              let btnOut = document.getElementById("btnOut");
              btnOut.addEventListener("click", function () {
                     new OutUser().outUser();
                     setTimeout(() => {
                            window.location = "./../";
                     }, 1000);
              });
       }

       setInfUser() {
              const body = document.querySelector("body");
              body.onload = new InfUser().setDataInputs();
       }

       updateUser() {
              const btnUpdate = document.getElementById("btnUpdate");
              btnUpdate.addEventListener("click", function () {
                     const name = document.getElementById("name").value;
                     const email = document.getElementById("email").value;
                     const password = document.getElementById("password").value;
                     new UpdateUser().updateData(name, email, password);
              });
       }

       deleteUser() {
              const btnDelete = document.getElementById("btnDelete");
              btnDelete.addEventListener("click", function () {
                     const boo = confirm(
                            "Do you want to delete your account? all data is deleted."
                     );
                     if (boo) {
                            new DeleteUser().deleteData();
                            setTimeout(() => {
                                   window.location = "./../";
                            }, 1000);
                     } else {
                            //no
                     }
              });
       }
}

//constructor
const main = new Main();
main.out();
main.setInfUser();
main.updateUser();
main.deleteUser();
