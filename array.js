arr=[1,2,3,4];
arr1=["banana","ant","zebra","parrot"]
arr.push(3)//push()Adds element(s) to the end
console.log(arr);
arr.pop()//pop()Removes last element
console.log(arr);
arr.shift()//Removes first element
console.log(arr);
arr.unshift(0)//Adds element(s) to beginning
console.log(arr);
arr.splice(1,2);//splice(pos, deleteCount, ...items)
console.log(arr);//(startindex,delete count)
console.log(arr);
arr.splice(1,0,9);
arr.splice(1,0,8,9);//(startindex,delete count,add elements)
console.log(arr);
arr.sort();//Sorts array (by default as strings!)
console.log(arr);
console.log(arr1);
arr.reverse()
console.log(arr);
neww=arr.map(x => x * 2);
console.log(neww);
f=neww.filter(x => x>2);//it prints grater than 2 numbers in array
console.log(f)
arr1.forEach((element,index)=> console.log(element,index));//prints elements with index
arr2=arr.concat(arr1);
console.log(arr2);
console.log(arr.slice(0,2))/(start,end)
console.log(arr1.join("-"))
console.log(arr.includes(9))//checks the number in array
console.log(arr.find(x => x > 1))//Returns first matching element.

