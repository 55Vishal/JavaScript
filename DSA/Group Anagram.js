// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// let s = str.split('').sort().join('')


// Input: strs = [""] 
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// let strs = ["eat","tea","tan","ate","nat","bat"];
 
// let newArr=[]
// for(let i=0; i<strs.length; i++){
//     if(strs[i]==","){
//         strs[i].push(newArr)
//     }
//     console.log(newArr)
// }


  
//  function Anagram(str1, str2) {
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let obj={};
//     for(let letter of str1 ){
//         obj[letter] = (str2[letter]) +1;
//     }
//     for(let j of str2){
//         if(!obj[j]){
//             return false;
//         }
//         obj[j]-=1;
//     }
//     return false;
//  }
 
//  console.log(Anagram(str1, str2))

var groupAnagrams = function(strs) {
    let map = {}

    for(let str of strs){
        let s = str.split('').sort().join('')

        console.log(s)
        if(!map[s]) 
        map[s] = []
        map[s].push(str)
    }
    return Object.values(map)
};

 console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

 