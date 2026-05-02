async function getdata() {
    var x=await fetch('https://jsonplaceholder.typicode.com/users');      
    return await x.json();
}



async function main(){

try {
    
console.log("data is loading from the site");

let x=await getdata()
  console.log(x);

} catch (error ) {

    console.log("server not responding",error);
     
}

}




main()