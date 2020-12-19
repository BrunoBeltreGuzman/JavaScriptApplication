export default class UpdateUser {
       updateData(name, email, password) {
              if (name != "" && email != "" && password != "") {
                     try {
                            localStorage.setItem("name", name);
                            localStorage.setItem("email", email);
                            localStorage.setItem("password", password);

                            let message = document.getElementById("message");
                            message.style.display = "block";
                            message.classList.add("alert");
                            message.classList.add("alert-success");
                            message.classList.add("alert-dismissible");
                            message.classList.add("text-center");
                            message.innerHTML = "Success";
                            setTimeout(() => {
                                   message.style.display = "none";
                                   message.classList.remove("alert-danger");
                                   message.classList.add("alert-success");
                                   window.location.reload();
                            }, 2000);
                     } catch (error) {
                            console.log("Error: " + error);
                     }
              } else {
                     let message = document.getElementById("message");
                     message.style.display = "block";
                     message.classList.add("alert");
                     message.classList.add("alert-danger");
                     message.classList.add("alert-dismissible");
                     message.classList.add("text-center");
                     message.innerHTML = "Fill in all the fields";
                     setTimeout(() => {
                            message.style.display = "none";
                            message.classList.remove("alert-danger");
                            message.classList.add("alert-success");
                     }, 3000);
              }
       }
}
