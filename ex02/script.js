function showMsg(msg1, msg2) {
    alert(msg1 + msg2);
}


let random = function(min, max){
    let num = Math.random()*(max - min +1) + min;
    
    
    return Math.floor(num)
}