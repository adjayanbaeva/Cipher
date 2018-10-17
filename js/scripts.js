var sentence = prompt("Please enter your sentence");
console.log(sentence);

//First function
var firstFunction = function(){
  for(i=0; i<=sentence.length; i++){
    var firstResult = sentence.charAt(0).toUpperCase()
    return firstResult;
    
  }
  
}

console.log(firstFunction());