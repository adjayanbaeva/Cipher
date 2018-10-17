var sentence = prompt("Please enter your sentence");
console.log(sentence);

//First function that will capitilize the first and the last letter of the sentence
var firstFunction = function(){
  for(i=0; i<=sentence.length; i++){
    var lastLetter = sentence.length-1;
    
    var firstResult = sentence.charAt(0).toUpperCase()+sentence.substr(lastLetter).toUpperCase();
    return firstResult;
    }
}
console.log(firstFunction());


//Second function will reverse the order of 2 letters that are output of the firstFunction
var secondFunction = function(){
  
  var splitLetters = firstFunction().split("");
  var reversedLetters = splitLetters.reverse().join('');
  return reversedLetters;
}
console.log(secondFunction());


//Third function will concatinate the result from the second function to the original sentence.
var thirdFunction = function(){
  sentenceAndReversedLetters=sentence.concat(secondFunction());
  return sentenceAndReversedLetters;
}
console.log(thirdFunction());

//Forth function will count the number of letters in the original sentence, divide it by two(rounding down if necessary) and output the letter at this index. Concatinate this letter at the beginning of the original sentence.
var forthFunction = function(){
  var numbersInSentence = sentence.length;
  var divideByTwo = Math.floor(numbersInSentence/2);
  var outputLetterAtIndex = sentence.charAt(divideByTwo);
  var concatLetterToThirdFunction = outputLetterAtIndex.concat(thirdFunction());
  
  return concatLetterToThirdFunction;

  
}
console.log(forthFunction());



