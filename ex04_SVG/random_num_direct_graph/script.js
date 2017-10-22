d3.select("body").select("svg")
.attr({
   "width": 600,
   "height": 1200,
  });

for(let i = 0; i < 10; i++){
  d3.select("svg")
  .append("rect")
  .attr({
    x: 10, 
    y: 10+15*i, 
    width: 20+20*i, 
    height: 10, 
    fill: "red" 
    });


}
  




