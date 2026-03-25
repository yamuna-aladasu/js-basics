//if condition
let a=20;
if(a==20){
    console.log("happy")
}
//if-else condition
let s=18;
if(s>10){
    console.log("yes")
}
else{
    console.log("no")
}
//nested if
let user="yamuna";
let pass="123"
if(user==="yamuna"){
    if(pass==="123"){
        console.log("sucessfully loggedin");
    }
    else{
        console.log("check password");
    }
   
}else{
    console.log("user not found")

}
//ternary
let num = 10;
let result = (num>0)? "positive":"negative";
console.log(result);
//if...else if...else
let marks =45;
if(marks>90){
    console.log("A GRADE")
}
else if(marks>=45){
    console.log("B GRADE");
}else{
    console.log("FAIL")
}

//switch
let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    default:
        console.log("check input")
}
