'use strict';

let userName = prompt('Hello, what is your name?')

alert('Well hello there '+ userName + ' It is so nice to meet you I want to get to know you a little better.')

// ask a question that expects a yes or no answer
let videoGames = prompt('Do you like video games? Please answer with yes or no');

console.log(videoGames);


let lowerCaseVideoGames = videoGames.toLowerCase();
let upperCaseVideoGames = videoGames.toUpperCase();

console.log(lowerCaseVideoGames);
console.log(upperCaseVideoGames);

if (lowerCaseVideoGames === 'yes' || lowerCaseVideoGames === 'y') {
  alert('That\'s a truly wonderful thing to hear. I think they are just amazing.');
} else if (upperCaseVideoGames === 'YES' || upperCaseVideoGames === 'Y') {
  alert('That\'s a truly wonderful thing to hear. I think they are just amazing.');
} else if (lowerCaseVideoGames === 'no' || lowerCaseVideoGames === 'n') {
    alert('It is okay not everyone likes to have fun in their life.');
}else if (upperCaseVideoGames === 'NO' || upperCaseVideoGames === 'N') {
    alert('That\'s a truly wonderful thing to hear. I think they are just amazing.');
} else {
  alert('Looks like you didn\'t understand the question.');
}


let travel = prompt('Do you ever just want to travel? Please answer with yes or no');

console.log(travel);


let lowerCaseTravel = travel.toLowerCase();
let upperCaseTravel = travel.toUpperCase();

console.log(lowerCaseTravel);
console.log(upperCaseTravel);

if (lowerCaseTravel === 'yes' || lowerCaseTravel === 'y') {
  alert('That\'s wonderful I want to go to Europe someday.');
} else if (upperCaseTravel === 'YES' || upperCaseTravel === 'Y') {
  alert('That\'s wonderful I want to go to Europe someday.');
} else if (lowerCaseTravel === 'no' || lowerCaseTravel === 'n') {
    alert('It is okay not everyone likes to have get out of the house.');
  } else if (upperCaseTravel === 'NO' || upperCaseTravel === 'N') {
    alert('It is okay not everyone likes to have get out of the house.');
} else {
  alert('Looks like you didn\'t understand the question.');
}


let fly = prompt('Do you wish you could fly? Please answer with yes or no');

console.log(fly);


let lowerCaseFly = fly.toLowerCase();
let upperCaseFly = fly.toUpperCase();

console.log(lowerCaseFly);
console.log(upperCaseFly);

if (lowerCaseFly === 'yes' || lowerCaseFly === 'y') {
  alert('Wouldn\'t that be just so much fun?');
} else if (upperCaseFly === 'YES' || upperCaseFly === 'Y') {
  alert('Wouldn\'t that be just so much fun?');
} else if (lowerCaseFly === 'no' || lowerCaseFly === 'n') {
    alert('It is okay not everyone has imagination.');
  } else if (upperCaseFly === 'NO' || upperCaseFly === 'N') {
    alert('It is okay not everyone has imagination.');
} else {
  alert('Looks like you didn\'t understand the question.');
}


let trillionaire = prompt('Are you a trillionaire? Please answer with yes or no');

console.log(trillionaire);


let lowerCaseTrillionaire = trillionaire.toLowerCase();
let upperCaseTrillionaire = trillionaire.toUpperCase();

console.log(lowerCaseTrillionaire);
console.log(upperCaseTrillionaire);

if (lowerCaseTrillionaire === 'yes' || lowerCaseTrillionaire === 'y') {
  alert('That\'s great I should have put my paypal in here in case ya know, you had some extra coin hah.');
} else if (upperCaseTrillionaire === 'YES' || upperCaseTrillionaire === 'Y') {
  alert('That\'s great I should have put my paypal in here in case ya know, you had some extra coin hah.');
} else if (lowerCaseTrillionaire === 'no' || lowerCaseTrillionaire === 'n') {
    alert('Me neither');
  } else if (upperCaseTrillionaire === 'NO' || upperCaseTrillionaire === 'N') {
    alert('Me neither');
} else {
  alert('Looks like you didn\'t understand the question.');
}


let animals = prompt('Last question. Do you like animals? Please answer with yes or no');

console.log(animals);


let lowerCaseAnimals = animals.toLowerCase();
let upperCaseAnimals = animals.toUpperCase();

console.log(lowerCaseAnimals);
console.log(upperCaseAnimals);

if (lowerCaseAnimals === 'yes' || lowerCaseAnimals === 'y') {
  alert('That\'s a truly wonderful thing to hear. I love animals they are so nice.');
} else if (upperCaseAnimals === 'YES' || upperCaseAnimals === 'Y') {
  alert('That\'s a truly wonderful thing to hear. I love animals they are so nice.');
} else if (lowerCaseAnimals === 'no' || lowerCaseAnimals === 'n') {
    alert('It is okay not everyone is a good person.');
  } else if (upperCaseAnimals === 'NO' || upperCaseAnimals === 'N') {
    alert('It is okay not everyone is a good person.');
} else {
  alert('Looks like you didn\'t understand the question.');
}
