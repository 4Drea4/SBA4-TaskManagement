
//declarations
let taskTitle =document.getElementById("task-name");//title of task
let progress = document.getElementById("progress"); //progress drop-down
let addTask= document.getElementById("submitTask");//button
let deadline = document.getElementById("task-due-date");
let category = document.getElementById("category-options");
const myTask = document.body;

//The array of objects for the form
const task = [
    {title: "", 
    progress:"",
    category:"", 
    deadline:""},    

    
];

addTask.addEventListener("click", function )() {
    let taskTitle = taskTitle.value;
   
    if (taskTitle === "") {
      alert("Please enter a task!");
      return;
    }
    tasks.push(task) //pushing new form submissions of objects to the array of objects

    //let progress = document.createElement("li");
    //listItem.innerText = taskText;
   
    //taskList.appendChild(listItem);
   // taskInput.value = ""; // Clear the input field
  //});
//progress.value //I know I have to capture the value of inputs just unsure of if this should go into a sep. function.

//function to create a new task item.
function createTask() {
    let task = document.getElementById('task-name').value;
    if (!(typeof task === 'undefined') && task!=null && take.trim()!='') {  
        createTask.push(task);
    }
    console.log(createTask);
    document.getElementById('task-name').value = '';
}
//Create an onclick for the sumbit button here
//document.submitButton("button");



//Create and append select list


//selectTask.id ;
//task.appendChild(createTask);

//Create and append the options
//for (let i = 0; i < array.length; i++) {
   // var option = document.createElement("select");
   // option.value = array[i];
   // option.text = array[i];
  //  selectList.appendChild(option)

