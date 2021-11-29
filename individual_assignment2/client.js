function post() {
    const request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:3000/logdate", true);

    request.onload = function () {
        data = (this.response);

        if (request.status == 200) {
            document.querySelector("#errorBox").innerHTML = ""
            console.log(data)
           
         } else {
            document.querySelector("#errorBox").innerHTML = data;
         }
    }

    request.send();
}
function get() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://127.0.0.1:3000/date", true);

    request.onload = function () {
        data = (this.response);
        data = data.toString().split('\n')

        if (request.status == 200) {
            document.querySelector("#textBox").innerHTML = "";
            for (let i = 0; i < data.length; i ++){
                document.querySelector("#textBox").innerHTML += data[i] + '<br>';
                document.querySelector("#errorBox").innerHTML = "";
            }
        } else{
            document.querySelector("#errorBox").innerHTML = data;
        }
    }

    request.send();
}
function invalid() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://127.0.0.1:3000/test", true);

    request.onload = function () {
        console.log(request)
        if (request.status !== 200) {
            data = (this.response);
            document.querySelector("#errorBox").innerHTML = data;
        } 
    }
   

    request.send();
}