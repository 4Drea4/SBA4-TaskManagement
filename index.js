
//declarations
let taskTitle =document.getElementById("task-name");//title of task
let progress = document.getElementById("progress"); //progress drop-down
let deadline = document.getElementById("task-due-date");//due-date calendar
let category = document.getElementById("category-options");//category drop-down
let addTask= document.getElementById("submitTask");//button

//const myTask = document.body;

//The array of objects for the form
const task = {
    title: taskTitle.value,
    progress: progress.value,
    category: category.value,
    deadline:deadline.value,
    
}

//Create an onclick for the sumbit button here

addTask.addEventListener("click", (event) => {
    event.preventDefault();//stops the form
    console.log("Testing 1")});// for testing to make sure the event listener to the button works
    //let taskTitle = taskTitle.value;
   
   /*  if (taskTitle === "") {
      alert("Please enter a task!");
      return;
    }
    tasks.push(task) //pushing new form submissions of objects to the array of objects

   

//function to create a new task item.
function createTask() {
    let task = document.getElementById('task-name').value;
    if (!(typeof task === 'undefined') && task!=null && take.trim()!='') {  
        createTask.push(task);
    }
    console.log(createTask);
    document.getElementById('task-name').value = '';
}



for (let i=0; i<4; i++ ) {
    const newList = document.createElement('li');
    newList.innerText
}

 */