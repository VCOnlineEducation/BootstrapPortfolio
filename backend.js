//function addTodoItem(students){//defining the job of the function

//alert("students");
//}

//addTodoItem("the answer for everything is number,42!");//calling the function to work


//ASI: Automatic Semicolon Insertion
var submitButton = document.getElementById("todolistTrigger");

var todoInputField = document.getElementById("todolistInput");

var todoListUl = document.getElementById("todoUL");

//!I must start, when button is clicked
function addTodolistItem() {
    //alert("Hello, World");
    //console.log("Hello World, I am text in your browsers console.");
    var inputValue = todoInputField.value;

    if (inputValue === "") {
        alert("Please enter a todo item.");
        return;
    }

    var defaultListItem = document.createElement("li");

    defaultListItem.textContent = inputValue;

    //var inputValueTextNode = document.createTextNode(inputValue);

    //var completeListItem = defaultListItem.appendChild(inputValueTextNode);

    todoListUl.classList.add("list-group-item", "list-group-item-primary");

    todoListUl.appendChild(defaultListItem);

    todoInputField.value = "";
    //Catching the input field, accessing the ability to read/modify the value aka. the data inside, and then choosing to reset the data container, meaning emptying it
}
//// event listener to trigger the function that will add new todo to the list
submitButton.addEventListener("click", function () {
    addTodolistItem();
});

//Working with Json OBjects
list={
    "name": "Vernell",
    "age":"21",
    "city": "San Diego",
    "address": {
        "address1": "St. Louis",
        "address2": "Munich",
    },
"skills":["HTML, CSS, JS, Git,GitHub"]
}

list.currency="€";//this is how we add keys into a Json object
delete list.address.address2;//this is how we destroy data keys in a json object

console.log(JSON.stringify(list,null,2));//Make the tested data object more human readable
console.log(list.name);//demonstrating accssing one key of the table
console.log(list.skillsp[0]);//accessing one child, of the array skills after calling the table "list"
console.log(list.address.address1);//accessing the key address1, after calling the key address, through the table "list"

console.log(JSON.stringify(list));
console.log(list);

window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var contentContainer = document.querySelector(".content-container");
    var navbarHeight = navbar.offsetHeight;

    if (window.pageYOffset > navbarHeight) {
        contentContainer.style.paddingTop = navbarHeight + "px";
        navbar.classList.add("fixed-top");
    } else {
        contentContainer.style.paddingTop = "0";
        navbar.classList.remove("fixed-top");
    }
});