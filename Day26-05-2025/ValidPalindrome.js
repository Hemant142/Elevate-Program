// A phrase is a palindrome if, after converting all uppercase letters into lowercase 
// letters and removing all non-alphanumeric characters, it reads the same forward and 
// backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 


console.log(ValidPalindrome("A man, a plan, a canal: Panama"))


function ValidPalindrome(s) {
    let regix=/[a-zA-Z0-9]/
    let str=""
    for(let i=0;i<s.length;i++){
      if(regix.test(s[i])==true){
        str+=s[i].toLowerCase()
      }
    }
    let rev= str.split("").reverse().join("")
    console.log(rev)
    if(rev==str){
        return true
    }else{
        return false
    }
};