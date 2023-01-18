// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
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
  for (i=0; i <= textArray.length-1; i++) {
    if(omitOffensiveWords.includes(textArray[i].toLowerCase())) {
      console.log(textArray[i]);
      textArray[i] = "****"   
      console.log(textArray) 
    }
  }
}