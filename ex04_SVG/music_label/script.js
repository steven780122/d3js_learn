// d3.select("#svg2")
//   .append("circle")
//   .attr("cx", 150)
//   .attr("cy", 120)
//   .attr("r", 50)
// d3.select("#svg2")
//   .append("rect")
//   .attr("x", 160)
//   .attr("y", 45)
//   .attr("width", 5)
//   .attr("height", 78)


 var svg = d3.select("#svg2");
 svg.append("circle")
    .attr({
    "cx": 150,
    "cy": 120,
    "r": 15});
svg.append("rect")
   .attr({
    "x": 160,
    "y": 45,
    "width": 5,
    "height": 78,
  })

