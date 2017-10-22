
let random = function(min, max){
    let num = Math.random()*(max - min +1) + min;
    
    
    return Math.floor(num)
}

let launch = function(){
    // 1911~2016
    let num = random(1911, 2016)
    d3.select("p").text(num)
}