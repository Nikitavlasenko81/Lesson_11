//task_1
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// // alert( sorted ); // CSS, HTML, JavaScript
// // alert( arr ); // HTML, JavaScript, CSS (без изменений)
//
// function copySorted(arr){
//     return arr.slice().sort();
// }


//task_2
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = [];
// createArr(users)
//     console.log( names ); // Вася, Петя, Маша
// function createArr(arr) {
//     arr.forEach((el)=>{names.push(el.name)})
// }


//task_3
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// function getAverageAge(arr){
//     return (arr.reduce((sum,el)=>(sum+el.age) ,0))/arr.length
// }



//task_4
// function unique(arr) {
//     return Array.from(new Set(arr))
// }
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
// console.log( unique(strings) ); // кришна, харе, :-O


//task_5
let sum = (a) => (b)=> a+b
console.log(sum(2)(3))



//task_6
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a,b){
    return (x)=>{
       return  x >= a && x <= b
    };
}
function inArray(arr) {
   return (x)=>{
        return arr.includes(x);
    };
}
console.log(arr.filter(inBetween(3,6)))
console.log(arr.filter(inArray([1,2,3])))

//task_7
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) );


// task_8
function fib(n){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}






