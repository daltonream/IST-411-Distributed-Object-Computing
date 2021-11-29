document.querySelector("#updateReservation").hidden = true;
document.querySelector("#getAll").hidden = true;
document.querySelector("#deleteReservation").hidden = true;
document.querySelector("#createAccount").hidden = false;

function createReservation(){
    document.querySelector("#getAll").hidden = true;
    document.querySelector("#updateReservation").hidden = true;
    document.querySelector("#deleteReservation").hidden = true;
    document.querySelector("#createAccount").hidden = false;
}

function updateReservationPage(){
    document.querySelector("#createAccount").hidden = true;
    document.querySelector("#getAll").hidden = true;
    document.querySelector("#updateReservation").hidden = false;
    document.querySelector("#innerUpdate").hidden = true;
    document.querySelector("#lookUp").hidden = false;
    document.querySelector("#nameLabel1").hidden = false;
    document.querySelector("#nameLookUp").hidden = false;
    document.querySelector("#nameLookUp").value = "";
    document.querySelector("#deleteReservation").hidden = true;
    document.querySelector("#nameUpdate").value = "";
    document.querySelector("#startDateUpdate").value = "";
    document.querySelector("#startTimeUpdate").value = "";
    document.querySelector("#hourUpdate").value = "";
    document.querySelector("#hourDelete").value = "";
    document.querySelector("#nameLabel1").innerHTML = "Name:";
    document.querySelector("#errorBox1").innerHTML = "";
}

function deleteReservation(){
    document.querySelector("#nameDelete").readOnly = true;
    document.querySelector("#startDateDelete").readOnly = true;
    document.querySelector("#startTimeDelete").readOnly = true;
    document.querySelector("#hourDelete").readOnly = true;
    document.querySelector("#getAll").hidden = true;
    document.querySelector("#updateReservation").hidden = true;
    document.querySelector("#createAccount").hidden = true;
    document.querySelector("#innerUpdate").hidden = true;
    document.querySelector("#innerDelete").hidden = true;
    document.querySelector("#deleteReservation").hidden = false;
    document.querySelector("#nameLookUpDelete").hidden = false;
    document.querySelector("#lookUpDelete").hidden = false;
    document.querySelector("#nameDeleteLabel").hidden = false;
    document.querySelector("#nameDeleteLabel").innerHTML = "Name:"
    document.querySelector("#nameLookUpDelete").value = "";
    document.querySelector("#nameDelete").value = "";
    document.querySelector("#startDateDelete").value = "";
    document.querySelector("#startTimeDelete").value = "";
    document.querySelector("#hourDelete").value = "";
    document.querySelector("#errorBox2").innerHTML = "";
}
function makeReservation() {
    let name = document.querySelector("#name").value
    let date = document.querySelector("#startDate").value.replaceAll('/', '.')
    let time = document.querySelector("#startTime").value
    let hour = document.querySelector("#hour").value
     document.querySelector("#name").value = "";
     document.querySelector("#startDate").value = "";
     document.querySelector("#startTime").value = "";
     document.querySelector("#hour").value = "";

    const request = new XMLHttpRequest();
    request.open("POST", `http://127.0.0.1:3000/getName/${name}/startDate/${date}/startTime/${time}/hours/${hour}`, true);
    request.onload = function () {
        if (request.status == 200 && this.response !== "Duplicate") {
          document.querySelector("#confirmation").innerHTML = "Your reservation has been saved.";
          document.querySelector("#confirmation").style.color = "green"
         } else {
            document.querySelector("#confirmation").innerHTML = "Error: Could not save reservation";
            document.querySelector("#confirmation").style.color = "red";
         }
    }
     request.send();
}
function getAll() {
    document.querySelector("#createAccount").hidden = true;
    document.querySelector("#getAll").hidden = false;
    document.querySelector("#updateReservation").hidden = true;
    document.querySelector("#innerDelete").hidden = true;
    document.querySelector("#nameLookUpDelete").hidden = true;
    document.querySelector("#nameDeleteLabel").hidden = true;
    document.querySelector("#lookUpDelete").hidden = true;
    document.querySelector("#table").innerHTML=""
    document.querySelector("#tableLookUp").value = "";
    document.querySelector("#errorBox").innerHTML = "";
    const request = new XMLHttpRequest();
    request.open("GET", "http://127.0.0.1:3000/", true);
    request.onload = function () {
        if (request.status == 200) {
         let header1 = document.createElement('th');
         let header2 = document.createElement('th');
         let header3 = document.createElement('th');
         let header4 = document.createElement('th');
         let rocketNameHeader = document.createTextNode("Name");
         let rocketReasonHeader = document.createTextNode("Date");
         let beerNameHeader = document.createTextNode("Time");
         let beerLocationHeader = document.createTextNode("Hours");
         document.querySelector("#table").appendChild(header1);
         document.querySelector("#table").appendChild(header2);
         document.querySelector("#table").appendChild(header3);
         document.querySelector("#table").appendChild(header4);
         let jsonObject = "";
         data = (this.response);
         data = data.split('\n')
         for(let i = 0; i < data.length - 1; i++){
            jsonObject = JSON.parse(data[i])       
            let row = document.createElement('tr');   
            let slot1 = document.createElement('td');
            let slot2 = document.createElement('td');
            let slot3 = document.createElement('td');
            let slot4 = document.createElement('td');
            let rocketName = document.createTextNode(jsonObject.name) 
            let rocketDetails = document.createTextNode(jsonObject.startDate.replaceAll('.', '/'));
            let beerName = document.createTextNode(jsonObject.startTime) 
            let beerCity = document.createTextNode(jsonObject.hours) 
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
         }
        } else {
            document.querySelector("#errorBox").innerHTML = "Could not load reservations";
        }
    }
    request.send();
}

function tablePersonLookUp() {
    document.querySelector("#createAccount").hidden = true;
    document.querySelector("#getAll").hidden = false;
    document.querySelector("#updateReservation").hidden = true;
    document.querySelector("#innerDelete").hidden = true;
    document.querySelector("#nameLookUpDelete").hidden = true;
    document.querySelector("#nameDeleteLabel").hidden = true;
    document.querySelector("#lookUpDelete").hidden = true;
    document.querySelector("#table").innerHTML=""
    let name = document.querySelector("#tableLookUp").value
    const request = new XMLHttpRequest();
    request.open("GET", `http://127.0.0.1:3000/getName/${name}`, true);
    request.onload = function () {
        let header1 = document.createElement('th');
        let header2 = document.createElement('th');
        let header3 = document.createElement('th');
        let header4 = document.createElement('th');
        let rocketNameHeader = document.createTextNode("Name");
        let rocketReasonHeader = document.createTextNode("Date");
        let beerNameHeader = document.createTextNode("Time");
        let beerLocationHeader = document.createTextNode("Hours");
        document.querySelector("#table").appendChild(header1);
        document.querySelector("#table").appendChild(header2);
        document.querySelector("#table").appendChild(header3);
        document.querySelector("#table").appendChild(header4);
        if (request.status == 200) {
            document.querySelector("#errorBox").innerHTML = "";
            let jsonObject = JSON.parse(this.response);
            let row = document.createElement('tr');   
            let slot1 = document.createElement('td');
            let slot2 = document.createElement('td');
            let slot3 = document.createElement('td');
            let slot4 = document.createElement('td');
            let rocketName = document.createTextNode(jsonObject.name) 
            let rocketDetails = document.createTextNode(jsonObject.startDate.replaceAll('.', '/'));
            let beerName = document.createTextNode(jsonObject.startTime) 
            let beerCity = document.createTextNode(jsonObject.hours) 
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
         } else{
            document.querySelector("#errorBox").innerHTML = "Error: Could not find name";
            document.querySelector("#errorBox").style.color = "red"
         }
    }
    request.send();
}

function lookUp(){
    let name = document.querySelector("#nameLookUp").value
    const request = new XMLHttpRequest();
    request.open("GET", `http://127.0.0.1:3000/getName/${name}`, true);
    request.onload = function () {
        if (request.status == 200) {
            data = (this.response);
            document.querySelector("#createAccount").hidden = true;
            document.querySelector("#getAll").hidden = true;
            document.querySelector("#nameLookUp").hidden = true;
            document.querySelector("#innerDelete").hidden = false;
            document.querySelector("#nameDeleteLabel").hidden = true;
            document.querySelector("#innerUpdate").hidden = false;
            document.querySelector("#updateConfirmation").innerHTML = "";
            document.querySelector("#errorBox1").innerHTML = "";
            document.querySelector("#innerUpdate").hidden = false;
            document.querySelector("#lookUp").hidden = true;
            document.querySelector("#nameLookUp").hidden = true;
            document.querySelector("#nameLabel1").innerHTML = `<br>Update to ${name}'s reservation`;
            let jsonObject = JSON.parse(data);
            document.querySelector("#nameUpdate").value = jsonObject.name;
            document.querySelector("#nameUpdate").readOnly = true;
            document.querySelector("#startDateUpdate").value = jsonObject.startDate.replaceAll('.', '/');
            document.querySelector("#startTimeUpdate").value = jsonObject.startTime;
            document.querySelector("#hourUpdate").value = jsonObject.hours;
        } else {
            document.querySelector("#errorBox1").innerHTML = "Error: Could not find name";
            document.querySelector("#errorBox1").style.color = "red"
        }
    }
    request.send();
}

function updateReservation() {
    let name = document.querySelector("#nameUpdate").value
    let date = document.querySelector("#startDateUpdate").value.replaceAll('/', '.')
    let time = document.querySelector("#startTimeUpdate").value
    let hour = document.querySelector("#hourUpdate").value
    document.querySelector("#name").value = "";
    document.querySelector("#startDate").value = "";
    document.querySelector("#startTime").value = "";
    document.querySelector("#hour").value = "";
    const request = new XMLHttpRequest();
    request.open("PATCH", `http://127.0.0.1:3000/getName/${name}/startDate/${date}/startTime/${time}/hours/${hour}`, true);
    request.onload = function () {
        if (request.status == 200) {
            document.querySelector("#errorBox").innerHTML = "";
            document.querySelector("#updateConfirmation").innerHTML = "Update Successful";
            document.querySelector("#updateConfirmation").style.color = "green";
            document.querySelector("#nameUpdate").value = ""
            document.querySelector("#startDateUpdate").value = "";
            document.querySelector("#startTimeUpdate").value = "";
            document.querySelector("#hourUpdate").value = "";
         } else {
            document.querySelector("#updateConfirmation").innerHTML = "Error: Could not update reservation";
            document.querySelector("#updateConfirmation").style.color = "red";
         }
    }
     request.send();
}

function lookUpDelete(){
    let name = document.querySelector("#nameLookUpDelete").value
    const request = new XMLHttpRequest();
    request.open("GET", `http://127.0.0.1:3000/getName/${name}`, true);
    request.onload = function () {
        if (request.status == 200) {
        document.querySelector("#createAccount").hidden = true;
        document.querySelector("#getAll").hidden = true;
        document.querySelector("#nameLookUp").hidden = true;
        document.querySelector("#innerDelete").hidden = false;
        document.querySelector("#nameDeleteLabel").hidden = false;
        document.querySelector("#errorBox2").innerHTML = "";
        data = (this.response);
        document.querySelector("#innerUpdate").hidden = false;
        document.querySelector("#lookUp").hidden = true;
        document.querySelector("#nameLabel").hidden = true;
        document.querySelector("#nameLookUpDelete").hidden = true;
        document.querySelector("#lookUpDelete").hidden = true;
        document.querySelector("#nameDeleteLabel").innerHTML = `<br>Delete ${name}'s reservation?`;
        let jsonObject = JSON.parse(data);
        document.querySelector("#nameDelete").value = jsonObject.name;
        document.querySelector("#nameDelete").readOnly = true;
        document.querySelector("#startDateDelete").value = jsonObject.startDate.replaceAll('.', '/');
        document.querySelector("#startDateDelete").readOnly = true;
        document.querySelector("#startTimeDelete").value = jsonObject.startTime;
        document.querySelector("#startTimeDelete").readOnly = true;
        document.querySelector("#hourDelete").value = jsonObject.hours;
        document.querySelector("#hourDelete").readOnly = true;
        } else {
            document.querySelector("#errorBox2").innerHTML = "Error: Could not find name";
            document.querySelector("#errorBox2").style.color = "red"
         }
    }
    request.send();
}

function deleteReservationButton() {
    let name = document.querySelector("#nameDelete").value
    document.querySelector("#name").value = "";
    document.querySelector("#startDate").value = "";
    document.querySelector("#startTime").value = "";
    document.querySelector("#hour").value = "";
    
    const request = new XMLHttpRequest();
    request.open("DELETE", `http://127.0.0.1:3000/getName/${name}`, true);
    request.onload = function () {
        if (request.status == 200) {
            document.querySelector("#deleteConfirmation").innerHTML = "Delete Successful";
            document.querySelector("#deleteConfirmation").style.color = "green";
            document.querySelector("#nameDelete").value = ""
            document.querySelector("#startDateDelete").value = "";
            document.querySelector("#startTimeDelete").value = "";
            document.querySelector("#hourDelete").value = "";
         } else {
            document.querySelector("#deleteConfirmation").innerHTML = "Error: Could not delete reservation";
            document.querySelector("#deleteConfirmation").style.color = "red";
         }
    }
     request.send();
}