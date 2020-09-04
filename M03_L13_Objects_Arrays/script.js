// Deel 1
let person = {
  name: 'Lin Ny',
  age: 40
};

console.log(person);

let name = 'Lin Ny';
console.log(name);

let age = 40;
console.log(age);

// dot notation

person.name = 'Lin Ny';
console.log(person.name);

person.age = 40;
console.log(person.age);

// bracket notation
person['name'] = 'Lin Ny';
console.log(person.name);

person['age'] = 40;
console.log(person.age);

// Is dit de bedoeling?
let rapport = {
  evaluations: [7, 10, 9]
};

console.log(rapport);

console.log(rapport.evaluations);

// Deel 2

let selectedColors = ['groen', 'blauw', 'rood', 'geel'];
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);

//Is dit de bedoeling? NEEE!
console.log(selectedColors.length - 1); //hier komt een _getal_ uit, namelijk het aantal objecten in de array
// Dit wel!Je wil het laatste object van de array selected colors, en om die te vinden maak je gebruik van de length.method
console.log(selectedColors[selectedColors.length - 1]); //hier haal ik uit de array, de waarde op, die ik krijg door het nummer van de array -1 op te geven





selectedColors.push('geel', 5);

console.log(selectedColors);


selectedColors.push('{greeting: "Hi ik ben een object"}');

console.log(selectedColors);


console.log(selectedColors[5]);


//Deel 3

const catBreeds = [{
  name: "Abyssinian",
  description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
  dog_friendly: 4,
  energy_level: 5,
  life_span: "14 - 15",
  origin: "Egypt",
  temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
  wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
  food: {
    favourite_food: "fish",
    medium_liked_food: "dried fruits",
    disliked_food: "walnuts"
  }
},
{
  name: "Aegean",
  description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
  dog_friendly: 4,
  energy_level: 53,
  life_span: "9- 12",
  origin: "Greece",
  temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
  wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
  food: {
    favourite_food: "tuna",
    medium_liked_food: "canned food",
    disliked_food: "all fruits"
  }
},
{
  name: "American Bobtail",
  description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
  dog_friendly: 5,
  energy_level: 3,
  life_span: "11 - 15",
  origin: "United States",
  temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
  wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
  food: {
    favourite_food: "meaty things",
    medium_liked_food: "tuna",
    disliked_food: "canned food"
  }
}
]

//1

console.log(catBreeds[2].name);

//2 
console.log(catBreeds[0].energy_level);

//3
console.log(catBreeds[1].temperament[0]);

//4
console.log(catBreeds[2].temperament[catBreeds[2].temperament.length - 1]);

//5
console.log(catBreeds[2].food.favourite_food);



