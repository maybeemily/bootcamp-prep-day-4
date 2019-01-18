// eslint-disable-next-line
function greet() {
    // get the first and last name input by id
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');

    // get values out of inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    console.log(firstName, lastName);

    // make the string of the greeting 

    var helloFullName = 'hello ' + firstName + ' ' + lastName + "!";
    console.log(helloFullName);

    // display the greeting

    // remove prompt

}

//TODO: validate name inputs
//TODO: clear inputs after greet? 