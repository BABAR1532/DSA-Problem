//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function printArray(res, n) {
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+="$";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        let res = obj.encode(str);
        console.log(res);
    }
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @returns {string} 
 */
 
class Solution {
    encode(str){
        // code here
        let encodedString = "";
        let count = 1;
        
        for(let i = 0; i < str.length; i++) {
            
            // comparing the current character with the next one
            if(str[i] === str[i+1]) {
                count++;
            } else {
                // Append the string to encoded manner
                encodedString += str[i] + count.toString();
                // reset after appending
                count = 1;
            }
        }
        
        return encodedString;
    }
}


