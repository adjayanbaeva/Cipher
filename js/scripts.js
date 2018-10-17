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