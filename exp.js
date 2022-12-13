console.log("hi frm zee");
const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
console.log("hi world");
const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The sky is blue!");
} else {
    console.log("The sky is … not blue?");
}

if (2 + 2 === 4) {
    console.log(
        "Oh thank god, the fundamental principles of mathematics still hold true."
    );
} else {
    console.log("Uh, panic?");
}
const repeat = 10;
const character = "s";

let word = ""; // start with an empty string
for (let i = 0; i < repeat; i++) {
    word = word + character;
}

console.log(word);

function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100,
};
console.log(person);
console.log(person.name);

const dog = {
    name: "dog",
    speak() {
        console.log("woof woof");
    },
};

dog.speak();

const me = {
    name: {
        first: "Brian",
        last: "Holt",
    },
    location: {
        city: "Seattle",
        state: "WA",
        country: "USA",
    },
};

console.log(me.name.first);
console.log(me.location.state);