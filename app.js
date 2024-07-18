// // function method class code 

// function abc(str){
//     let count = 0;
//     for(const chr of str){
//         console.log(chr)
//         if(chr  === "a"||chr  === "e"||chr  === "i"||chr  === "u"||chr  === "o"){
//             count++
            
       
//         }
//     }
//     console.log(count)
// }



// let arr = [1,2,3,4 ]


// let narr = arr.map((val)=>{
// return val
// })
// arr.forEach((arr, idx , val)=>{
//     console.log(arr , idx , val)

// })


// let da = arr.filter((a)=>{
//   return a % 2 ===0 ;
// })



// let reduce = arr.reduce((res, curr)=>{
//     return res + curr
// })



// let mark = [87,98,99,45];

// let result = mark.filter((a)=>{
//     return a >90;
//   })

//   console.log(result)


// let user = prompt("enter num");

// let usarr = [];
// for(let i = 0 ; i<=user ; i++){
//     usarr[i-1] = i;

// }


// let sum = usarr.reduce((res, curr)=>{
//     return res + curr
// })




// console.log(usarr)
// console.log(sum)




//.............. Event in js ............ 

// let btn1 = document.getElementById('btn1');

// let btn2 = document.getElementById('btn2');

// event property 

// btn1.onclick = (evt)=>{
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt)
//     console.log("btn is click")
// } 


// addEventListener in js 
// const remfun = ((evt)=>{
//     console.log("btn is click")
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt)

// })
// btn1.addEventListener( "click" , ()=>{
//     console.log("daniyal")
// })

// btn1.addEventListener( "click" , remfun)



// btn1.removeEventListener("click", remfun);



// change background color by event 


// let currmode = "light";


// btn2.addEventListener("click",()=>{
//     if(currmode === "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "blue"
//     }
//     else{
//         currmode = "light"
        
//         document.querySelector("body").style.backgroundColor = "red"
//     }
//     console.log(currmode)
// })


// obj and class in js


// const stud = {
//     fulName :"daniyal",
//     age: 29
//  ,  mark:()=>{
//     console.log("daniyal")




//  }   
// }





// let arr  =  ["daniyal","ahmed "]



// const emp ={
//     calTax(){
//         console.log("tax 20%");
//     }
// }

// const mani ={
//     salary : 5000,
// }



// class in js 

// basic syntax of class and obj

// class myClass{
//     constructor(){}
//     myMethod(){}
// }

// let myObj = new myClass();


// class car {
//     constructor(brand){
//         console.log("constructor called")
//         this.brandName = brand
   
    
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
// } 

// let alto = new car("daniyal ki car");
// alto.start( )
// console.log(alto)


// inhertance in js 

// class parent {
//     constructor(name){
        
//          console.log("parent cons");
//          this.color = "white";
//          this.name = name;
   
//         }
//     sleep(){
//         console.log ("sleep")
//     }
//     eat(){
//         console.log("eat")
//     }
// }

// class dani extends parent {
// constructor(name){
//     super(name);

//     console.log("child cons");

// }


// }

// let mani = new dani("ghayour ")

// mani.eat()
// mani .sleep()

// console.log(mani)




let data = "data is private"

class user{
    constructor(name , email){
        this.name= name;
        this.email =  email;
    }

    viewData(){
        console.log("date is " ,  data);

    }
}

class admin extends user {
    constructor(name , email){
        super(name,email);

    }

    editData(){
        data = "some new value"
    }

}

let st1  = new admin("daniyal admin", "daniyal@gmail.com ")

console.log(st1)