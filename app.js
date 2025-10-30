
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
      const li = document.createElement("li");//push a new li
      li.dataset.index =index;// inside my renderList store space for new element, assign the drop down to the ul progress status 
     
     //the list
      const info = document.createElement("span");
      info.textContent = `${item.title} , ${item.category} , ${item.deadline || ""}`;  
      li.appendChild(info);

      // progress drop downs
      const select = document.createElement(
        "select");
      select.className = "status-select";
      ["not-started" , "in-progress", "finished"].forEach((status)=> {
        const opt = document.createElement("option");
        opt.value = status;
        opt.textContent = status;
        select.appendChild(opt);
      });

      //show the progress
      select.value =item.progress;

       //add li
      li.appendChild(select);
      ul.appendChild(li);// append the li div to the ul div
    });
     // renderCards();
  }
      //function for rendering cards

      function renderCards(){
        const cards = document.getElementById("cards");
        if (!cards) return;
        cards.innerHTML = "";
        myTasks.forEach(task =>{
          const div = document.createElement("div");
          div.className = "card";
          div.textContent = `${task.title} , ${task.category}  ${task.deadline || ""}`;
          cards.appendChild(div);
        });
      }
      document.getElementById("list").addEventListener("change", (e) => {
        // only react to our per-task dropdowns
        if (!e.target.matches(".status-select")) return;
        const li = e.target.closest("li");
        const index = Number(li.dataset.index);
        const newStatus = e.target.value;
        myTasks[index].progress = newStatus; // update the data
        renderList();                        // refresh the list
        
      });

    //   //making tasks go into the cards
    // const cards = document.getElementById("cards");
    // cards.innerHTML="";
    // myTasks.forEach(task =>{
    //   const div= document.createElement("div");
    //   div.className ="card";
    //   div.textContent = `${task.title}  ${task.category}  ${task.deadline}`;
    //   cards.appendChild(div);

    // });
    // });}


    // adding a removed event listener button for last task
       let erase = document.getElementById("erase");
       erase.addEventListener("click", function() {
        removeLastItem();
        
      });

        function removeLastItem(){
            if (myTasks.length === 0) return;
            myTasks.pop();
            renderList();
            // renderCards();
        }
        
    
  
  
       
   // Filter function:  functionality to filter tasks by category or status
        //Psuedocode :
        //create a function for filter on the existing 
        //create a button or search a button will need an event listener

        //filter.addEventListener('submit', (event) => {
         // event.preventDefault();
       //   filterResults();
    //  });


     //    function filterResults(){
    //     const 
   // }
        


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

  
   