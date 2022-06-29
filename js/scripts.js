function pigLatin(event){ 

  const wordArray = document.getElementById("wordArray").value;

  console.log(wordArray)

}

window.addEventListener("load", function(){
  event.preventDefault();

  const form  = document.getElementById("pigLatinForm");
  form.addEventListener("submit", pigLatin);

});