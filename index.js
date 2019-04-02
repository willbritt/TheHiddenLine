var dataP = d3.json("classData.json");




var screenSettings = {
  width: window.innerWidth * 0.8,
  height: window.innerHeight * 0.8
};

var marginSettings = {
  top:60,
  bottom: 80,
  left: 80,
  right: 0
}

var drawLineChart = function(dataSet, svgSelector, selectedPerson, screen, margins)
//This function is called at the bottom of the code.
{
  console.log("start")
  //
  var quizData = dataSet[0].quizes
  console.log("QuizData", quizData)
  //Draw a histogram using the selectedDay's info
  var graphWidth  = screen.width - margins.left - margins.right;
  var graphHeight = screen.height - margins.top - margins.bottom;
  var borderWidth = 1;

  var xScale = d3.scaleLinear()
                .domain([0, quizData.length])
                .range([0, graphWidth])
  // var xAxisScale = d3.scaleLinear()
  //                   .domain([0, dataSet[day].length])
  //                   .range([0, graphHeight]);

  var yScale = d3.scaleLinear()
                .domain([0, 10])
                .range([0, graphHeight]);

  var yAxisScale = d3.scaleLinear()
                .domain([0, quizData.length])
                .range([graphHeight, 0]);

  var yAxis = d3.axisLeft()
                .scale(yAxisScale);


  var colorScale = d3.scaleOrdinal(d3.schemeAccent);

  var graphSVG = d3.select(svgSelector)
              .attr("width", screen.width)
              .attr("height", screen.height);


  graphBorder = graphSVG.append("rect")
                     .attr("border-style", "solid")
                     .attr("x", margins.left)
                     .attr("y", margins.top)
                     .attr("width", graphWidth)
                     .attr("height", graphHeight)
                     .attr("fill", "#d5f4e6")
                     .style("stroke", "black")
                     .style("stroke-width", borderWidth)
                     .classed("graph-border", true);


  var graphData = graphSVG.append("g")
                    .attr("x", margins.left)
                    .attr("y", margins.top)
                    .classed("graph-data", true);

  //
  //
  // var yAxis = graphSVG.append("g")
  //                     .call(yAxis)
  //                     .attr("transform", function(){
  //                     return "translate(" + (margins.left - 3) + "," + margins.top + ")";
  //                     });
var lineDrawer = d3.line()
                  .x(function(dayObj){return dayObj.day})
                  .y(function(dayObj){return dayObj.grade})

 var line = graphData.append("path")
                      .datum(quizData)
                      .attr("d", lineDrawer)
                      .attr("fill", colorScale("quiz"))

  var xLabel = graphSVG.append("text")
                        .text("Day")
                        .attr("x", function(){return graphWidth/2 + margins.left - 35})
                        .attr("y", function(){return graphHeight + margins.top + 70})
                        .attr("font-size", 25)

    var yLabel = graphSVG.append("text")
                          .text("Score(%)")
                          .attr("x", function(){return margins.left - 50})
                          .attr("y", function(){return margins.top - 10})
                          .attr("font-size", 20)
//var graphBars = graphData.selectAll("rect")
                     // .data(scoreFrequencies)
                     // .enter()
                     // .append("rect")
                     // .attr("width", barWidth)
                     // .attr("height", function(d){console.log("Loop"); return 10;})

                    //  .attr("width", barWidth)
                    //  .attr("height", function(peng){
                    //                   console.log(peng[selectedDay]);
                    //                   return yScale(peng[selectedDay])})
                    //  .attr("x", function(d,i)
                    //  { return margins.left + i*barWidth + (graphWidth/16);})//adjusting the center of bar
                    //  .attr("y", function(person){
                    //                   return graphHeight + margins.top- yScale(peng[selectedDay]) - 2})
                    // .attr("fill", function(person){return colorScale(person.name)})
                    // .style("stroke", "#EBFCFB")
                    // .style("stroke-width", 2)
                    // .classed("data-bar", true);
};

dataP.then(function(data){
    drawLineChart(data, "#chart", "test", screenSettings, marginSettings);
    });
