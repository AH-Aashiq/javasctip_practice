/*
//HOISTING WORKS ON ONLY FUNCTION DECLARATION NOT EXPRSSION
calcAge(2001);
function calcAge(year) {
    console.log(2020 - year);
}
*/
/*
//FUNCTION EXPRESSION
var retierment = function(year){
    console.log(65 - (2020 - year));
}
retierment(2000);

var name = 'Asiek'

function first() {
    var a = 'Hello';
    second();
    var x = a + name;
}

function second() {
    var b = 'hi';
    third();
    var z = b + name;
}

function third() {
    var c = 'hey';
    var z = c + name;
}
first();
*/
/*
var jonh = {
    name: 'Jonh',
    yearOfBirth: 2000,
    calculateAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

jonh.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 2002
};

mike.calculateAge = jonh.calculateAge;
mike.calculateAge();
*/
/*
var asiek = {
    name: 'Ariful haque',
    yearOfBirth: 1999,
    calculateAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
    }
}

asiek.calculateAge();

var fahim = {
    name: 'Fahim Ahmed',
    yearOfBirth: 2000
};

fahim.calculateAge = asiek.calculateAge;
fahim.calculateAge();
*/

//PIG GAME PROJECTS

























