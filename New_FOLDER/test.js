import fetch from "node-fetch";

function postdata(){
    url = "http://dummy.restapiexample.com/api/v1/employees";
    
    fetch(url).then(response => response.json())
    .then(data => console.log(data))
}

postdata()
console.log("yolo")