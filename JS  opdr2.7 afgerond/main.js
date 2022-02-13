//Opdracht 1// Checken wat voor kledij je moet dragen.//
let outWheater;

function theTemp() {
    if (outWheater <= 10) {
        alert('Het is koud');20
    } else if (outWheater <= 16) {
        document.body.innerHTML += ('Het is niet warm, je kunt beter een jas aandoen');
        document.body.innerHTML += ('<br>');
    } else if (outWheater <= 24) {
        console.log ('Het is niet koud en niet heel warm');
    } else if (outWheater > 24) {
        document.body.innerHTML += ('Je hoeft vandaag geen jas aan');
        document.body.innerHTML += ('<br>');
    } else if (outWheater >= 30) {
        document.body.innerHTML += ('Je kunt je beter goed insmeren');
    }
}

outWheater = 9; 
theTemp ();
outWheater = 17;
theTemp ();
outWheater = 24;
theTemp ();
outWheater = 32;
theTemp ();


//Opdracht 2// Checken of er een voldoende of onvoldoende is gehaald.//
let aNumber; 

function thisNumber (aNumber) {
    let thisNumber = aNumber;
    if (thisNumber < 5.5) {
        alert('Je hebt een voldoende gehaald');
    } else if (thisNumber > 5.5) {
        alert('Je hebt een voldoende gehaald');
    }
}

aNumber = 8;
thisNumber(aNumber);



//opdracht 3// Checken of het nummer even of oneven is.//

const n = 2;
const x = 3;
const y = 66;
const z = 9;

function isEven(n, x, y, z) {
    let isEven = n;
    if (n%2==0) {
        document.body.innerHTML += ('true');
    } 
    else {
        document.body.innerHTML += ('false');
    }
    document.body.innerHTML += ('<br>');
    if (x%2==0) {
        document.body.innerHTML += ('true');
    } 
    else {
        document.body.innerHTML += ('false');
    }
    document.body.innerHTML += ('<br>');
    if (y%2==0) {
        document.body.innerHTML += ('true');
    } 
    else {
        document.body.innerHTML += ('false');
    }
    document.body.innerHTML += ('<br>');
    if (z%2==0) {
        document.body.innerHTML += ('true');
    } 
    else {
        document.body.innerHTML += ('false');
    }

}
        
    isEven(n,x,y,z);

