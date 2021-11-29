let car1option = document.createElement('option');
let car1text = document.createTextNode("Honda");
 
car1option.appendChild(car1text);
document.querySelector("#carList").appendChild(car1option);
 
let car2option = document.createElement('option');
let car2text = document.createTextNode("Ford");
 
car2option.appendChild(car2text);
document.querySelector("#carList").appendChild(car2option);
 
function getItemSelected()
{
        let selectedItem = document.querySelector("#carList").value;
        console.log(selectedItem);
}
 
function testForPickles()
{
        let hasPickles = document.querySelector('#pickles').checked;
        console.log(hasPickles)
 
        if (hasPickles)
        {
                console.log("Yup -- pickles.");
        }
        else
        {
                console.log("Sorry - no pickles");
        }
}
 
function addGreeting()
{
        let newElt = document.createElement('p');
        let textNode = document.createTextNode("Hello There");
        newElt.appendChild(textNode);
 
        document.querySelector("#main").appendChild(newElt);
}
 
function clearGreetings()
{
        document.querySelector("#main").innerHTML = "";
}
 
function sayHello()
{
        let name = document.querySelector("#nameBox").value;
        // console.log('Hello ' + name);
        console.log(`Hello there ${name} -- have a "great" day!`);
 
        let outputField = document.querySelector("#outputField");
        // can add anyhting in the innerHTML
        outputField.innerHTML = `Hello there ${name} -- have a "great" day!`;
 
}
 
let names = ['Fred', 'Jane', 'Pete'];
console.log(names[0]);
 
for (let i = 0; i < names.length; i++);
{
        console.log(names[i]);
}
 
names.forEach(name =>
        {
            console.log(`Hi there, ${name}!`);
        }
)