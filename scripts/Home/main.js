import SaveTask from "./saveTask.js";
import SelectTasks from "./selectTasks.js";

class Main {
       constructor() {}

       saveTask() {
              const form = document.getElementById("formTask");
              form.addEventListener("submit", function (event) {
                     event.preventDefault();
                     const name = document.getElementById("name").value;
                     const content = document.getElementById("content").value;
                     new SaveTask().save(name, content);
                     new SelectTasks().selectTasks();
              });
       }

       selectTasks() {
              let body = document.querySelector("body");
              body.onload = new SelectTasks().selectTasks();
       }

       delete() {
              console.log("element");
       }
}

//constructor
const main = new Main();
main.saveTask();
main.selectTasks();
