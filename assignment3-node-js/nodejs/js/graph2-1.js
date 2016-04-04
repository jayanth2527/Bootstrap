
var margin = {top: 20, right: 20, bottom: 200, left: 90},
    width = 1100 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("../nodejs/mofile2-1.json", function(error, data) {

 data.forEach(function(d) {
        d.areaname=d.areaname;
        d.graduate_population =+d.graduate_population;
        console.log(d.graduate_population);
    });

  if (error) throw error;

  x.domain(data.map(function(d) { return d.areaname; }));
  y.domain([0, d3.max(data, function(d) { alert(d.graduate_population);  return d.graduate_population; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("graduate_population");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.areaname); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.graduate_population); })
      .attr("height", function(d) { return height - y(d.graduate_population); });
});