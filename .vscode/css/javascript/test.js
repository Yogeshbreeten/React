//01_basic
//const and variable 
//they are bascially  a memory to store its name 
//const no value change
const account_id = 144553;
let account_email = "breetenkhadka502@gmail.com"
var account_Password = "1234567890"
account_City = "Biratnagar"
let accountProvince; //-->its a underinfed
//lets check will it accept to change the value -->it will not change
// account_id=14741;
// console.log(account_id);
//for let
account_email="yojfdsfjsdhh@gmail.com";
console.log(account_email);
account_Password="456789123";
console.log(account_Password);
account_City="kathmandu";
console.log(account_City);
// console.log([account_id,account_email,account_Password,account_City]); -->for all to display
//in var we have scope problem


//Datatypes
// "use strict"; -->will be treated as newer version of js
let name="Yogesh";
let age=22;
let islogin=true;
//Primitive
//number-->2 tp prw53
//bigint
//string=>""
//boolean->true/false
//null-->standalone value
//undefinded -->novlaue assign
//symbol -->for uniqueness 


//object


//typeof
//console.log(typeof"yogesh")
//console.log(typeof age);


// if we check null typeof its a object
//for undrfined typeof is undefined









//conversion operations 


let score=33;
console.log(typeof score); //it will give number
 let ascore="230";
 console.log(ascore);
 console.log(typeof (ascore));//it will give string
//if we used
let valueinNumber=Number(ascore);
console.log(valueinNumber);
console.log(typeof(valueinNumber));//it will convert string into numbers
//in case if we have 33abc and and conver itS A nAN 
//TRUE=>1 FLASE=>0

let booleanIsloggedin=1;
let isloognedis=Boolean(booleanIsloggedin);
//if console we wil get true

//operations


let value=3;
let negvalue=-value;

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1="yogesh";
let str2="khadka";
let str3= str1+str2;
console.log(str3);//yogesh khadka

console.log("1"+2);//->12
console.log("1"+2+2);//->122
console.log(3+2+"2");//->52



//Comparisons
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
//problem where we not comparse same datatype


console.log("2">1);//here it will automatically coverst to number data type

//in case of null >0 fasle ==0 false in clase of >=0 true
//=== strict check datatypes 

console.log("2"==2)//->true

console.log("2"===2)//->false



//Strings

const name="hitesh";
const repocount=50;
//console.log(name+repocount);
console.log(`${repocount}+$(name)`);

//Numbers and maths

//Array

const myArray=[0,1,2,3,4,5];

console.log(myArray[0]);//to access
const myHeros=["shaktiman","ironman","batman","richirich"];
const rich=new Array('yogesh khadak','breeten khadka','b19');

//Objects
//Object.create
//to make  a object
const symbol=Symbol("key1");
const JsUser={
    //key and value ko khel
    name:"Yogesh",
    "fullname":"Yogesh Khadka",
    age=22,
    location:"Biratnagar",
    email:"breeten@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Sun","Tue"]
    //if want to use symnbol and print we do
    [symbol]='mykey1'
}
//inorder to access the data

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

//to change
 JsUser.email="yogeshkhadak@gmail.com";
 consolelog(JsUser.email);
 //not to change then
 Object.freeze(JsUser);

 //for adding the greeting function
 JsUser.greeting=function(){
    console.log("Helloo developer");
    console.log(`$(this.email)`);
 }
 console.log(JsUser.greeting);//function ko refernec
 console.log(JsUser.greeting());//actual data
