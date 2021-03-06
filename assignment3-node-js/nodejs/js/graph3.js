
// var margin = {top: 20, right: 20, bottom: 200, left: 60},
//     width = 960 - margin.left - margin.right,
//     height = 700 - margin.top - margin.bottom;

// var x = d3.scale.ordinal()
//     .rangeRoundBands([0, width], .1);

// var y = d3.scale.linear()
//     .rangeRound([height, 0]);

// var color = d3.scale.ordinal()
//     .range(["#98abc5", "#ffaa80", "#990000","#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"," #80ff80","#80b3ff","#1affff"]);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .tickFormat(d3.format(".2s"));

//         var tip = d3.tip()
//           .attr('class', 'd3-tip')
//           .offset([-10, 0]);
//         //   .html(function(d) {
//         //     // alert()
//         //     return "<strong></strong>  <span style='color:red'>" + (d.y1-d.y0) +" </span>";
//         //   });

// var svg = d3.select("#chart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//     svg.call(tip);

// d3.json("../nodejs/mofile3.json", function(error, data) {
//   if (error) throw error;

//   color.domain(d3.keys(data[0]).filter(function(key) { return key !== "category"; }));
// //console.log(d3.keys(data[0]).filter(function(key) { return key !== "key"; }));
//   data.forEach(function(d) {
//     var y0 = 0;
//     d.ages = color.domain().map(function(name) {return {name: name, y0: y0, y1: y0 += d[name]}; });
//     d.total = d.ages[d.ages.length - 1].y1;

//   });

//   //data.sort(function(a, b) { return b.total - a.total; });

//   x.domain(data.map(function(d) { return d.category; }));
//   y.domain([0, d3.max(data, function(d) { return d.total; })]);

//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//       .selectAll("text")
//           .style("text-anchor", "end")
//           .attr("dx", "-.8em")
//           .attr("dy", ".15em")
//           .attr("transform", function(d) {
//               return "rotate(-65)"
//               });
// ;

//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//       .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Population");

//   var area = svg.selectAll(".area")
//       .data(data)
//       .enter().append("g")
//       .attr("class", "g")
//       .attr("transform", function(d) { return "translate(" + x(d.category) + ",0)"; });

//   area.selectAll("rect")
//       .data(function(d) { return d.ages; })
//       .enter().append("rect")
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) {return y(d.y1); })
//       .attr("height", function(d) { return y(d.y0) - y(d.y1); })
//       .style("fill", function(d) { return color(d.name); })
//       .on('mouseover', tip.show)
//       .on('mouseout', tip.hide);

//   var legend = svg.selectAll(".legend")
//       .data(color.domain().slice().reverse())
//     .enter().append("g")
//       .attr("class", "legend")
//       .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

//   legend.append("rect")
//       .attr("x", width - 18)
//       .attr("width", 18)
//       .attr("height", 18)
//       .style("fill", color);

//   legend.append("text")
//       .attr("x", width -24)
//       .attr("y", 9)
//       .attr("dy", ".35em")
//       .style("text-anchor", "end")
//       .text(function(d) { return d; });

// });








var margin = {top: 20, right: 20, bottom: 30, left: 60},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.ordinal()
 .range(["#98abc5", "#ffaa80", "#990000","#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"," #80ff80","#80b3ff","#1affff"]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("../nodejs/mofile3.json", function(error, data) {
  if (error) throw error;

  var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "category"; });

  data.forEach(function(d) {
    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
  });

  x0.domain(data.map(function(d) { return d.category; }));
  x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
  y.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Population");

  var state = svg.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "category")
      .attr("transform", function(d) { return "translate(" + x0(d.category) + ",0)"; });

  state.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return x1(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .style("fill", function(d) { return color(d.name); });

  var legend = svg.selectAll(".legend")
      .data(ageNames.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

});