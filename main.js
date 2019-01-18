// eslint-disable-next-line
function greet() {
    // get the first and last name input by id
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');

    // get values out of inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;


    // make the string of the greeting 

    var helloFullName = 'hello hello hello ' + firstName + ' ' + lastName + "!";
   
  

    // display the greeting

    var greeting = document.getElementById('greeting');
    
    // remove prompt
    
    greeting.textContent = helloFullName;



}

//TODO: validate name inputs
//TODO: clear inputs after greet? 