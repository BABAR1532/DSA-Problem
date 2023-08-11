 /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let new_String;
    let result_String = "";
    let i = s.length - 1;
    let flag = true;
    
    
    new_String = s.trim();
    
    while(i >= 0) {
       
        // Removing mutliple whitespaces
        while(new_String[i] === " ") {
            i--;
            flag = false;
        }
        
        // if whitespace >= 1 is present
        if(flag === false) result_String += " ";
        
        if(i < 0) break;
        
        let wordEnd = i;
        
        while(i >= 0 && new_String[i] !== " ") {
            i--;
        }
        
        let wordStart = i + 1;
        // Adding substring between wordStart and wordEnd
        result_String += new_String.substring(wordStart, wordEnd + 1);
    
    }
    
    return result_String;
    
};
