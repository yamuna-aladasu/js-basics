const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
console.log(car.key);
//antother method
const veh={
    color:"black"
}
veh.name="car"//adding
veh.color="white"//updating
console.log(veh)
console.log(veh.name)//dot method
console.log(veh["name"])//bracket method
console.log(delete veh.name)//delete method
console.log(veh)//after deletion

//object with function
const userr={
    name:"vinny",
    greet:function(){
        console.log("hello "+this.name)
    }
}
userr.greet();
//loop with object
for(let key in userr){
    console.log(key,userr[key]);
}
//nested object
let student={
    name:"vimal",
    marks:{
        maths:"pass",
        sci:"fail"
    }
}
console.log(student.marks.sci);
//array with object
let arr=[
    {name:"yamuna",age:"20"},
    {name:"man",age:"21"}
];
console.log(arr[0].name);
console.log(arr[0]);
console.log(arr[1]);
