//Encaptulation
class Bankaccount{
    #balance;
    constructor(owner,balance){
        this.owner=owner;
        this.#balance=balance;
    }
    deposit(amount){
        this.#balance+=amount;
        console.log('deposited ='+amount,'newbalance ='+this.#balance)
    }
    getbalance(){
        return this.#balance;
    }

}
const account = new Bankaccount("john",500);
account.deposit(1000);
console.log(account.owner)//it wii print owner name 
console.log(account.getbalance())
console.log(account.balance)//it wont print because it is private
//inheritance
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("hi "+this.name+"my age is"+this.age)
    }
}
class Employee extends Person{
    constructor(name,age,job){
        super(name,age);
        this.job=job;
    }
    work(){
        console.log("hi my name is "+this.name+" my job is "+this.job);
    }
}
const Em1=new Employee("john",20,"software");
Em1.work();
//POLYMORPHISM

class Animal{
    speak(){
        console.log("animal");
    }
}
class Dog extends Animal{
    speak(){
        console.log("bowww")
    }
}
class Cat extends Animal{
    speak(){
        console.log("meowh")
    }
}
const c1=new Dog;
const c2=new Cat;
c1.speak();
c2.speak();
//ABSTRACTION
class car{
    start(){
        this._engine();
        console.log("start");    
    }
    _engine(){
        console.log("gotttt");
    }
}
const r1=new car();
r1.start()