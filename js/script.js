// Basic exercise 1 | Crystal Gazer

document.write("<h1> Basic exercise 1 | Crystal Gazer </h1>")




function crystalGazer (job_title, location, partners_name, number_children){
	/*var job_title = "doctor";
	var location = "Vienna";
	var partners_name = "Frida"; 
	var number_children = "3 children"; */
	document.write("You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + number_children + ".")
}



crystalGazer("Advocat", "Berlin", "Susan", "4 children");

document.write("<hr>");


// Basic 2 | Age Calculator

document.write("<h1> Basic 2 | Age Calculator </h1>")


function ageCalculator (birthYear, currentYear){
	var age = currentYear - birthYear; 
	var agePossible = age - 1;

	document.write(" Your born in " + birthYear + " so you are " + age + " years old. <br>"); 
	document.write(" Your born in " + birthYear + " so you are either " + age + " years old or "+ agePossible + " years old. ");
}

ageCalculator(1989, 2018);

document.write("<hr>");

// Basic 3 | Age Calculator-improved

document.write("<h1> Basic 3 | Age Calculator-improved </h1>")


function ageCalculator (birthYear, currentYear){
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var age = currentYear - birthYear; 
	var agePossible = age - 1;

	document.write(" Your born in " + birthYear + " so you are " + age + " years old.  <br>");
	document.write(" Your born in " + birthYear + " so you are either " + age + " years old or "+ agePossible + " years old. ");
}

ageCalculator(1989,);

document.write("<hr>");

// Basic 4 | Degree-Radian Conversion

document.write("<h1> Basic 4 | Degree-Radian Conversion</h1>");

function degreeCalculator(degree){
	var radian = degree * (Math.PI/180)
	document.write("You passed " + degree + " so this equals " + radian +". <br>");
	return radian; 
}


degreeCalculator(22);

document.write("<hr>");

// Basic 5 | Area and Volume of a box

document.write("<h1> Basic 5 | Area and Volume of a box</h1>");



function boxCalculation(width, height, depth){
	var area = width*height; 
	var volume = width*height*depth;

	return "The area of the box: " + area + "<br>" + "The volume of the box is: " + volume + "<br>";

	//return boxvalues [area, volume];
	//document.write(boxvalues[0][1]);
}


document.write(boxCalculation(7,2,5));

document.write("<hr>");



// Intermediate 1 | Capitalize

document.write("<h1> Intermediate 1 | Capitalize</h1>");

// function upCase(str){ 
// 	var first = str.charAt(2); 
// };
// document.write(upcase(hallo));

function myFunction() {
    var str = "HELLO WORLD";
    var res = str.charAt(2)
    document.write(res);
}













