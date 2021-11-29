let data;
let movieArray = [];
let errorCount = 0;
accessData();


function accessData() {
        const request = new XMLHttpRequest();
        request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

        request.onload = function() {
                data = JSON.parse(this.response);
                request.status = 201;
                if (request.status == 200){
                        console.log("response ok.")
                       for (let i = 0; i < data.length; i++){
                                let newELT = document.createElement('option'); 
                                let textNode = document.createTextNode(data[i].title);
                                movieArray.push (data[i].title);
                                newELT.appendChild(textNode);
                                document.querySelector("#movieTitle").appendChild(newELT);
                       }

                } else {
                        console.log(`Error Occuried: Status: ${request.status}`);
                        let error = document.querySelector("#error");
                        let desciption = document.createTextNode("Sorry dude, the movies wont load.");
                        error.appendChild(desciption);
                        error.style.color = "red"
                }
        };
        request.send();
}

function displayInfo() {
        document.querySelector("#movieDescription").innerHTML = "";
        document.querySelector("#error").innerHTML = "";
        let movie = document.querySelector("#movieTitle").value;
        for (let i = 0; i < movieArray.length; i++){
                if (data[i].title === movie){
                        let header = document.createElement('h3');
                        let paragrapgh = document.createElement('p');
                        let titleName = document.createTextNode(data[i].title);
                        let desciption = document.createTextNode(data[i].description);
                        header.appendChild(titleName);
                        paragrapgh.appendChild(desciption);
                        document.querySelector("#movieDescription").appendChild(header); 
                        document.querySelector("#movieDescription").appendChild(paragrapgh);
                } else if (movie === "-") {
                        let header = document.createElement('p');
                        errorCount++;
                        if (errorCount === 1) {
                                let desciption = document.createTextNode("Invalid Moive - C`mon you thought you were gonna get me");
                                header.appendChild(desciption);    
                        } else if (errorCount === 2) {
                                let desciption = document.createTextNode("You really trying this again?");
                                header.appendChild(desciption);
                        } else {
                                let desciption = document.createTextNode("Alright, I am removing it.");
                                header.appendChild(desciption);
                                document.querySelector("#movieTitle")[0].remove();
                        }
                        let error = document.querySelector("#error");
                        error.appendChild(header);
                        error.style.color = "red"
                        break;
                }
        }
}


let student = {
         "username": "Jane Smith",
         "age": 20,
         "GPA": 3.34,
         "onProbation": false,
         "schedule": [
                 {
                        "name": "IST 140",
                        "startTime": "10 am"
                 },
                 {
                        "name": "IST 242",
                        "startTime": "11 am"
                 },
                 "No class at this time",
                 false,
         ]
 }