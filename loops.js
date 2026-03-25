//forloop
for(let i=0;i<=5;i++){
    console.log(i)//0 1 2 3 4 5
}
//for loop with condition
for (let i=10;i>=0;i--){
    if(i%2==0){
        console.log(i)
    }}//10 8 6 4 2 0

let v=20;
console.log(v++);//20 uses the present value then it increments
console.log(v)//21

let y=20;
console.log(++y);//21 increment/decrement first,then use the value
console.log(y)//21

//while loop
let u=0;
while(u<=5){
    console.log(u);
    u++;
}//0 1 2 3 4 5

//do while
i=0;
do{
    console.log(i)
    i++;
}while(i<3);
//break
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking at i =", i);
        break; // exit loop
    }
    console.log(i);
}
//continue
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping i =", i);
        continue; // skip current iteration
    }
    console.log(i);
}
//pass
let x=20;
if(x<200){
  //do nothing  
}
else{
    console.log("hi")
}