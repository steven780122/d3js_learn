
let random = function(min, max){
  let num = Math.random()*(max - min +1) + min;
  return Math.floor(num)
}


let svg =  d3.select("body").select("svg")
.attr({
   "width": 600,
   "height": 1200,
  });

for(let i = 0; i < 20; i++){
  let num = random(20, 300)
  svg.append("rect")
  .attr({
    x: 10, 
    y: 10+15*i, 
    width: num, 
    height: 10, 
    fill: "red" 
    });

    svg.append("text").attr({
      x: 10 + num + 15,
      y: 10+15*i+10,
      'font-size': "12"
    }).text(num)
    
}
  




