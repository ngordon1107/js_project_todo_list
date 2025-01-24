const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

const errors = [];

function completion_status(status){
  try{
  if(status.toLowerCase() === "true" || status === true){
    return true;
  }
  else if(status.toLowerCase() === "false" || status === false){
    return false;
  }
  }
  catch(error){
    return errors.push("Invalid completion status. Please input a true or false status.");
  }
}
 
function addTodo(name, completed, todo_description = ""){
  const todo_template = {
    title: name.toString(),
    description: todo_description.toString(),
    complete: completion_status(completed)
  }
  todos.push(todo_template)
}

function removeTodo(remove_item_index){
  todos.splice(remove_item_index, 1)
}

function editTodo(item_index, category_being_updated, updated_item){
  //Verifying string input for category
  try{
    category_being_updated = category_being_updated.toLowerCase()
  }
  catch(error){
    return errors.push("Failed to update item. Invalid/missing category.");
  }

  if(category_being_updated === "title"){
    todos[item_index].title = updated_item
  }
  else if(category_being_updated === "description"){
    todos[item_index].description = updated_item
  }
  else if(category_being_updated === "complete"){
    todos[item_index].complete = updated_item
  }
  else{ 
    return errors.push("Failed to update item. Invalid/missing category."); 
  }
}


function markTodoComplete(item_index){
  todos[item_index].complete = true 
}


function displayTodoLength(){
  return todos.length-1;
}

function app(){
  console.log('Welcome to the Todo Application');
  // You will need to call your methods below this comment to edit the todos array
  //Adding initial values:
  addTodo("Clean the living room", "Need to vacuum the all furniture with the pet dander attachment");
  addTodo("Mop b4throm floors", null ,"Bathroom is getting dirty");
  addTodo("Call Clark Kent");
  addTodo("Help mannie with homework", completed = false, "Science homework");
  addTodo("Do laundry", "tRue", "NA");
  //Editing second index:
  editTodo(2, "title" ,"Mop bathroom floors")
  //Deleting third index: Call Clark Kent'
  removeTodo(3)
  //Marking fourth item (now third) as complete'
  markTodoComplete(3)
  // You will need to call your methods above this comment to edit the todos array
  
  console.log('Here is a list of your todos:');
  if(errors.length > 0){
    console.log("\nWarning:")
    for(const i of errors){
      console.log("**", i)
    }
  }
  // Print the length of the todos array below this comment
  console.log(`\nYou have ${displayTodoLength()} todos`)
  // Print the length of the todos array above this comment
  
  // Iterate over the todos array and console.log each todo below this comment
  for (let item = 1; item < todos.length; item++){
    //Displaying Todo item number
    console.log(`\nTodo ${item}`)
    
    //Destructuring each key into a variable
    const {title, description, complete} = todos[item]

    //Printing title and description
    console.log(`The title of the todo: ${title} 
The description of the todo: ${description}`);
    
    //Displaying completion status:
    if(complete === true){
      console.log("This todo is complete")
    }
    else{
      console.log("This todo is not complete")
    }
  }
}
app();