//  console.log("hellow world")  

//  let varia="samar"
//  console.log(varia[varia.length-1]);

   
//  let string=" samar  ";
//   console.log(string.trim().length)
    
//   let other="samar"
   
 
//   console.log(other.slice(0,3));



//   let vari="samar"
//   let k=10;
//   console.log(typeof k)



// //   convert number to string

//   let num=101;
//     num=num+"";
//   console.log(num)
//   console.log(typeof num)

  
// //  convert stringt to number
//     let String=+"101";
//     console.log(typeof String)
    
//     // Second way convert to string to number
//     let onestr="101";
//     onestr=Number(onestr);
//     console.log(typeof onestr)
// // ........comining error in this code
//     // let age=200;
//     //   dig=String(dig);
//     // console.log(typeof dig);

//     let str1="20";
//     let str2="30";
//     console.log(+str1 + +str2)
//     console.log(typeof (+str1 + +str2));



//     // templete string
//     let myage=22;
//     let firstname="samar";

//     let aboutme=`my name is ${firstname} ali and my age is ${myage}`
   
//     console.log(aboutme)
  


// //    undefine

// let digit;
// console.log(typeof digit)

// digit="samar";
// console.log(typeof digit,digit)

// // == operator
// let k="7";
// let h=7;
// console.log(k==7);
// // output true because ==operator are check to value nothing variable
// console.log(k===h)
// // output comining is false

// let num=21;
//  if((num&1)==0){
//     console.log("even")
//  }
//  else{
//     console.log("odd")
//  }



//  let age=18;
//  if(age>18){
//     console.log("user can playes the game");
//  }
//  else   console.log("user can not play the game");



// conditional operator or ternery operator
// let age=23;
//  let newage= age>=20? "voterlist":"not valid";
//  console.log(newage)

// let firstname="samar";
// let age=24;

//  if(firstname[0]==="s" && age>=23){
//     console.log("you are not valid for voting")
//  }

// let num=23;
// if(num==23){
//     console.log("you win")
// }
// else if(num>23){
//     console.log("num is grater then to gess no")
// }
// else {
//     console.log("num is less then gess no")
// }
//   let guessno=12;
//   let guess=+prompt("enter a no");
//   if(guess===guessno){
//     console.log("you win");
//   }
//   else if(guess>guessno){
//     console.log("number is greater then guessno")
//   }
//   else{
//     console.log("number is less then guess no")
//   }


//   let day=0;
//   let dayname=+prompt("Enter day");
//   if(dayname===0){
//     console.log("sunday");
//   }
//   else if(dayname===1){
//     console.log("monday");
//   }
//   else if(dayname===2){
//     console.log("tuesday");
//   }
//   else if(dayname===3){
//     console.log("thursday");
//   }
//   else if(dayname===4){
//     console.log("wednesday");
//   }
//   else if(dayname===5){
//     console.log("friday");
//   }
//   else if(dayname===6){
//     console.log("saturday");
//   }
//   else{
//     console.log("invalid day");
//   }




// switch case statement

// let day=2;

// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");  
//         break; 
//     case 2:
//         console.log("tuesday"); 
//         break;
//     case 3:
//         console.log("thursday");
//         break;
//     case 4:
//         console.log("wednesday");  
//         break;
//     case 5:
//         console.log("friday");   
//         break;   
//     case 6:
//         console.log("saturday");   
//         break;
//     default:
//         console.log("invalid day");                   
// }

// let i=1;
// let sum=0;
// while(i<=10){
//   sum+=i;
//   i++;
// }
// console.log(sum);

  //  let total=0;
  // for(let i=1;i<=10;i++){
  //   if( i===5){
  //     break;
  //   }
  //   total+=i;
       
  //   }
  //   console.log(total);
  

  // let a=10;
  // let b=20;
  // let c=a;
  //     a=b;
  //     b=c;
  //     console.log("value of a"+" "+ a);
  //     console.log("value of b"+" "+ b);

//   var a = "A";
// console.log(65 - a);


 
// console.log(typeof("-1"));


// Question even sum........
// let i=1;
// let num=6;
// let evensum=0;
// while(i<=num){
//    if(i%2==0){
//     evensum+=i;
//    }
//    i++;
// }
// 
//  let num=12345;
//  let sum=0;
//  while(num!=0){
//   let rem=num%10;
//   sum+=rem;
//   num=parseInt(num/10)
//  }
//  console.log(sum);
  
// Question reverse the number 
// input: 12345;
// output:54321

// let num=12345;
// let reversenum=0;
// while(num!=0){
//   let rem=num%10;
//   reversenum=10*reversenum+rem;
//   num=parseInt(num/10);
// }
// console.log(reversenum);


// question prime number

  //  let l1=prompt("Enter the first num");
  //  let l2=prompt("Enter the second number");
  //  let num2;
  //  for(let num1=l1;num1<=l2;num1++){
  //   for( num2=2;num2<num1;num2++){
  //     if(num1%num2==0){
  //       break;
  //     }
  //   }
  //   if(num1==num2){
  //     console.log(num1);
  //   }
  //  }

  

  // Question pallindrom no
  // let num=12325;
  // let rev=0;
  // let orgnum=num;
  // while(num!=0){
  //   let rem=num%10;
  //   rev=10*rev+rem;
  //   num=parseInt(num/10);
  // }
  // console.log(rev);
  // if(orgnum==rev){
  //   console.log("Pallindrom number");
  // } else{
  //   console.log("Not pallindrom number");
  // }



  // question fibonacchi number

  // let a=1;
  // console.log(a);
  // let b=2;
  // console.log(b);
  // let n=5;
  // for(let i=1;i<=n;i++){
  //   let c=a+b;
  //   a=b;
  //   b=c;
  //   console.log(c); 
  // }



  // question armstrong number

  // for(let i=1;i<=1000;i++){
  //   let sum=0;
  //   let k=i;
  //   while(k!=0){
  //     let rem=k%10;
  //     sum+=rem*rem*rem;
  //     k=parseInt(k/10);
  //   }
  //   if(i==sum){
  //     console.log(i);
  //   }
  // }

  // Array
  // from text to make to aary
  // let naam="my name is samar momin"
  // let arr=naam.split(' ');
  // console.log(arr);

  // // from aaray to text

  // let aarrname=["my","name","is","samar","momin"]
  // let org=aarrname.join(' ');
  // console.log(onstorage);


  // two array concatination

  // let aar1=["my","name","is","samar"]
  // let arr2=["my","name","is","tahir"]
  // let arr3=["my","name","is","soaib"]
  // let res=aar1.concat(arr2,arr3);
  // console.log(res);


 

  // Multidimensinol array

  // let arr1=[
  //   [1,2,3],
  //   [4,5,6],
  //   [7,8,9],
  // ]

  // for(let i=0;i<arr1.length;i++){
  //   for(let j=0;j<arr1[i].length;j++){
  //     console.log(arr1[i][j]);
  //   }
  // }

  // object

  // let person={
  //   firstname:'samar',
  //   lastname:'ali',
  //   age:22
  // };
  // console.log(person.age);

  // // change to the particular value of object
  // person.firstname="soaib";
  // console.log(person.firstname)


  // // delete for property

  // delete person.firstname;
  // console.log(person)

  // // property already exists or not
  // console.log("age" in person)

  // // for all propersty show 

  // for(let key in person){
  //   console.log(key +" " +person[key]);
  // }

  // object inside object
  // let person={
  //   firstname:"samar",
  //   lastname:"ali",
  //   rollno:22,
  //    hobbies:['playingcricket',"backitbit","hockey"],
  //     living:{
  //        'firstname':"tahir",
  //        'lastname':"chouhan",
  //        'rollno':45
  //     }
  // }
  // console.log(person)
 

  // var i=0 ;     
  //  while(i<5); { 
  //     console.log("hii"); 
  //     ++i ; 
  

//  function javascript.................
//  function sum(a,b){
//   var k=a+b;
//   return k;
//  }
//  var add=sum(10,10);
//  console.log(add);

// function num(n){
//   var sum=(n*(n+1))/2;
//   return sum;
// }
// let j=num(100);
// console.log(j);


  // question prime no using function

// function primeornot(n){
//   let i;
//    for(i=2;i<n;i++){
//     if(n%2==0){
//       console.log("np");
//       break;
//     }  
//    }
//    if(i==n){
//     console.log("p");
//   }  
// }
// let add=primeornot(12);
// console.log(add);
  //  function add(a,b,c){
  //   return a+b+c;
  //  }
  //  console.log(add(10,20,30));


  // Arrow function decleration
  // const sum=(p,q)=>{
  //   return p+q;
  // }
  // console.log(sum(9,7))

  // const fun=()=>{
  //    console.log("hellow wold")
  // }

  // fun();

  function oddSum(n)
{
    let total = 0, result=[]; 
    for(let x = 1; x <= n; x++) 
    { 
       let odd = 2*x-1; 
       total += odd;
       result.push(total);
    }
    return result;
}

var result = oddSum(5);
console.log(result);