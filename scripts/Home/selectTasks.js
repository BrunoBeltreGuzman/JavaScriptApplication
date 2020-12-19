export default class SelectTasks {
       constructor() {}

       selectTasks() {
              if (document.getElementById("message")) {
                     document.getElementById("message").remove();
              }
              let tasks = localStorage.getItem("tasks");
              tasks = JSON.parse(tasks);
              if (tasks != null) {
                     if (!document.getElementById("tableTasks")) {
                            const list = document.getElementById(
                                   "containerTable"
                            );
                            const element = document.createElement("div");
                            element.innerHTML = ` <table id="tableTasks" class="table table-condensed table-hover">
                                   <thead>
                                          <tr>
                                                 <th>#</th>
                                                 <th>Name</th>
                                                 <th>Content</th>
                                                 <th></th>
                                          </tr>
                                   </thead>
                                   <tbody id="tableBody">
                                          <tr>
                                          </tr>
                                   </tbody>
                            </table> `;
                            list.appendChild(element);
                     }

                     const tableBody = document.getElementById("tableBody");
                     tableBody.innerHTML = "";
                     let j = 0;
                     for (let i in tasks) {
                            j++;
                            tableBody.innerHTML +=
                                   "<tr>" +
                                   "<td>" +
                                   j +
                                   "</td>" +
                                   "<td>" +
                                   tasks[i].name +
                                   "</td>" +
                                   "<td>" +
                                   tasks[i].content +
                                   "</td>" +
                                   "<td>" +
                                   `<div class="btn-group float-right">
                                                 <div class="px-3">
                                                        <button class="btn btn-primary"  onclick="this.delete()">Done</button>
                                                 </div>
                                          </div>` +
                                   "</td>";
                     }
              } else {
                     const containerTable = document.getElementById(
                            "containerTable"
                     );
                     const element = document.createElement("div");
                     element.innerHTML = `<div id="message" class="text-center">
              <h1 class="display-4">No registered tasks</h1>
       </div>`;
                     containerTable.appendChild(element);
              }
       }
}
