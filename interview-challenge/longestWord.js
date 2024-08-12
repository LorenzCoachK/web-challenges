//  list of words of which I have to finde the longest one:
//  "Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];
/*
My understanding of this task:
1st: expected result: display the word with the most letters fron the list of words given in the variable "words"
2nd: expected display of result: I understand, that there is no given kind of dislay description e.g. a css-designed Box ==>
     so I´ll show it inside the console
3rd: expected variaton of list of words: so far I uderstand that the list of words isn´t fixed or strictly defined nor is it known that the list may vary with more words or less or other words ==>
    so I´ll assume that the list can be changed and may vary by sile typing new words inside the array "words"
4th: expected interaction with user or other interfaces that could or would change the input of words ==>
     so I´ll deinfe that I assume, that there isn´t any interface to observe

*/

/*
my first description of how to solve this task:
1) I have to read every word inside the array, from the first to the very last one
2) I have to count all letters of ewach of the words inside the array and I have to store the number for each word
3) I have to compare all the numbers of letters of all words inside the array with each other
4) I have to put out the word with the biggest number of letters 
*/

/*
algorithm for step 1:
read every word inside the array, get to know the first one and the last one to be sure, all words are known
set a count on all existing words, starting by (1) for the first one, add to the count +1 and end with the highest number at hte last word in the array.
if there isn´t a word left the list of words is read through and the highest number of the count is the number of words inside the count. 
by now I can start the count of numbers of letters in each word and can provide
 */
