const fibonacci = function(index) {
if(index < 0){
    return 'OOPS';
}
else {
    let seq = [1, 1];
    for(let i=2; i<=index; i++){
        seq[i] = seq[i-1] + seq[i-2];
    }
    return seq[index-1];
}
};

// Do not edit below this line
module.exports = fibonacci;
