
//declarations
let taskTitle = document.getElementById("task-name");//title of task
let progress = document.getElementById("progress"); //progress drop-down
let deadline = document.getElementById("task-due-date");//due-date calendar
let category = document.getElementById("category-options");//category drop-down
let addTask= document.getElementById("submitTask");//button

//creating variable that is an empty variable
let myTasks = []
//The objects for the form task 1. bullet 3 and their values


//Create an onclick for the sumbit button here

addTask.addEventListener("click", (event) => {
    event.preventDefault();//stops the form
    console.log("Testing 1")
    let titleValue =taskTitle.value;
    let progressValue =progress.value;
    let categoryValue = category.value;
    let deadlineValue = deadline.value;

    const task = {
        title: titleValue,
        progress: progressValue,
        category: categoryValue,
        deadline: deadlineValue,
        
    };
    myTasks.push(task)
    //run function here
    renderList();
  //testing that they are getting to the console log
    console.log(titleValue);
    console.log(progressValue);
    console.log(categoryValue);
    console.log(deadlineValue);
}); 

  //helper function renderList create dom elements , append the children, and create the li and what not, then run the function

  function renderList(){
    let ul = document.getElementById("list"); // get the <ul> element from the HTML
      ul.innerHTML =""  ;//clear the list //
      shoppingList.forEach(item => {//for each item in the shopping list array:
      let li = document.createElement("li") ;          //push a new li
       li.textContent = item;//set the <li>’s text to the current item
      ul.appendChild(li);// append the <li> to the <ul>
  
    });}
   


  /* 

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