var dataP = d3.json("classData.json");

dataP.then(function(data)
{
    drawLineChart(data, "#chart", "test", screenSettings, marginSettings);
    initEventListeners();
});

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

//// Line Chart  ////
var drawLineChart = function(dataSet, svgSelector, selectedPerson, screen, margins)
{
  console.log("start")
  //
  var quizData = dataSet[0].quizes
  console.log("QuizData", quizData)
  console.log(quizData.length)
  var graphWidth  = screen.width - margins.left - margins.right;
  var graphHeight = screen.height - margins.top - margins.bottom;
  var borderWidth = 1;

  var xScale = d3.scaleLinear()
                .domain([1, quizData.length])
                .range([margins.left,(graphWidth-margins.right)]);
  var xAxis = d3.axisBottom()
                .scale(xScale)
                .tickValues([5,10,15,20,25,30,35,40]);

  var yScale = d3.scaleLinear()
                .domain([0, 10])
                .range([0, graphHeight - 70 ]);

  var yAxisScale = d3.scaleLinear()
                .domain([0, 100])
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

var line = d3.line()
          .x(function(d){return xScale(d.day)})
          .y(function(d){return yScale(d.grade)});

 var lineDrawer = graphSVG.append("path")
                          .datum(quizData)
                          .attr("fill", colorScale("quiz"))
                          .attr("fill", "none")
                          .attr("stroke", "steelblue")
                          .attr("stroke-linejoin", "round")
                          .attr("stroke-linecap", "round")
                          .attr("stroke-width", 3)
                          .attr("class","line")
                          .attr("d",line);

 var xAxisGraphic = graphSVG.append('g')
                    .call(xAxis)
                    .attr("transform","translate("+0+"," +(graphHeight + 60)+")");

 var yAxisGraphic = graphSVG.append("g")
                     .call(yAxis)
                     .attr("transform", function(){
                       return "translate(" + margins.left + "," + (margins.top) + ")";
                       });

  var xLabel = graphSVG.append("text")
                        .text("Day")
                        .attr("x", function(){return graphWidth/2 + margins.left - 20})
                        .attr("y", function(){return graphHeight + margins.top + 70})
                        .attr("font-size", 25)

  var title = graphSVG.append("text")
                        .text("Quiz Grades")
                        .attr("x", function(){return graphWidth/2 + margins.left - 50})
                        .attr("y", function(){return margins.top -10})
                        .attr("font-size", 25)

    var yLabel = graphSVG.append("text")
                          .text("Score(%)")
                          .attr("x", function(){return margins.left - 75})
                          .attr("y", function(){return margins.top - 10})
                          .attr("font-size", 20)
};

//// Area Chart ////
var drawAreaChart = function(dataSet, svgSelector, selectedPerson, screen, margins)
{
  console.log("start")
  //
  var quizData = dataSet[0].quizes
  console.log("QuizData", quizData)
  console.log(quizData.length)

  var graphWidth  = screen.width - margins.left - margins.right;
  var graphHeight = screen.height - margins.top - margins.bottom;
  var borderWidth = 1;

  var xScale = d3.scaleLinear()
                .domain([1, quizData.length])
                .range([margins.left,(graphWidth-margins.right)]);

  var xAxis = d3.axisBottom()
                .scale(xScale)
                .tickValues([5,10,15,20,25,30,35,40]);

  var yScale = d3.scaleLinear()
                .domain([0, 10])
                .range([0, graphHeight - 70]);

  var yAxisScale = d3.scaleLinear()
                .domain([0, 100])
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

var area = d3.area()
          .x(function(d){return xScale(d.day)})
          .y0(function(d){return graphHeight + margins.top;})
          .y1(function(d){return yScale(d.grade)});

 var areaDrawer = graphSVG.append("path")
                          .datum(quizData)
                          .attr("fill", colorScale("quiz"))
                          //.attr("fill", "none")
                          .attr("stroke", "steelblue")
                          .attr("stroke-linejoin", "round")
                          .attr("stroke-linecap", "round")
                          .attr("stroke-width", 3)
                          .attr("class","area")
                          .attr("d",area);

 var xAxisGraphic = graphSVG.append('g')
                    .call(xAxis)
                    .attr("transform","translate("+0+"," +(graphHeight + 60)+")");

 var yAxisGraphic = graphSVG.append("g")
                     .call(yAxis)
                     .attr("transform", function(){
                       return "translate(" + margins.left + "," + (margins.top) + ")";
                       });

  var xLabel = graphSVG.append("text")
                        .text("Day")
                        .attr("x", function(){return graphWidth/2 + margins.left - 20})
                        .attr("y", function(){return graphHeight + margins.top + 70})
                        .attr("font-size", 25)

  var title = graphSVG.append("text")
                        .text("Quiz Grades")
                        .attr("x", function(){return graphWidth/2 + margins.left - 50})
                        .attr("y", function(){return margins.top -10})
                        .attr("font-size", 25)

    var yLabel = graphSVG.append("text")
                          .text("Score(%)")
                          .attr("x", function(){return margins.left - 75})
                          .attr("y", function(){return margins.top - 10})
                          .attr("font-size", 20)
};

var initEventListeners = function(){
//next button
  d3.select("#next")
    .on("click", function(d){
    console.log("Next button clicked")
    dataP.then(function(data)
    {
      drawAreaChart(data, "#chart", "test", screenSettings, marginSettings);
    });
  });

  //Previous button

    d3.select("#prev")
      .on("click", function(d){
        console.log("Prev button clicked");
        dataP.then(function(data)
        {
          drawLineChart(data, "#chart", "test", screenSettings, marginSettings);
        });
      });
};
