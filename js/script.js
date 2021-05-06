'use strict';
let finalScore = 0;
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
  finalScore++;
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
  finalScore++;
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
  finalScore++;
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
  finalScore++;
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
  finalScore++;
} else if (upperCaseAnimals === 'YES' || upperCaseAnimals === 'Y') {
  alert('That\'s a truly wonderful thing to hear. I love animals they are so nice.');
} else if (lowerCaseAnimals === 'no' || lowerCaseAnimals === 'n') {
    alert('It is okay not everyone is a good person.');
  } else if (upperCaseAnimals === 'NO' || upperCaseAnimals === 'N') {
    alert('It is okay not everyone is a good person.');
} else {
  alert('Looks like you didn\'t understand the question.');
}





for(let i = 0; i < 4; i++){
  let userGuess = prompt('Guess a number between 1 and 50. I will tell you if it is too high or too low.');
  let userGuessParse = parseInt(userGuess);

  if (userGuessParse === 32){

  alert('Wow that is amazing you guessed correctly');
  finalScore++;
  break;
  
}
  else if(userGuessParse< 32){
    alert('Too Low!');
   
  }

  else if(userGuessParse> 32){
    alert('Too High!');
   
  }
}


let favFoods = ['Burritos', 'Hamburgers', 'Watermelons', 'Jalapeno Poppers', 'Macaroni and Cheese', 'Pasta' , 'Ice Cream'];


for (let j = 0; j <= 6; j++ ){

let guessFoods = prompt('Try to guess my favorite foods in 6 guesses I have 7 I am thinking of 6 of them are plural. The first letter is capitalized.');
let flag = false;
  for (let i = 0; i < favFoods.length; i++) {
    
    
    
    console.log(favFoods[i]);

      if (favFoods[i] === guessFoods) {
        alert('You got it!!!!');
        finalScore++;
        flag = true;
        break;
      }
     
    }
    if (flag){
      break;
    }
    else{
      alert('nope try again');

    }
  }
    alert('Your final Score was ' + finalScore + ' Out of 7')
