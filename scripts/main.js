let wordsprmt = prompt("input text");
let capword = wordsprmt.charAt(0).toUpperCase()+ wordsprmt.slice(1);
//console.log(capword)
//prints Word

//reverse string
function reverseString(){
    var str = prompt("Enter word to be reversed");
    let reverse = str.split('').reverse().join('');
   return reverse;
}

console.log(reverseString())
//prints reversed word

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumNum() {
    let arr = [10, 20, 30, 40, 50]
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
    console.log("sum ", arr[i])
}

sumNum()


function wordCount(){
    let wordy = prompt("Input the words")
    wordlent = wordy.length

    console.log(wordlent)
}

wordCount()
//printout the length of the character

