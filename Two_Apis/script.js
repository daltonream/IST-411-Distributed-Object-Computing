let elonData;
let beerData;
accessData();
let header1 = document.createElement('th');
let header2 = document.createElement('th');
let header3 = document.createElement('th');
let header4 = document.createElement('th');
let rocketNameHeader = document.createTextNode("Rocket Name");
let rocketReasonHeader = document.createTextNode("Rocket Details");
let beerNameHeader = document.createTextNode("Brewery Name");
let beerLocationHeader = document.createTextNode("Brewery Location");



function accessData() {
        document.querySelector("#Rocket").disabled = true;
        document.querySelector("#Brewery").disabled = true;
        document.querySelector("#Rocket").checked = false;
        document.querySelector("#Brewery").checked = false;
        const elonRequest = new XMLHttpRequest();
        elonRequest.open("GET", "https://api.spacexdata.com/v4/launches", true); 
        elonRequest.onload = function() {
                elonData = JSON.parse(this.response);
                if (elonRequest.status == 200){
                        console.log("response ok.")
                        document.querySelector("#Rocket").disabled = false;
                        document.querySelector("#Brewery").disabled = false;

                } else {
                        console.log(`Error Occuried: Status: ${request.status}`);
                } 
        }
        elonRequest.send();

       const beerRequest = new XMLHttpRequest();
        beerRequest.open("GET", "https://api.openbrewerydb.org/breweries", true);
        beerRequest.onload = function() {
                beerData = JSON.parse(this.response);
                if (beerRequest.status == 200){
                        console.log("response ok.")
                        document.querySelector("#Rocket").disabled = false;
                        document.querySelector("#Brewery").disabled = false;
                } else {
                        console.log(`Error Occuried: Status: ${request.status}`);
                }
       };
       beerRequest.send();   
}

function displayInfo(){
        document.querySelector("#table").innerHTML = "";

        if (document.querySelector("#Rocket").checked){
                document.querySelector("#table").appendChild(header1);
                document.querySelector("#table").appendChild(header2);
                document.querySelector("#table").appendChild(header3);
                document.querySelector("#table").appendChild(header4);
                for (let i = 0; i < elonData.length; i++){
                        for (let k = 0; k < beerData.length; k++){   
                                if (elonData[i].name.charAt(0) === beerData[k].name.charAt(0)){
                                        let row = document.createElement('tr');   
                                        let slot1 = document.createElement('td');
                                        let slot2 = document.createElement('td');
                                        let slot3 = document.createElement('td');
                                        let slot4 = document.createElement('td');
                                        let rocketName = document.createTextNode(elonData[i].name) 
                                        let rocketDetails = document.createTextNode("N/A");
                                        if (elonData[i].details){
                                                rocketDetails = document.createTextNode(elonData[i].details) 
                                        }
                                        let beerName = document.createTextNode(beerData[k].name) 
                                        let beerCity = document.createTextNode(`${beerData[k].city}, ${beerData[k].state}`) 
                                        slot1.appendChild(rocketName)
                                        slot2.appendChild(rocketDetails)
                                        slot2.width = '600px';
                                        slot3.appendChild(beerName)
                                        slot4.appendChild(beerCity)
                                        header1.appendChild(rocketNameHeader)
                                        header2.appendChild(rocketReasonHeader)
                                        header3.appendChild(beerNameHeader)
                                        header4.appendChild(beerLocationHeader)
                                        document.querySelector("#table").appendChild(row); 
                                        document.querySelector("#table").appendChild(slot1); 
                                        document.querySelector("#table").appendChild(slot2); 
                                        document.querySelector("#table").appendChild(slot3); 
                                        document.querySelector("#table").appendChild(slot4);  
                                k++;
                                break;
                                }
                        }   
                }
        } else {
                document.querySelector("#table").appendChild(header1);
                document.querySelector("#table").appendChild(header2);
                document.querySelector("#table").appendChild(header3);
                document.querySelector("#table").appendChild(header4);
                for (let j = 0; j < beerData.length; j++){
                        for (let k = 0; k < elonData.length; k++){   
                                if (beerData[j].name.charAt(0) === elonData[k].name.charAt(0)){
                                        let row = document.createElement('tr');   
                                        let slot1 = document.createElement('td');
                                        let slot2 = document.createElement('td');
                                        let slot3 = document.createElement('td');
                                        let slot4 = document.createElement('td');
                                        let rocketName = document.createTextNode(elonData[k].name);
                                        let rocketDetails = document.createTextNode("N/A") 
                                        if (elonData[k].details){
                                                rocketDetails = document.createTextNode(elonData[k].details) 
                                        }
                                        let beerName = document.createTextNode(beerData[j].name);
                                        let beerCity = document.createTextNode(`${beerData[j].city}, ${beerData[j].state}`);
                                        slot1.appendChild(beerName);
                                        slot2.appendChild(beerCity);
                                        slot3.appendChild(rocketName);
                                        slot4.appendChild(rocketDetails);
                                        slot4.width = '600px';
                                        header1.appendChild(beerNameHeader);
                                        header2.appendChild(beerLocationHeader);
                                        header3.appendChild(rocketNameHeader);
                                        header4.appendChild(rocketReasonHeader);
                                        document.querySelector("#table").appendChild(row); 
                                        document.querySelector("#table").appendChild(slot1); 
                                        document.querySelector("#table").appendChild(slot2); 
                                        document.querySelector("#table").appendChild(slot3); 
                                        document.querySelector("#table").appendChild(slot4); 
                                        k++;
                                        break;
                                        
                                }  
                        }
                }
        }
}
function getText(){
        document.querySelector("#table").innerHTML = "";
        document.querySelector("#Rocket").checked = false;
        document.querySelector("#Brewery").checked = false;
        for (let i = 0; i < beerData.length; i++){
                if (document.querySelector("#search").value === beerData[i].name){
                        document.querySelector("#table").appendChild(header1);
                        document.querySelector("#table").appendChild(header2);
                        console.log(document.querySelector("#table"))
                        let row = document.createElement('tr');   
                        let slot1 = document.createElement('td');
                        let slot2 = document.createElement('td');
                        let beerName = document.createTextNode(beerData[i].name);
                        let beerCity = document.createTextNode(`${beerData[i].city}, ${beerData[i].state}`);
                        slot1.appendChild(beerName);
                        slot2.appendChild(beerCity);
                        header1.appendChild(beerNameHeader);
                        header2.appendChild(beerLocationHeader);
                        document.querySelector("#table").appendChild(row); 
                        document.querySelector("#table").appendChild(slot1); 
                        document.querySelector("#table").appendChild(slot2); 
                }
        }
}

function changeBackground(){
        if (document.querySelector("#checkbox").checked){
                document.querySelector("#background").style.backgroundColor = "white";
                document.querySelector("#paragraph").style.color = "black";

        } else {
                document.querySelector("#background").style.backgroundColor = "rosybrown";
                document.querySelector("#paragraph").style.color = "whitesmoke";
        }
}

