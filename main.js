//var
var Masum="billah";
var Alamin="Islam";
console.log(Masum);
console.log(Alamin);
var myName="PK";
var myAge="25";
console.log("Atiqur Rahman",myName,"and my age is",myAge,"years");
//constant
const pi = 3.14159;
console.log("value of pi is",pi);

/* End part 1 BY lear with
Hasin Hayder*/
//Part-2
var a = 10;
var b = 12;
var c = 14;
console.log(a,b,c);
   /*oR*/
var a = 11, b = 13, c = 15;
console.log(a,b,c);
    /*OR*/
var a = 3
var b = 3
var c = 3
var d = 4
console.log(a,b,c,d);
     /*Or*/
var a = b = c = 2, d = 4;
console.log(a,b,c,d);
     /*Or*/
var a = b = c = 5;
var d = 6;
console.log(a,b,c,d);



/* string = cotesoner ("")('') moddhe ja thakbe, or paragraph.
   number = Ex: 1, 2, 3 etc.
   boolean = True or False 
   */
var paRa = "It's a Man"; // string
var p_i = 3.14159; // Number
var manIsmortal = true; // True or False
console.log(paRa,p_i,manIsmortal);
console.log(typeof paRa);// string
console.log(typeof p_i); // Number
console.log(typeof manIsmortal); // True or False

/* Undefined = jar vitore kuno kisu rakha hoi ni
  Null = it's a object
  */
var uN; // undifined
var nL = null; // Null
console.log(typeof uN);
console.log(typeof nL);
// End Part 2
// Start Part 3
  /*Math*/
var mangoPrice = 6;
var numberOfmango = 12;
var totalCostofmango = mangoPrice * numberOfmango;
console.log("total cost of mango is", totalCostofmango, "taka");

// area of a circle calculator pi*r spuared
var radius = 6;
const p_I = 3.14159;
var areaOfCircle = p_I * (radius * radius);
console.log("Area of the circle is", areaOfCircle,"Squar Inc");

// usd to bdt calculator
var usdTobdt = 82.5;
var bdt = 6000;
var usd = bdt / usdTobdt;
console.log("$", usd,"Dolor");

// Even and Odd
var n_1 = 7;
var r_1= 7 % 3; //even
console.log(r_1);

var n_1 = 6;
var r_1 = 6 % 3; // Odd
console.log(r_1);

//End Part -3

// Start Part-3.5
/*
Operator is + - * / %
Operand is x+Y operatorer dui passe ja thake tai operand
*/

var x = 4;
x++; // x = x+1
console.log(x);

var x = 6;
x--; // x = x-1
console.log(x);

var a;
var b = 7;
a = b++;
console.log("a =", a, "b =",b);
   //Or
var a;
var b = 8;
a = b;
b = b+1;
console.log("a =", a, "b =", b);

var x;
var y = 4;
x = ++y;
console.log("x =",x,"y = ", y);
  //Or
var x;
var y = 5;
y = y + 1;
x = y;
console.log("x =",x,"y = ", y);

// Assignment Operators
var x = 9;
x += 3; // x = x+3
console.log(x);
  // And
var x = 10;
x -= 2; // x = x-2
console.log(x);
   // and
var x = 12;
x *= 2; // x = x*2;
console.log(x);
// and
var x = 12;
x /= 2; // x = x/2;
console.log(x);
// and
var x = 13;
x %= 2; // x = x%2;
console.log(x);
// End part-3.5

// Start Part-4
  /* Compar 
	==
	!=
	<
	>
	<=
	>=
  */
  var n = 8;
  if (n<10) {
  	console.log(n);
  } else {
  	console.log(n);
  }
  // and
  var n = 80;
  if (n<10) {
  	console.log(n);
  } else {
  	console.log(n);
  }
     // exam;
 var n = 15;

 if (n<20) {
 	console.log(n);
 	console.log("This number",n,"is smaller than 20");
 }else {
 	console.log("this nuber",n,"is greater than 20");
 }
  // and
var n = 25;

 if (20>n) {  //20>n it's a good practrice
 	console.log(n);
 	console.log("This number",n,"is smaller than 20");
 }else {
 	console.log("this nuber",n,"is greater than 20");
 }

 var n = 20;
 var m = 22;

 if (n>m){
 	console.log("this number",n,"is greater than",m);
 }else{
 	console.log("this number",n,"is smaller than",m);
 }
 var n = 23;
 var m = 22;

 if (n>m){
 	console.log("this number",n,"is greater than",m);
 }else{
 	console.log("this number",n,"is smaller than",m);
 }

 var n = 22;
 var m = 22;

 if (n>m){
 	console.log("this number",n,"is greater than",m);
 }else if(n==m) {
 	console.log("this number",n,"is equal than",m);
 } else{
 	console.log("this number",n,"is smaller than",m);
 }

 // End Part-4

 // Start Part-4.5
 var personOne = "Atiq";
 var personTwo = "Masum";
 var areTheyBrother = true;

 if("Atiq"==personOne){
 	if("Masum"==personTwo){      // It's a Nesting Item
 		if(areTheyBrother){     // if("true"==areTheBrother)
 			console.log("Atiq & Masum are the Brother");
 		} else{
 			console.log("they are not Brother");
 		}
 	}
 }
   // Or
var personOne = "Atiq";
 var personTwo = "Masum";
 var areTheyBrother = false;

 if("Atiq"==personOne){
 	if("Masum"==personTwo){
 		if(areTheyBrother){     // if("true"==areTheBrother)
 			console.log("Atiq & Masum are the Brother");
 		} else{
 			console.log("they are not Brother");
 		}
 	}
 }

     // Or
var personOne = "Atiq";
var personTwo = "Masum";
var areTheyBrother = true;

if("Atiq"==personOne && "Masum"==personTwo && areTheyBrother){
	console.log("They are Brother");
}else{
	console.log("They are no Brother");
}

  // Or
var personOne = "Atiq";
var personTwo = "Masum";
var areTheyBrother = false;

if("Atiq"==personOne && "Masum"==personTwo && areTheyBrother){
	console.log("They are Brother");
}else{
	console.log("They are not Brother");
}
// Or operator and Prime Number exam: 1 to 10 = 2, 3, 5, 7

var n = 7;

if(n<10){
	if(2 == n || 3 == n || 5 == n || 7 == n){
		console.log("this number",n,"is smaller than 10 and it's a prime number");
	} else{
		console.log("this number",n,"is smaller than 10 and it's Not a prime number");
	} 
}else{
	console.log("this number",n,"is greater than 10");
}
// Or
var n = 8;

if(n<10){
	if(2 == n || 3 == n || 5 == n || 7 == n){
		console.log("this number",n,"is smaller than 10 and it's a prime number");
	} else{
		console.log("this number",n,"is smaller than 10 and it's Not a prime number");
	} 
}else{
	console.log("this number",n,"is greater than 10");
}
//Or
var n = 12;

if(n<10){
	if(2 == n || 3 == n || 5 == n || 7 == n){
		console.log("this number",n,"is smaller than 10 and it's a prime number");
	} else{
		console.log("this number",n,"is smaller than 10 and it's Not a prime number");
	} 
}else{
	console.log("this number",n,"is greater than 10");
}
// End part-4.5

// Start part-4.9
var n = 12;

if(n>0){
	var result = "this number "+n+" is Positive";
} else{
	var result = "this number "+n+" is Negetive";
}
console.log(result);
// Or
var n = -4;

if(n>0){
	var result = "this number "+n+" is Positive";
} else{
	var result = "this number "+n+" is Negetive";
}
console.log(result);

// Even And Odd

var n = 12;
var result;

var remainder = n % 2;

if(0 == remainder){
	result = "this number is Even";
} else{
	result = "this number is Odd";
}
console.log(result);
   //or
var n = 13;
var result;

var remainder = n % 2;

if(0 == remainder){
	result = "this number is Even";
} else{
	result = "this number is Odd";
}
console.log(result);
   //Or
var n = 0;
var result;

var remainder = n % 2;

if(0 == n){
	result = "this is a neutral number";
}else if(0 == remainder){
	result = "this number is Even";
} else{
	result = "this number is Odd";
}
console.log(result);

// Others

var movieRating = "pg";
var age = 12;

if("pg"==movieRating && age>=13){
	console.log("You can watch this movie");
}else if("r"==movieRating && age>=18){
	console.log("You can watch this movie");
}else if("g"==movieRating){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}

// Or
var movieRating = "pg";
var age = 13;

if("pg"==movieRating && age>=13){
	console.log("You can watch this movie");
}else if("r"==movieRating && age>=18){
	console.log("You can watch this movie");
}else if("g"==movieRating){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "r";
var age = 13;

if("pg"==movieRating && age>=13){
	console.log("You can watch this movie");
}else if("r"==movieRating && age>=18){
	console.log("You can watch this movie");
}else if("g"==movieRating){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "r";
var age = 19;

if("pg"==movieRating && age>=13){
	console.log("You can watch this movie");
}else if("r"==movieRating && age>=18){
	console.log("You can watch this movie");
}else if("g"==movieRating){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "pg";
var age = 12;

if("pg"==movieRating && age>=13){
	console.log("You can watch this movie");
}else if("r"==movieRating && age>=18){
	console.log("You can watch this movie");
}else if("g"==movieRating){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "pg";
var age = 12;

if(("pg"==movieRating && age>=13) ||  ("r"==movieRating && age>=18)|| ("g"==movieRating) ){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "pg";
var age = 14;

if(("pg"==movieRating && age>=13) ||  ("r"==movieRating && age>=18)|| ("g"==movieRating) ){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "r";
var age = 17;

if(("pg"==movieRating && age>=13) ||  ("r"==movieRating && age>=18)|| ("g"==movieRating) ){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "r";
var age = 19;

if(("pg"==movieRating && age>=13) ||  ("r"==movieRating && age>=18)|| ("g"==movieRating) ){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//or
var movieRating = "g";
var age = 37;

if(("pg"==movieRating && age>=13) ||  ("r"==movieRating && age>=18)|| ("g"==movieRating) ){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
// or
var movieRating = "g";
var age = 7;

if(("pg"==movieRating && age>=13) ||  ("r"==movieRating && age>=18)|| ("g"==movieRating) ){
	console.log("You can watch this movie");
}else{
	console.log("You can Not watch this movie");
}
//vampire=0, baby=1, toddler=1-3, kid= 3-12, teenager= 13-18, adult = 18+,
var yourAge= 1; // check = -1, 1, 2, 10, 16, 20, 201.
var result;

if(yourAge <0 || yourAge >200){
	result = "vampire";
}else if(yourAge <=1){
	result = "baby";
}else if(yourAge <= 3){
	result = "toddler";
}else if(yourAge <= 12){
	result = "kid";
}else if(yourAge <= 18){
	result = "teenager";
}else if(yourAge >= 18){
	result = "adult";
}
console.log("This is", result);

// End part 4.9

// Start 4. 10 -- ternary operator
var n = 5; //check 2 , 3, 4, 5, or others
var result;

var remainder = n % 2;

result = (0 == remainder) ? "even" : "odd";
console.log("This number is", result);

// Or
var n = -1; // check -1 and 1, 2, etc
var result;

result = (0 > n) ? "negative" : "positive";
console.log("This number is ", result);

//End part= 4.10

// start part = 5= Loop (do while, while, for)

/* while(condition){
	loop body
}*/

var i = 10;
while (i--> 0){
	console.log(i);
}

console.log("\n Break");

var i = 0;
while(i <10){   // jodi condition true hoi tahole continue hobe
	i++;
	console.log(i);
}

console.log("\n Break");

var i = 0;
while (i < 10){    // i<10 than print 0 to 8
	console.log(i);
	i+=2;
}

console.log("\n Break");

var i = 0;
while (i <= 10){   // i<=10 than print 0 to 10
	console.log(i);
	i+=2;
}

console.log("\n Break");

var i = 0;
while (i <= 10){   // i<=10 than print 0 to 10
	console.log(i);
	i+=3;
}

console.log("\n Break \n");

var i = 0;
while (true){   // true = infinite
	console.log(i);

	if (10 == i){
		break;
	}

	i++;
}

console.log("\n Break \n");
// ++i and i++
var i =0;
while(i++ <5){
	console.log(i);
}

console.log("\n Break \n");

var i =0;
while(++i <5){
	console.log(i);
}

console.log("\n Break \n");

// do
var i = 0;
do{
	console.log(i);
	i++;  // it's need <=
}while(i <= 10);

console.log("\n Break \n");

var i = 0;
do{
	i++; // it's need only <
	console.log(i);
	
}while(i < 10);

console.log("\n Break \n");

// if condition True
var i = 0;
do{
	i++; // it's need only <
	console.log(i);

	if (10 == i){
		break;
	}
	
}while(true);

console.log("\n Break \n");
// for loop
var i;
for (i=0; i<10; i++){    // initialization; condition; stepping
	console.log(i);
}

console.log("\n Break \n");

var i;
for(i=0; i<20; i+=2){
	console.log(i);
}

console.log("\n Break \n");

var i;
i=0;
for(;;){   // infinite condition
	i++;
	console.log(i);
	if (15 == i){
		break;
	}
}


console.log("\n Break \n");

var i,j;
for(i=0, j=10; i <=10; i++, j--){
	console.log(i,j);
}


console.log("\n Break \n");
// factorial

var n = 5;
var factorial = 1;

for(var i=n; i > 1; i--){
	factorial = factorial * i;
}
console.log(factorial);
//Or
console.log("\n Break \n");

var n = 6;
var factorial = 1;

for(var i=n; i > 1; i--){
	factorial*=i;
}
console.log(factorial);

console.log("\n Break \n");

var n = 6;
var factorial = 1;

for(var i=n; i > 1; i--){
	factorial*=i;
	console.log(factorial);
}

console.log("\n Break \n");

factorial = 1;
for(var i=1; i<=10; i++){
	factorial*= i;
	console.log("factorial of",i,"is",factorial);
}
// End 5.6

// tutorial 5.7 start https://www.youtube.com/watch?v=90dfTdjijWc&list=PLoR56CteKZnAdVtfTbAbUqT2thG4S-Anv&index=18