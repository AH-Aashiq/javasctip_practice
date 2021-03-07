
/*
//Using Funtion
function result(jsc, ssc) {
    var jsc = (parseFloat(prompt('Enter your JSC result')));
    var jscResult = jsc * .25;
    var ssc = (parseFloat(prompt('Enter your SSC result')));
    var sscResult = ssc * .75;
    var hsc = jscResult + sscResult;
    return hsc;
}
console.log(result());
*/

//HSC RESULT CALCULATOR WITH FUNCION

/*
//Variable
var fristName = 'Asiek'
var age = 20;

console.log(fristName + ' ' + age);
var job, isMarried;

//variable write-2
job = 'web developer'

isMarried = false;
console.log(fristName + ' is a ' + age + ' year old ' + job + ' Is he married? ' + isMarried);

//variable mutation
age = 'twinty eight'
job = 'desinger.'
alert(fristName + ' is a ' + age + ' year old ' + job + ' ' + 'is he married? ' + isMarried);
var lastName = prompt('what is his lastname');

console.log(fristName + ' ' + lastName);

//Asiek
var fristName = 'Aseik'
var age = '20';

console.log(fristName + ' ' + age);

var job = 'web developer';
var isMarried = false;
console.log(fristName + ' is a ' + age + ' year old ' + job + ' is he married ' + isMarried);

//Maruf
var marufFristName = 'Maruf'
var marufLastName = 'Ahmed'
var job = 'Web Front End Developer'
var age = 20;
isMarried = false;
console.log(marufFristName + ' ' + lastName + ' he is a  ' + age + ' years old ' + job + ' is he married? ' + isMarried);
*/

/*
//USE OF OPARATOR
var year, yearAseik, yearMaruf;
now = 2018;
ageAsiek = 20;
ageMaruf = 22;
//Math oparators
yearAseik = now - ageAsiek;
yearMaruf = now - ageMaruf;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical oparators
var asiekOlder = ageAsiek > ageMaruf;
console.log(asiekOlder);

//typeof oparator
console.log(typeof asiekOlder);
console.log(typeof ageMaruf);
console.log(typeof 'Maruf is older than Asiek');
var x;
console.log(typeof x);



//oparator precedence
var now = 2020;
var yearAsiek = 2001;
var fullAge = 19;

//Multiple oparator
var isFulage = now - yearAsiek >= fullAge; //ture
console.log(isFulage);

//Grouping
var ageAseik = now - yearAsiek;
var ageMaruf = 20;
var average = (ageAseik + ageMaruf) / 2;
console.log(average);

//Multiple Assignments
var x,y;
x = y = (3 + 5) * 4 - 6; //Ans:26;
console.log(x,y);

//More Oparators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x --;
console.log(x);
x ++;
console.log(x);
*/

//Coding Challenege:01
/*
Asiek and Maruf are trying to compare their BMI,which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1.Stroe Asiek's and Maruf's mass and height in variables
2.Calculate both their BMI's
3.Create a boolean variable contaning information about whether Asiek has heigher BMI then Maruf.
4.print a string to the console contaning the varible from step.3(somthing like "Is Aseik BMI heigher than Maruf's? true");
*/

/*
//solve:01
var massAsiek = 45;//kg
var heightAsiek = 1.2;// meater

var massMaruf = 65; //kg
var heightMaruf = 1.3 //meater

var asiekBMI = massAsiek / (heightAsiek * heightAsiek);
console.log('Asiek\'s BMI: ' + asiekBMI);
var marufBMI = massMaruf / (heightMaruf * heightMaruf);
console.log('Maruf\'s BMI: ' + marufBMI);
var asiekHeigherBMI = asiekBMI > marufBMI;
console.log(' Is Asiek\'s BMI heigher than Maruf\'s BMI? ' + asiekHeigherBMI ); //Ans is flase;
*/

/*
//if/else statements
var fristName = 'Asiek'
var civilStatus = 'single'

if (civilStatus === 'Married') {
    cosole.log(fristName + ' Is married? ');
} else {
    console.log(fristName + ' will hopefully marry soon  ');
}

var isMarried = true;
if (isMarried) {
    console.log(fristName + ' is married!! ');
}else{
    console.log(fristName + ' will hopefully marry soon ');
}

//solve:01 (Ans:Maruf's BMI heigher than Asiek);
var massAsiek = 45;//kg
var heightAsiek = 1.2;// meater
var massMaruf = 65; //kg
var heightMaruf = 1.3 //meater

var asiekBMI = massAsiek / (heightAsiek * heightAsiek);
var marufBMI = massMaruf / (heightMaruf * heightMaruf);
if(asiekBMI > marufBMI){
    console.log(' Asiek\'s BMI heigher than Maruf ');
}else{
    console.log(' Maruf\'s BMI heigher than Asiek ');
}
*/

/*
//Boolean logic
var fristName = 'Asiek'
var age = 18;
if (age < 13) {
    console.log(fristName + ' is a boy ');
} else {
    console.log(fristName + ' is a man ')
}

//Boolean Logic//*****
//if/else/else if//***
var fristName = 'Asiek'
var age = 18;
if (age < 13) {
    console.log(fristName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(fristName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(fristName + ' young man.')
} else {
    console.log(fristName + ' is a man.');
}
*/


/*
//The ternary Oparator and Switch Statements
var fristName = 'Asiek'
var age = '20';
age >= 18 ? console.log(fristName + ' drink Alcohole.') : console.log(fristName + ' drink Juice.');

var drink = age >= 18 ? 'Alcohole' : 'juice';
console.log(drink);

var fristName = 'Asiek'
var age = 16;
if (age >= 18) {
    console.log(fristName + ' drink Alcohole');
} else {
    console.log(fristName + ' drink Juice');
}
*/

/*
//Switch Statements
var fristName = 'Aseik';
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(fristName + ' teaches kids');
        break;
    case 'driver':
        console.log(fristName + ' drives car in Dhaka');
        break;
    case 'designer':
        console.log(fristName + ' design website in fiver');
        break;
    case 'programmer':
        console.log(fristName + ' proggram programms');
        break;
    default:
        console.log(fristName + ' does somthing else');
}

var age = 18;
switch (true) {
    case age < 13:
        console.log(fristName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(fristName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(fristName + ' is an young man');
        break;
    default:
        console.log(fristName + ' is a man');
}
*/


/*
// Truty and falsy value
//Fasly value:undefinied,null,0,'',NaN;
//Truty value:Not falsy Value;
var height;
height = 0;
if(height || height === 0){
    console.log(' variable is defined');
}else{
    console.log('variable is not defined');
}
*/



/*Coding Challenge:02
Asiek and Maruf both play basketball in different teams.In the latest 3 games,Asiek's team scored 89,120 and 103, points,while Maruf's team scored 116,94 and 123 points.

1.Calculate the average score for each team.
2.Decide which teams wins in average (heighest average score), and print the winner to the console.Also include the average score in the output.
3.Then Change the scores to show different winners Dont's forget to take into account there might be a draw (the same average score)
4.EXTRA: Arshi also plays basketball, and her team scored 97,134 and 105 points. Like before, log the average winner to the console.HINTS: you will need the && operator to the take decision.If you can't solve this one.
5.Like before change the scores to generate different winners. keeping in mind there might be draw.
*/
/*

//Solve:02
var scoreAsiek = (89 + 120 + 103) / 3;
var scoreMaruf = (116 + 94 + 123) / 3;
var scoreArshi = (97 + 134 + 105) / 3;
console.log(scoreAsiek, scoreMaruf, scoreArshi);
if (scoreAsiek > scoreMaruf && scoreAsiek > scoreArshi) {
    console.log(' Asiek\'s team wins with ' + scoreAsiek + ' points');
} else if (scoreMaruf > scoreAsiek && scoreMaruf > scoreArshi) {
    console.log(' Maruf\'s team wins with ' + scoreMaruf + ' points');
} else if (scoreArshi > scoreMaruf && scoreArshi > scoreMaruf) {
    console.log(' Arshi\'s team wins with ' + scoreArshi + ' points');
} else {
    console.log(' There is a draw');
}
/*


/*
//function//
function calculateAge(brithYear) {
    return 2020 - brithYear;
}
var ageAseik = calculateAge(1999);
var ageMaruf = calculateAge(2001);
var ageArshi = calculateAge(2002);
console.log(' Asiek is ' + ageAseik + ' years old ');
console.log(' Maruf is ' + ageMaruf + ' years old ');
console.log(' Arshi is ' + ageArshi + ' years old ');

function yearUntilRetirement(year, fristName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(fristName + ' retires in  ' + retirement + ' years old ');
    }else{
        console.log(fristName + ' Is already retire ');
    }
}
yearUntilRetirement(1999, 'Asiek');
yearUntilRetirement(2001, 'Maruf');
yearUntilRetirement(2002, 'Arshi');
*/


/* Function Statements and Expression
*/
//Funtion Declaration
//function whatDoYouDO(job,fristName){}
/*
//Function Expression
var whatDoYouDO = function (job, fristName) {
    switch (job) {
        case 'teacher':
            return fristName + ' teachees kids how to code ';
        case 'desiner':
            return fristName + ' design web site  ';
        case 'driver':
            return fristName + ' drives car in Bangladesh ';
        default:
            return fristName + ' does somthings else ';
    }
}
console.log(whatDoYouDO('teacher', 'Asiek'));
console.log(whatDoYouDO('driver', 'Arshi'));
console.log(whatDoYouDO('web developer', 'Maruf'));
*/



/*
//Array
//Inisalize New Arrays
var names = ['Asiek', 'Maruf', 'Kibria'];
var years = new Array(2000, 2001.2002);
console.log(names[2]);
console.log(years[0]);
console.log(names.length);

//Mutete Array
names[1] = 'Alom';
names[names.length] = 'Sayem';
console.log(names);

//Different Data Type
var Asiek = ['Asiek', 'Haq', 2000, 'hacker', false];

Asiek.push('black'); //Add Element In the End
Asiek.unshift('MD'); //Add Element In the Start
console.log(Asiek);

Asiek.pop(); //Remove Element from the End
Asiek.pop();
Asiek.shift(); //Remove Element from the Start
console.log(Asiek);
*/


//CODDING CHALLENGE 03
/*
John and his family went on a holiday and went to 3 different restaurants.The bills were $124 , $48 and $268;

To tip the waiter a fair amount,John create a simple tip calculate (as a funtion), He likes to tip 20% of the bills when the bill is less then $50,!5% when the bill is between $50 and $200 and 10% if the bills is more than $200;

In the end,John would like to have 2 arrays;
1) Contaning all three tips (one for each bill)
2)contaning all three final paid amount (bill + tip)
(note: to calculate 20% of value . simply multiply if with 20/100 = 0.2);
*/


/*
//Solve:03
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
var finalValue = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(tips, finalValue);
*/

/*
//Objects and Properties

//Object Literal
var Asiek = {
    fristName:'Asiek',
    lastName:'Haque',
    birthYear:2000,
    family:['Mike','Asad','Rafin','Rafid'],
    job:'Hacker',
    isMarried:false
};

console.log(Asiek.fristName);
console.log(Asiek['lastName']);
var x ='birthYear';
console.log(Asiek[x]);

Asiek.job = 'desiner';
Asiek['isMarried'] = true;
console.log(Asiek);

//New Object
var Maruf = new Object();
Maruf.fristName = 'Maruf';
Maruf.lastName = 'Hasan';
Maruf.birthYear = 1999;
console.log(Maruf);
*/

/*
//Object Methods
var Asiek = {
    fristName: 'Asiek',
    lastName: 'Haque',
    birthYear: 2000,
    job: 'Hacker',
    isMarried: false,
    calcAge: function (birthYear) {
        this.age = 2020 - this.birthYear;
    }
};
Asiek.calcAge();
console.log(Asiek);
*/

/*
//Solve 2nd Promlem with
//Object method.

var Arif = {
    fullName: 'Arif Hasan',
    mass: 45,
    height: 1.25,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var Maruf = {
    fullName: 'Maruf Ahmed',
    mass: 65,
    height: 1.50,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (Arif.calcBMI() > Maruf.calcBMI()) {
    console.log(Arif.fullName + ' has higher BMI of ' + Arif.bmi);
} else if (Maruf.bmi > Arif.bmi) {
    console.log(Maruf.fullName + ' has higher BMI of ' + Maruf.bmi);
} else {
    console.log('They have same BMI');
}
*/

/*
// For  Loops
for(var i = 0; i <= 20 ; i++){
    console.log(i);
}
/*
i=0 , 0 < 10 true, log i to console, i++
i=1 , 1 < 10 ture,log i to console, i++
...
i = 1 , 9 < 10 ture , i to the console, i++
i = 1 , 10 < 10 FALSE, exit to the loop
IF i = 1; and 10 <= 10 its TRUE , i to the console i++
//
var Asiek = ['Asiek', 'Haque', 2000 , 'Hacker' , false];
for ( var i = 0; i < Asiek.length; i++) {
    console.log(Asiek[i]);
}
//WHite Loop
var i = 0;
while(i < Asiek.length){
    console.log(Asiek[i]);
    i++;
}
*/
/*
// CONTINUE AND BREAK STATEMENTS
var Asiek = ['Asiek', 'Arif', 2001, 'Hacker', false];
for (var i = 0; i < Asiek.length; i++) {
    if (typeof Asiek[i] !== 'string') continue;
    console.log(Asiek[i]);
}
for (var i = 0; i < Asiek.length; i++) {
    if (typeof Asiek[i] !== 'string') break;
    console.log(Asiek[i]);
}

//Looping Backwward
for(var i = Asiek.length -1; i >= 0; i--){
    console.log(Asiek[i]);
}
*/

/*
//CODING CHALLENGE:05
//PROBLEM:05
var Asiek = {
    fullName: 'Asiek Arif',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValue = [];
        //Determine percentage based on tipping rules
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill > 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            //Add resutls to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill + bill * percentage;
        }
    }
}
Asiek.calcTips();
console.log(Asiek);
*/
//******* JONAS JS BASIC PART CODE END ****/

//SELF PRACTICE START FROM HERE//
//Problem:13//
/*


//HSC RESULT CALULATOR//
function result(jsc, ssc) {
    var jsc = (parseFloat(prompt('Enter Your JSC Result : ')));
    var jscResult = jsc * .25;
    var ssc = (parseFloat(prompt('Enter Your SSC Result : ')));
    var sscResult = ssc * .75;
    var hsc = jscResult + sscResult;
    return hsc;
}
var hscResult = result();
console.log('Your HSC result is : ' + hscResult);

var ssc = (parseFloat(prompt('Enter Your SSC Result : ')));
var total = hscResult + ssc;
console.log('Total point is : ' + total);

if (total >= 8){
    console.log('You can exam in Rajshahi');
}else{
    console.log('Your can exam in Rajshahi')
}
if (total >= 7){
    console.log('You can exam in Mediacal');
}else{
    console.log('Your can exam in Mediacal')
}
if (total >= 8){
    console.log('You can exam in Chittagon');
}else{
    console.log('Your can exam in Chittagon')
}
if (total >= 9){
    console.log('You can exam in Dhaka University');
}else{
    console.log('Your can exam in Dhaka University')
}
*/

/*


*/
/*
//Problem 25//
//Run a programme which give you a  big number from 3 int number?
//-- number from user--//
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);
*/

/*
//normal var//
var num1 = parseFloat(prompt("Enter first number: "));
var num2 = parseFloat(prompt("Enter second number: "));
var num3 = parseFloat(prompt("Enter third number: "));

if (num1 >= num2 && num1 >= num3) {
    console.log('largest number is:' + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log('largest number is:' + num2);
} else {
    console.log('largest number is :' + num3);
}
*/
/*


/*
//problem:31
for(var i = 0; i <= 100; i++){
    if(i % 2 !=0){
        console.log(i);
    }
}
*/
/*
//infinite loop
for(var i = 0; i <= 100; i--){
    console.log( "FUCK YOU WORLD" ,i);
}
*/
/*
//PROBLEM:31//
//pyramiyd
for (var i = 1; i <= 30; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(j);
    }
    document.write("<br/>");
}
*/
/*
for(var i = 1; i <=69 ; i++){
    document.write("I love Your personality" + "<br/>");

}
*/
/*
//MULTIPLICATION TABLE//
//PROBLEM:33//
var n = (parseFloat(prompt('Enter you number:')));
var i,j;
for(i=1; i<=10; i++){
    document.write( n + " * " + i +"= " + n*i + "<br/>");
}
*/


//FIND A PRIME NUMBER OR NOT//
//PROBLEM : 35

/*
function isprime(num) {
    var i;
    var num;
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("This is not a prime number");
            return false;
        }
        console.log("This is  a prime number");
        return true;

    }
}
isprime(prompt("Enter your number for test"));
*/

/*
function result(jsc, ssc) {
    var jsc = (parseFloat(prompt('Enter Your JSC Result : ')));
    var jscResult = jsc * .25;
    var ssc = (parseFloat(prompt('Enter Your SSC Result : ')));
    var sscResult = ssc * .75;
    var hsc = jscResult + sscResult;
    return hsc;
}
var hscResult = result();
console.log('Your HSC result is : ' + hscResult);

var ssc = (parseFloat(prompt('Enter Your SSC Result: ')));
var total = hscResult + ssc;
console.log('Total point is : ' + total);
*/

/*
function result (jsc, ssc) {
    var jsc = (parseFloat(prompt('Enter Your JSC Result : ')));
    var jscResult = jsc * .25;

    var ssc = (parseFloat(prompt('Enter Your SSC Result : ')));
    var sscResult = ssc * .75;

    var hsc = jscResult + sscResult;
    return hsc;
}
var hscResult = result();
console.log(' Your HSC result is : ' +hscResult);
var sscResult_2 = (parseFloat(prompt('Enter Your SSC Result')));
var tolat = hscResult + sscResult_2;
console.log(' Your total result is:');
*/

/*
//Showing up 0-9 number with switch-statements//
//24 problem
var number = (prompt('Enter your number 0 to 9:'));
switch (number) {
    case '0':
        console.log(' zero ');
        break;
    case '1':
        console.log(' one');
        break;
    case '2':
        console.log(' two');
        break;
    case '3':
        console.log(' three');
        break;
    case '4':
        console.log(' four');
        break;
    case '5':
        console.log(' five');
        break;
    case '6':
        console.log(' six');
        break;
    case '7':
        console.log(' seven');
        break;
    case '8':
        console.log(' eight');
        break;
    case '9':
        console.log(' nine');
        break;
    default:
        console.log(' not match');
}
 // End Problem:24//
*/

/*
//BUDGET CALCULATOR//
function budgetCalculator(priceOfWatch,priceOfMobile,priceOfLaptop) {
    var priceOfWatch =50;
    var priceOfMobile =100;
    var priceOfLaptop =300;
    var totalNeed = priceOfWatch * priceOfWatch + priceOfMobile * priceOfMobile + priceOfLaptop * priceOfLaptop;
    return totalNeed;
}
var budgetAmount = budgetCalculator(2,3,4);
console.log('Your total budget is: ' + budgetAmount);

*/

/*
//Number sum of 1-10//
function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
    console.log(sum)
         }
numSum(10);
*/


/*
var _this = this;
var budgetCalculator = function (watch, mobile, laptop) {
    _this.watch = watch * 50;
    _this.mobile = mobile * 100;
    _this.laptop = laptop * 500;
    console.log('watch ' + _this.watch + '\n' + 'mobile ' + _this.mobile + '\n' + 'Laptop ' + _this.laptop);

    var _sum = `${_this.watch + _this.mobile + _this.laptop}`;
    return _sum;

};
var budgetAmount = (budgetCalculator(2, 3, 4));
console.log('Your budget is :' + budgetAmount);
*/


/*
function crushDetails (name , age , college){
    var name;
    var age;
    var college;
    var crushBio = name + age + college;
    return crushBio;
}
console.log(crushDetails('Name is:'+'none' + 
                    '\n','Age is :' + 20 +'\n',
                    'College is :'+ 'none',));

console.log('Sorry your Crush name not found');
*/


/*

*/


/*
for(let i = 0; i <= 100; i++){
    document.write('I Love You' + '</br>');
}
*/

/*
//Problem:26//
//Calculate Area of triangle
//Formula is -- ((base*height) /2);

function valueOfTriangle(a, b) {
    var a = (parseFloat(prompt('Enter Your triangle base : ')));
    var b = (parseFloat(prompt('Enter Your triangle height : ')));
    var c = ((a * b) / 2);
    return c;
}
var areaTriangle = valueOfTriangle();
console.log('Area of triangle : ' + areaTriangle);
*/
// 
// for(var i = 0; i<=10; i++) {
//     console.log('I love you so Much');
// }
/*
function factorial(n){

    if(n==1) 
    return 1;

    return n*factorial(n-1);


}
console.log(factorial(4));


*/
/*
let hscResutl = {
    GPA:5.00,
    Bangla:"A+",
    English:"A+",
    Information_and_comunication_tecnology:'A+',
    Physics:'A+',
    Biology:'A+',
    Chemistry:'A+',
    Higher_Math:'A+'
}
console.log(hscResutl);
console.table(hscResutl);
*/

//Function Recurstion
/*
function factorial(n) {

    if (n == 1)
        return 1;

    return n * factorial(n - 1);

    //4*3!
    //4*3*2!
    //4*3*2*1! 
}
console.log(factorial(4));
*/
/*
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));

    // → (((1 * 3) + 5) * 3)
*/

//Problem//
/*==> You are making a program for a bus service.
A bus can transport 50 passengers at once.
Given the number of passengers waiting in the bus station as input, you need to calculate and output how many empty seats the last bus will have.

Sample Input:
126

Sample Output:
24

Explanation: The first bus will transport 50 passengers, leaving 126-50=76 in the station. The next one will leave 26 in the station, thus, the last bus will take all of the 26 passengers, having 50-26=24 seats left empty.
March 4, 2021;
*/

//Solve==>
/*
let মোট_যাত্রী = 126;
let যাত্রী_বাকিথাকবে =  মোট_যাত্রী % 50;

if (যাত্রী_বাকিথাকবে == 0) {
    console.log("আসন খালি নেই");
} else {
    let আসন_বাকিথাকবে = 50 - যাত্রী_বাকিথাকবে;
    console.log(আসন_বাকিথাকবে + " টি আসন বাকি থাকবে");
}
*/

//problem//
/*==> You need to make a countdown app
Given a number N as input ,output numbers from N to 1 on spearate lines.
Also when the current number is a multiple of 5,the app should output "Beep"

Sample Input:

12

sample Output:

12  //Is equal to 2 12 % 5
11  //Is equal to 1 11 % 5
10  //Is equal to 0 10 % 5
Beep //Is equal to 0 10 % 5

9   //Is equal to 4 9 % 5
8   //Is equal to 3 8 % 5
7   //Is equal to 2 7 % 5
6   //Is equal to 1 6 % 5
5   //Is equal to 0 5 % 5
Beep // Is equal to 0; 5 % 5

4   //Is equal to 4 4 % 5
3   //Is equal to 3 3 % 5
2   //Is equal to 2 2 % 5
1   //Is equal to 1 1 % 5
*/
/*
//Solve ==> 
for (let N = 12; N > 0; N--) {
    console.log(N);
    if (N % 5 == 0) {
        console.log("Beep");
    }
}
*/

//Problem
/*==> =================>

*/
