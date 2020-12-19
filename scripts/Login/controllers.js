export default class Controllers {
       constructor() {}

       static success(element) {
              if (element) {
                     const message = element;
                     message.style.display = "block";
                     message.classList.add("alert");
                     message.classList.add("alert-success");
                     message.classList.add("alert-dismissible");
                     message.classList.add("text-center");
                     message.innerHTML = "Success";
              } else {
                     console.log("Element is null");
              }
       }

       static danger(element) {
              if (element) {
                     message.style.display = "block";
                     message.classList.add("alert");
                     message.classList.add("alert-danger");
                     message.classList.add("alert-dismissible");
                     message.classList.add("text-center");
                     message.innerHTML = "Incorrect data";
              } else {
                     console.log("Element is null");
              }
       }
}
