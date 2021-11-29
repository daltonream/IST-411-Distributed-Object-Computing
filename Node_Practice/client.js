function ping() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://127.0.0.1:3000", true);

    request.onload = function () {
        data = (this.response);

        if (request.status == 200) {
            // document.querySelector("#textBox").innerHTML = ;
            console.log(data);
        } 
    }

    request.send();
}