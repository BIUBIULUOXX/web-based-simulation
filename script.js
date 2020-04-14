var w = 500,
    h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['hypertensive','non-hypertensive'];

//Data
var d = [
    [
        {axis: "Male", value: 37.6},
        {axis: "Female", value: 62.4},
        {axis: "Age: 0-19", value: 0.3},
        {axis: "Age: 20-39", value: 8.1},
        {axis: "Age: 40-59", value: 64.7},
        {axis: "Age: 60+", value: 64.7},
        {axis: "BMI-wide normal", value: 4.7},
        {axis: "BMI-wide overweight", value: 20.8},
        {axis: "BMI-wide mildly obese", value: 30.3},
        {axis: "BMI-wide moderately obese", value: 23.2},
        {axis: "BMI-wide severely obese", value: 20.9}
    ],[
        {axis: "Male", value: 46.9},
        {axis: "Female", value: 53.1},
        {axis: "Age: 0-19", value: 1.3},
        {axis: "Age: 20-39", value: 20.7},
        {axis: "Age: 40-59", value: 65.9},
        {axis: "Age: 60+", value: 12.2},
        {axis: "BMI-wide normal", value: 8.3},
        {axis: "BMI-wide overweight", value: 28.2},
        {axis: "BMI-wide mildly obese", value: 30.5},
        {axis: "BMI-wide moderately obese", value: 18.6},
        {axis: "BMI-wide severely obese", value: 14.4}
    ]
];

//Options for the Radar chart, other than default
var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 6,
    ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
    .selectAll('svg')
    .append('svg')
    .attr("width", w+300)
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)')
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("type of patients");

//Initiate Legend
var legend = svg.append("g")
    .attr("class", "legend")
    .attr("height", 100)
    .attr("width", 200)
    .attr('transform', 'translate(90,20)')
;
//Create colour squares
legend.selectAll('rect')
    .data(LegendOptions)
    .enter()
    .append("rect")
    .attr("x", w - 65)
    .attr("y", function(d, i){ return i * 20;})
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", function(d, i){ return colorscale(i);})
;
//Create text next to squares
legend.selectAll('text')
    .data(LegendOptions)
    .enter()
    .append("text")
    .attr("x", w - 52)
    .attr("y", function(d, i){ return i * 20 + 9;})
    .attr("font-size", "11px")
    .attr("fill", "#737373")
    .text(function(d) { return d; })
;