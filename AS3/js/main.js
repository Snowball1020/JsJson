
//Step One - create variables that store a reference to header and section elements 
let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = "Items.json";

let request = new XMLHttpRequest(); 

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
    let iScreamInc = request.response; 
    console.log(iScreamInc);
    populateHeader(iScreamInc); 
    topFlavours(iScreamInc);  
  }
  