const reverseString = function(text) {
    let reversedText = '';
    for(i=text.length-1; i>=0; i--){
        reversedText += text[i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
