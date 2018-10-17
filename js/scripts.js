var sentence = prompt("Please enter your sentence");
console.log(sentence);

//First function
var firstFunction = function(){
  for(i=0; i<=sentence.length; i++){
    var lastLetter = sentence.length-1;
    
    var firstResult = sentence.charAt(0).toUpperCase()+sentence.substr(lastLetter).toUpperCase();
    return firstResult;
    
  }
  
}

console.log(firstFunction());