numarrays=[1,2,3,4,5,6];
 strarrary2=["abbas","shoiab","ali","azmat"];
 mix_arr=[1,2,3,4,"abbas","shoiab","ali","azmat"];



console.log("types\n");
console.log(typeof (numarrays));
console.log(typeof (strarrary2));
console.log(typeof (mix_arr));


console.log("retrival\n");
console.log(numarrays);
console.log(strarrary2);
console.log(mix_arr);


console.log("\n");
console.log("retrival by on index \n");

console.log(numarrays[0]);
console.log(strarrary2[0]);
console.log(mix_arr[0]);

console.log("retrival by on the loop");

for(let i=0;i<numarrays.length;i++){

 console.log(numarrays[i]);

}


console.log("the retrival on the for of loop ");
console.log( "mostly use for the object:");

// for the dictionery




for (let val of mix_arr) {
    console.log(val); 
}







for(let i=0;i<mix_arr.length;i++){

 console.log(mix_arr[i]);

}


