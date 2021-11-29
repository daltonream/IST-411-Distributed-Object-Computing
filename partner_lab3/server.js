const port = 3000;
const fs = require('fs');
const  express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

    app.statusCode = 200;

    app.get('/', (req, res) =>{
        fs.readFile('reservations.txt', (err,data) => {
            if(err){
                throw err;
            } else {
                res.send(data);
            }
        });
    });

    app.get('/getName/:name', (req, res) =>{
        let name = req.params.name;
        let found = false;
        fs.readFile('reservations.txt', (err,data) => { 
            if(err){
                throw err;
            } else {
                let jsonObject = "";
                data = data.toString().split('\n')
                for(let i = 0; i < data.length - 1; i++){
                    jsonObject = JSON.parse(data[i]);
                    if (jsonObject.name === name){
                        found = true;
                        res.send(jsonObject);
                    } 
                }
                if (!found){
                    res.send(res.statusCode = 404);
                }
            }
        });
    });

    app.post('/getName/:name/startDate/:startdate/startTime/:starttime/hours/:hour', (req, res) =>{
        let name = req.params.name;
        let startDate = req.params.startdate;
        let startTime = req.params.starttime;
        let hours = req.params.hour
        let jsonObject = {"name": name, "startDate": startDate.replaceAll('.', '/'), "startTime": startTime,"hours": hours};
        let updatedJson = "";
        fs.readFile('reservations.txt', (err,data) => { 
            if(err){
                throw err;
            } else {
                data = data.toString().split('\n')
                jsonArray = [];
                let found = false;
                for (let i = 0; i < data.length; i++){
                    if(data[i].length !== 0){
                        jsonArray.push(JSON.parse(data[i]));
                        let object = JSON.parse(data[i]);
                        if (object.name === jsonObject.name){
                            found = true;
                        }
                    }
                }
                if (!found){
                    jsonArray.push(jsonObject);
                }
                jsonArray.sort(function(a,b){
                    return new Date(a.startDate) - new Date(b.startDate).getTime()
                });
                
                for (let i = 0; i < jsonArray.length; i++){
                    updatedJson += (JSON.stringify(jsonArray[i]) + '\n');
                }

                fs.writeFile('reservations.txt', updatedJson, err => { 
                    if(err){
                        throw err;
                    } else if(!found) {   
                        res.send(updatedJson);
                    } else {
                        res.send("Duplicate")
                    }
                });
            }
        });
        
    });

    app.patch('/getName/:name/startDate/:startdate/startTime/:starttime/hours/:hour', (req, res) =>{
        let name = req.params.name;
        let startDate = req.params.startdate;
        let startTime = req.params.starttime;
        let hours = req.params.hour
        let jsonObject = {"name": name, "startDate": startDate.replaceAll('.', '/'), "startTime": startTime,"hours": hours}
        let updatedJson = "";
        fs.readFile('reservations.txt', (err,data) => { 
            if(err){
                throw err;
            } else {
                data = data.toString().split('\n')
                jsonArray = [];
                for (let i = 0; i < data.length; i++){
                    if(data[i].length !== 0 ){
                        let object = JSON.parse(data[i]);
                        if(object.name === name){
                            data[i] = JSON.stringify(jsonObject);
                        }
                        jsonArray.push(JSON.parse(data[i]));
                    }
                }
                jsonArray.sort(function(a,b){
                    return new  Date(a.startDate) - new Date(b.startDate).getTime()
                });
                
                for (let i = 0; i < jsonArray.length; i++){
                    updatedJson += (JSON.stringify(jsonArray[i]) + '\n');
                }

                fs.writeFile('reservations.txt', updatedJson, err => { 
                    if(err){
                        throw err;
                    } else {   
                        res.send(updatedJson)
                    }
                });
            }
        });

    });

    app.delete('/getName/:name', (req, res) =>{
        let name = req.params.name;
        fs.readFile('reservations.txt', (err,data) => { 
            if(err){
                throw err;
            } else {
                let temp = "";
                let jsonObject = "";
                data = data.toString().split('\n')
                for(let i = 0; i < data.length - 1; i++){
                    jsonObject = JSON.parse(data[i]);
                    if (jsonObject.name !== name){
                        temp += (data[i].toString() + '\n');
                    } 
                }
                fs.writeFile('reservations.txt', temp, err => { 
                    if(err){
                        throw err;
                    } else {
                        res.send("Reservation Deleted")
                    }
                });
            }
        });
    });



app.listen(port, () => console.log(`Listening on port ${port}`)) 
