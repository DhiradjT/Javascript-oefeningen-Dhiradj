//Losse functie met een alert als er op de button geklikt wordt//
function buttonFunction() {
    alert('Er is op de button geklikt');
}

// Een querySelector die de class ophaalt//
const myBtn = document.querySelector('.myButton');
if (myBtn) {
    console.log('Het element bestaat');
} else {
    ('Het element bestaat niet');
}
myBtn.addEventListener('click', buttonFunction);    //EventListener die de juiste functie uitvoert//






