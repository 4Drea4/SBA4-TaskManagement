
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
    console.log(myTasks);
    console.log(task);
}); 

  //helper function renderList create dom elements , append the children, and create the li and what not, then run the function

  function renderList(){
    let ul = document.getElementById("list"); // get the ul div element from the HTML
      ul.innerHTML =""  ;//clear the list //

      myTasks.forEach((item, index) =>{//for each task in the myTask array:
      let li = document.createElement("li") ;//push a new li
      li.dataset.index =index;// inside my renderList store space for new element, assign the drop down to the ul progress status 
      
       li.textContent = `${item.title}  ${item.progress} ${item.category} ${item.deadline}`; //set the li’s text to the values of the variables
      ul.appendChild(li);// append the li div to the ul div
  


    });}

    document.getElementById("list").addEventListener("change", (e) => {
  // only react to our per-task dropdowns
  if (!e.target.matches(".status-select")) return;

  const li = e.target.closest("li");
  const index = Number(li.dataset.index);
  const newStatus = e.target.value;

  myTasks[index].progress = newStatus; // update the data
  renderList();                        // refresh the UI
});
    // adding a removed event listener button
       let erase = document.getElementById("erase");
       erase.addEventListener("click", function() {
        removeLastItem();
      });

        function removeLastItem(){
            if (myTasks.length === 0) return;
            myTasks.pop();
            renderList();
        }

   

    //  playing around with the overdue implementation, if I have time, I will finish

    // const today =  Date.now();//timestamp for time in moment
    // const myDate = deadline.value;
    // const dateConvert =new Date(deadline.value)
    // console.log(dateConvert);
    //  function overdue(task){
    //     if (deadline.value < today ){
    //      console.log("Uh Oh did you mean to change the status of this task?");
    //      console.log(deadline.value);
    
    //     }  };

  
   