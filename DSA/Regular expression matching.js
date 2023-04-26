//Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not 

var isMatch = function(s, p) {

    let regex = new RegExp(p)
	return  s.match(regex) ? s === s.match(regex)[0] : false
};