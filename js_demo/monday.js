

function addGreeting(){

    let newElt = document.createElement('p'); //creating paragrapgh element no text value
    let textNode = document.createTextNode("Hello there") // this is the "node" that is being put in. 

    newElt.appendChild(textNode)

    document.querySelector("#main").appendChild(newElt);
}

function clearGreetings(){
    document.querySelector("#main").innerHTML = ("");
}

function sayHello(){
    let name = document.querySelector("#nameBox").value; //document = the DOM tree
    let address = document.querySelector("#addressBox").value;
    let email = document.querySelector("#emailBox").value;
    let nameField = document.querySelector("#nameField");
    let addressField = document.querySelector("#addressField");
    let emailField = document.querySelector("#emailField");

    nameField.innerHTML = (`Your name is ${name}`);
    addressField.innerHTML = (`Your address is ${address}`);
    emailField.innerHTML = (`Your email is ${email}`);

}
