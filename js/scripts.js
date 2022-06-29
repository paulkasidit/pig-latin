//Test: "For words beginning with a vowel, add "way" to the end. "
//Code: pigLatin("away");
//Expected Output: "awayway"

//business user logic

function getFirstLetters(str){
  const firstLetters = str.split("").map(word => word[0]).join(''); 

  return firstLetters
}

function pigLatin(event){ 
  event.preventDefault();

  const wordArray = document.getElementById("wordArray").value;
  const vowelArray = ["a", "e", "i", "o", "u"];
  const firstLettersOfwordArray = getFirstLetters(wordArray);

  console.log(firstLettersOfwordArray); 

  if (wordArray.length > 1 && vowelArray.indexOf(wordArray) !== -1 ){
    console.log("pass");

  } else {
    console.log("fail")
    return false;
  }

  console.log("input: " + wordArray);

}

//user interface logic

window.addEventListener("load", function(){
  //event.preventDefault();

  const form  = document.getElementById("pigLatinForm");
  form.addEventListener("submit", pigLatin);

});





 