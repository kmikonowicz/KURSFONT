console.log("Elo")

const x=1;
let y=1;

console.log('y=',y,',x=',x)

const personName="John"
// console.log(personName)

// OBIEKTY
const person={
    name :"John",
    age : 38,
    "co mowi": "nic",
    outfit :{
        hat : "Chanel",
        shirt : "Supreme",
        boots : "Nike"
    }
}

console.log(person['co mowi'])

// console.log(person)
// console.log(person.name)
// console.log(person.outfit.boots)

// TABLICA

const people = ['John', 'Joanna', 'Josh']

console.log(people)
console.log(people[1])

// FUNKCJA
function przyklad(argument='default', drugiArgument) {
    console.log("siemka")
    console.log("wykonuje się", argument)
    console.log("wykonuje się", drugiArgument)
    console.log("nara")
    return 'zwracam wartość z' + argument
}

// wywołanie
przyklad('argumentem', 'drugiArgument')
przyklad()

const zwrot = przyklad('arg')

console.log(zwrot)


console.log(console)
console.log(console.memory)
console.log('argument')

const dog = {
    voice: () =>{
        console.log('hał hał')
    }
}
dog.voice()

console.log( document )

const h1 = document.querySelector('h1')
console.log(h1)
h1.style.color='red'
h1.innerHTML="TEST"

let count =0;
function counter(){
    count++;
    console.log(count)
}
// przypisanie wydarzenia do kliknicia na h1
h1.oneclick = function(){
    counter()
}

// warunek
let a=50;
const b=4;
if(a<2){
    console.log("a jest mniejsze od 2")
} else{
    console.log("a nie jest mniejsze od 2")
}