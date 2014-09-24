// JavaScript Document

var firstName, firstColor; <!-- initialization -->
var lastName, lastColor;
var email, eColor;
var phone, phoColor;
var button, form, clear_Button;
var fn_Error;
var ln_Error;
var email_Error;
var phone_Error;
var info, confirmation;
var digtest = /\d/; <!-- digit test -->
var photest = /\(?\d{3}\)?[\.\-\s]?\d{3}[\.\-\s]?\d{4}/; <!-- phone test -->
var emtest = /[A-Za-z](\w*\.?\w*)@[A-Za-z](\w*\.?\w{1,3}){2}/; <!-- email test -->
var errors = 0;
var TooManyVariables = true;

window.onload = function()<!-- does function when the page is fully loaded -->
{
firstName = document.getElementById("firstName"); <!-- loading the variables -->
lastName = document.getElementById("lastName");
email = document.getElementById("email");
phone = document.getElementById("phone");
button = document.getElementById("button1");
fn_Error = document.getElementById("fn_Error");
ln_Error = document.getElementById("ln_Error");
email_Error = document.getElementById("email_Error");
phone_Error = document.getElementById("phone_Error");
info = document.getElementById("info");
firstColor = document.getElementById("firstColor");
lastColor = document.getElementById("lastColor");
eColor = document.getElementById("eColor");
phoColor = document.getElementById("phoColor");
confirmation = document.getElementById("confirmation");
form = document.getElementById("form");
clear_Button = document.getElementById("clear_Button");

console.log(localStorage.full);

clear_Button.onclick = function()
{localStorage.clear();}

if (localStorage.full != undefined)
{confirmation.style.visibility="visible";
	info.innerHTML = localStorage.first + "<br />" + localStorage.last + "<br />" + localStorage.email + "<br />" + localStorage.phone;
	form.style.visibility="hidden";} 

if (localStorage.full == undefined)
{console.log("Please enter your info...")}

button.onclick = function() <!-- function for the button -->
{
	errors = 0;
	
	if(firstName.value == "") <!-- testing first name for null -->
	{fn_Error.innerHTML = "*"
	firstColor.style.color="red"
	errors = 1;}
	else if(digtest.test(firstName.value))
	{fn_Error.innerHTML = "*"
	firstColor.style.color="red"
	errors = 1
	alert("Numbers Not Allowed In Name Fields!");}
	else
	{fn_Error.innerHTML = "";
	firstColor.style.color="black";}
	
	if(lastName.value == "")
	{ln_Error.innerHTML = "*"
	lastColor.style.color="red"
	errors = 1;}
	else if(digtest.test(lastName.value))
	{ln_Error.innerHTML = "*"
	lastColor.style.color="red"
	errors = 1
	alert("Numbers Not Allowed In Name Fields!");}
	else
	{ln_Error.innerHTML = "";
	lastColor.style.color="black";}
	
	if(email.value == "")
	{email_Error.innerHTML = "*"
	eColor.style.color="red"
	errors = 1;}
	else if (emtest.test(email.value) == false)
	{email_Error.innerHTML = "*"
	eColor.style.color="red"
	errors = 1
	alert("Invalid Email Address");}
	else
	{email_Error.innerHTML = "";
	eColor.style.color="black";}
	
	if(phone.value == "")
	{phone_Error.innerHTML = "*"
	phoColor.style.color="red"
	errors = 1;}
	else if(photest.test(phone.value) == false)
	{phone_Error.innerHTML = "*"
	phoColor.style.color="red"
	errors = 1
	alert("Invalid Phone Number!");}
	else
	{phone_Error.innerHTML = "";
	phoColor.style.color="black";}
	
	if(errors == 0)
	{confirmation.style.visibility="visible"; <!-- makes confirmation visable, and fills it -->
	info.innerHTML = firstName.value + "<br />" + lastName.value + "<br />" + email.value + "<br />" + phone.value;
	form.style.visibility="hidden"; <!-- hides the form -->
	
	var local_json = {"FirstName":firstName.value, "LastName":lastName.value, "Email":email.value, "Phone Number":phone.value};
	
	
	localStorage.setItem('full', JSON.stringify(local_json));
	localStorage.setItem('first', JSON.stringify(firstName.value));
	localStorage.setItem('last', JSON.stringify(lastName.value));
	localStorage.setItem('email', JSON.stringify(email.value));
	localStorage.setItem('phone', JSON.stringify(phone.value));
	
	
	}
	var obj = {"Info":[ <!-- makes object, loads it with the data, and spits it out to the console -->
	{"FirstName":firstName.value, "LastName":lastName.value, "Email":email.value, "Phone Number":phone.value}]}
	//console.log(obj);
	console.log(local_json);
	
}	
}
