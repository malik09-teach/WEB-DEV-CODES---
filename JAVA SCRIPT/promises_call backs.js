

console.log("-----------call backs---------------");


console.log("req 1");
setTimeout(() => {
    console.log("2 user data loading");
    
},2000);

console.log("the data is loading");


console.log("-----------promises---------------");



console.log("data is loading from api");
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>{
return response.json();
})
.then (data=>{
console.log("product recived",data);
})
.catch(error=>{
console.log("server is down",error);
}
)

