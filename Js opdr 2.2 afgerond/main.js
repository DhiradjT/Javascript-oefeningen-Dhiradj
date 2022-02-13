// 2.2 Interactie
const naam = prompt('Wat is je naam', '?');
alert(`Jouw naam is ${naam}`);

const result = confirm('Mogen wij cookies bewaren?');
if (result) {
  alert('Je bent het er mee eens');
} else {
  alert('Je bent het er NIET mee eens');
}


//const myCity = 'Den Haag';
//aler('Ik woon in ' + myCity);
// De fout is de alert er staat namelijk aler ipv alert

