Describe: Word Counter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("             ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Describe: omitOffensiveWords()

Test: "It should identify the word 'zoinks' as an offensive word."
Code:
const text = "zoinks"
const word = "zoinks"
omitOffensiveWords(word, text);
Expected Output: 1 occurrence

Test: "It should identify the word 'muppeteer' as an offensive word."
Code:
const text = "muppeteer"
const word = "muppeteer"
omitOffensiveWords(word, text)
Expected Output: 1 occurence

Test: "It should identify the word 'biffaroni' as an offensive word."
Code:
const text = "biffaroni"
const word = "biffaroni"
omitOffensiveWords(word, text)
Expected Output: 1 occurence

Test: "It should identify the word 'loopdaloop' as an offensive word."
Code: 
const text = "loopdaloop"
const word= "loopdaloop"
omitOffensiveWords(word, text)
Expected Output: 1 occurence

Test: "It should omit offensive words from all text."
Code:
const text = "This biffaroni zoinks to muppeteer the loopdaloop a lot."
const word = "zoinks, muppeteer, biffaroni, loopdaloop"
omitOffensiveWords(word, text)
Expected Output: 4 omissoins

Test: "It should return a word match regardless of case."
Code:
const text = "Zoinks BIFFARONI muppeteer loopDAloop";
const word = "zoinks, muppeteer, biffaroni, loopdaloop";
omitOffensiveWords(word, text);
Expected Output: 4 omissions

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Zoinks, loopDAloop; biffaroni MUPPETEER!";
const word = "zoinks, muppeteer, biffaroni, loopdaloop";
omitOffensiveWords(word, text);
Expected Output: 4 omissions