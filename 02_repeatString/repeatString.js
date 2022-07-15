const repeatString = function(string, number) {
    let para = '';
    if(number < 0){
        return 'ERROR';
    }
    else{
        for (let i=0; i<number; i++){
            para+=string;
        }
        return para;
    }
};

// Do not edit below this line
module.exports = repeatString;
