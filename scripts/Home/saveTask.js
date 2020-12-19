export default class SaveTask {
       constructor() {}
       save(name, content) {
              if (name != "" && content != "") {
                     try {
                            let tasks;
                            let tasksLocal = localStorage.getItem("tasks");
                            if (tasksLocal != null) {
                                   const newTask = {
                                          name: name,
                                          content: content,
                                   };
                                   tasksLocal = JSON.parse(tasksLocal);
                                   tasksLocal = tasksLocal.concat(newTask);
                                   tasks = tasksLocal;
                            } else {
                                   const newTask = {
                                          name: name,
                                          content: content,
                                   };
                                   tasks = [newTask];
                            }
                            localStorage.setItem(
                                   "tasks",
                                   JSON.stringify(tasks)
                            );
                     } catch (error) {
                            console.log(error);
                     }
              } else {
                     console.log("Error: Inputs Null");
              }
       }
}
