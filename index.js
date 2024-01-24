//TASK 1

let a= 3;
let b=5;
let c;

let result = `
let a = 3;
let b =5;
let c;
----------------
a + b = ${a+b};
a - b = ${a-b};
a * b = ${a*b};
a / b = ${a/b};
a % b = ${a%b};
a += b = ${a+=b};
a -=b = ${a-=b};
a *= b = ${a*=b};
a /= b = ${a/=b};
a %= b = ${a%=b};
a == b = ${a==b};
a != b = ${a!=b};
a > b = ${a>b};
a < b = ${a<b};
!a && !c = ${!a && !c};
!a || !c = ${!a || !c};
`

console.log(result);


//TASK2

let first_name= "Kreeshaya";
let last_name= "Subramanian";
let email= "subr0021@algonquinlive.com";

let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

console.log(output);