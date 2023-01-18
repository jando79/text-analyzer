// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

window.onload = function() {
  let text = "Zoinks a couple biffaroni words"

  const omitOffensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
  const textArray = text.split(" ");
  console.log(textArray)
  for (i=0; i <= textArray.length-1; i++) {  //makes index equaL LENGTH. variable "i" is iterator and pointer (i.e., where to start) "i" = 0 because that is where index starts
    if(omitOffensiveWords.includes(textArray[i].toLowerCase())) {
      console.log(textArray[i]);
      textArray[i] = "****"   
      console.log(textArray) //log to track individual changes
    }
  }
}


// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});