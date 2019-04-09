var dataP = d3.json("classData.json");

dataP.then(function(data)
{
    drawLineChart(data, "#chart0", 0, screenSettings, marginSettings,"Bookworm Penguin");
    drawLineChart(data, "#chart1", 1, screenSettings, marginSettings,"Crafty Penguin");
    drawLineChart(data, "#chart2", 2, screenSettings, marginSettings,"Cyclist Penguin");
    drawLineChart(data, "#chart3", 3, screenSettings, marginSettings,"Drunken Penguin");
    drawLineChart(data, "#chart4", 4, screenSettings, marginSettings,"Easter Penguin");
    drawLineChart(data, "#chart5", 5, screenSettings, marginSettings,"Ebook Penguin");
    drawLineChart(data, "#chart6", 6, screenSettings, marginSettings,"Farmer Penguin");
    drawLineChart(data, "#chart7", 7, screenSettings, marginSettings,"Gentleman Penguin");
    drawLineChart(data, "#chart8", 8, screenSettings, marginSettings,"Judo Penguin");
    drawLineChart(data, "#chart9", 9, screenSettings, marginSettings,"Moana Penguin");
    drawLineChart(data, "#chart10", 10, screenSettings, marginSettings,"Painter Penguin");
    drawLineChart(data, "#chart11", 11, screenSettings, marginSettings,"Grill Penguin");
    drawLineChart(data, "#chart12", 12, screenSettings, marginSettings,"Pharaoh Penguin");
    drawLineChart(data, "#chart13", 13, screenSettings, marginSettings,"Pilot Penguin");
    drawLineChart(data, "#chart14", 14, screenSettings, marginSettings,"Pinga Corr");
    drawLineChart(data, "#chart15", 15, screenSettings, marginSettings,"Pixie Penguin");
    drawLineChart(data, "#chart16", 16, screenSettings, marginSettings,"Sailor Penguin");
    drawLineChart(data, "#chart17", 17, screenSettings, marginSettings,"Santa Penguin");
    drawLineChart(data, "#chart18", 18, screenSettings, marginSettings,"Tauch Penguin");
    drawLineChart(data, "#chart19", 19, screenSettings, marginSettings,"Tux");
    drawLineChart(data, "#chart20", 20, screenSettings, marginSettings,"Valentine Ocal");
    drawLineChart(data, "#chart21", 21, screenSettings, marginSettings,"Valentine Penguin");
    drawLineChart(data, "#chart22", 22, screenSettings, marginSettings,"Wizard Penguin");

    drawLineChart2(data, "#chart23", 0, screenSettings, marginSettings,"Bookworm Penguin");
    drawLineChart2(data, "#chart24", 1, screenSettings, marginSettings,"Crafty Penguin");
    drawLineChart2(data, "#chart25", 2, screenSettings, marginSettings,"Cyclist Penguin");
    drawLineChart2(data, "#chart26", 3, screenSettings, marginSettings,"Drunken Penguin");
    drawLineChart2(data, "#chart27", 4, screenSettings, marginSettings,"Easter Penguin");
    drawLineChart2(data, "#chart28", 5, screenSettings, marginSettings,"Ebook Penguin");
    drawLineChart2(data, "#chart29", 6, screenSettings, marginSettings,"Farmer Penguin");
    drawLineChart2(data, "#chart30", 7, screenSettings, marginSettings,"Gentleman Penguin");
    drawLineChart2(data, "#chart31", 8, screenSettings, marginSettings,"Judo Penguin");
    drawLineChart2(data, "#chart32", 9, screenSettings, marginSettings,"Moana Penguin");
    drawLineChart2(data, "#chart33", 10, screenSettings, marginSettings,"Painter Penguin");
    drawLineChart2(data, "#chart34", 11, screenSettings, marginSettings,"Grill Penguin");
    drawLineChart2(data, "#chart35", 12, screenSettings, marginSettings,"Pharaoh Penguin");
    drawLineChart2(data, "#chart36", 13, screenSettings, marginSettings,"Pilot Penguin");
    drawLineChart2(data, "#chart37", 14, screenSettings, marginSettings,"Pinga Corr");
    drawLineChart2(data, "#chart38", 15, screenSettings, marginSettings,"Pixie Penguin");
    drawLineChart2(data, "#chart39", 16, screenSettings, marginSettings,"Sailor Penguin");
    drawLineChart2(data, "#chart40", 17, screenSettings, marginSettings,"Santa Penguin");
    drawLineChart2(data, "#chart41", 18, screenSettings, marginSettings,"Tauch Penguin");
    drawLineChart2(data, "#chart42", 19, screenSettings, marginSettings,"Tux");
    drawLineChart2(data, "#chart43", 20, screenSettings, marginSettings,"Valentine Ocal");
    drawLineChart2(data, "#chart44", 21, screenSettings, marginSettings,"Valentine Penguin");
    drawLineChart2(data, "#chart45", 22, screenSettings, marginSettings,"Wizard Penguin");

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
var drawLineChart2 = function(dataSet, svgSelector, index, screen, margins, name)
{
  console.log("start")
  //
  var HwData = dataSet[index].homework
  //console.log("HwData", HwData)
  //console.log(HwData.length)
  var graphWidth  = screen.width - margins.left - margins.right;
  var graphHeight = screen.height - margins.top - margins.bottom;
  var borderWidth = 1;

  var xScale = d3.scaleLinear()
                .domain([1, 40])
                .range([margins.left,(graphWidth-margins.right)]);
  var xAxis = d3.axisBottom()
                .scale(xScale)
                .tickValues([5,10,15,20,25,30,35,40]);

  var yScale = d3.scaleLinear()
                .domain([0, 100])
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
                          .datum(HwData)
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
                        .text("Homework Grades: "+ name)
                        .attr("x", function(){return graphWidth/2 + margins.left - 150})
                        .attr("y", function(){return margins.top -10})
                        .attr("font-size", 25)

    var yLabel = graphSVG.append("text")
                          .text("Score(%)")
                          .attr("x", function(){return margins.left - 75})
                          .attr("y", function(){return margins.top - 10})
                          .attr("font-size", 20)
};

//// Line Chart  ////
var drawLineChart = function(dataSet, svgSelector, index, screen, margins, name)
{
  console.log("start")
  //
  var quizData = dataSet[index].quizes
  //console.log("QuizData", quizData)
  //console.log(quizData.length)
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
                        .text("Quiz Grades: "+ name)
                        .attr("x", function(){return graphWidth/2 + margins.left - 150})
                        .attr("y", function(){return margins.top -10})
                        .attr("font-size", 25)

    var yLabel = graphSVG.append("text")
                          .text("Score(%)")
                          .attr("x", function(){return margins.left - 75})
                          .attr("y", function(){return margins.top - 10})
                          .attr("font-size", 20)
};

//// Area Chart ////
var drawAreaChart = function(dataSet, svgSelector, index, screen, margins, name)
{
  console.log("start")
  //
  var quizData = dataSet[index].quizes
  //console.log("QuizData", quizData)
  //console.log(quizData.length)

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
                        .text("Quiz Grades: " + name)
                        .attr("x", function(){return graphWidth/2 + margins.left - 150})
                        .attr("y", function(){return margins.top -10})
                        .attr("font-size", 25)

    var yLabel = graphSVG.append("text")
                          .text("Score(%)")
                          .attr("x", function(){return margins.left - 75})
                          .attr("y", function(){return margins.top - 10})
                          .attr("font-size", 20)
};

var drawAreaChart2 = function(dataSet, svgSelector, index, screen, margins, name)
{
  console.log("start")
  //
  var HwData = dataSet[index].homework
  //console.log("QuizData", quizData)
  //console.log(quizData.length)

  var graphWidth  = screen.width - margins.left - margins.right;
  var graphHeight = screen.height - margins.top - margins.bottom;
  var borderWidth = 1;

  var xScale = d3.scaleLinear()
                .domain([1, 40])
                .range([margins.left,(graphWidth-margins.right)]);

  var xAxis = d3.axisBottom()
                .scale(xScale)
                .tickValues([5,10,15,20,25,30,35,40]);

  var yScale = d3.scaleLinear()
                .domain([0, 100])
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
                          .datum(HwData)
                          .attr("fill", colorScale("homework"))
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
                        .text("Homework Grades: " + name)
                        .attr("x", function(){return graphWidth/2 + margins.left - 150})
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
      drawAreaChart(data, "#chart0", 0, screenSettings, marginSettings,"Bookworm Penguin");
      drawAreaChart(data, "#chart1", 1, screenSettings, marginSettings,"Crafty Penguin");
      drawAreaChart(data, "#chart2", 2, screenSettings, marginSettings,"Cyclist Penguin");
      drawAreaChart(data, "#chart3", 3, screenSettings, marginSettings,"Drunken Penguin");
      drawAreaChart(data, "#chart4", 4, screenSettings, marginSettings,"Easter Penguin");
      drawAreaChart(data, "#chart5", 5, screenSettings, marginSettings,"Ebook Penguin");
      drawAreaChart(data, "#chart6", 6, screenSettings, marginSettings,"Farmer Penguin");
      drawAreaChart(data, "#chart7", 7, screenSettings, marginSettings,"Gentleman Penguin");
      drawAreaChart(data, "#chart8", 8, screenSettings, marginSettings,"Judo Penguin");
      drawAreaChart(data, "#chart9", 9, screenSettings, marginSettings,"Moana Penguin");
      drawAreaChart(data, "#chart10", 10, screenSettings, marginSettings,"Painter Penguin");
      drawAreaChart(data, "#chart11", 11, screenSettings, marginSettings,"Grill Penguin");
      drawAreaChart(data, "#chart12", 12, screenSettings, marginSettings,"Pharaoh Penguin");
      drawAreaChart(data, "#chart13", 13, screenSettings, marginSettings,"Pilot Penguin");
      drawAreaChart(data, "#chart14", 14, screenSettings, marginSettings,"Pinga Corr");
      drawAreaChart(data, "#chart15", 15, screenSettings, marginSettings,"Pixie Penguin");
      drawAreaChart(data, "#chart16", 16, screenSettings, marginSettings,"Sailor Penguin");
      drawAreaChart(data, "#chart17", 17, screenSettings, marginSettings,"Santa Penguin");
      drawAreaChart(data, "#chart18", 18, screenSettings, marginSettings,"Tauch Penguin");
      drawAreaChart(data, "#chart19", 19, screenSettings, marginSettings,"Tux");
      drawAreaChart(data, "#chart20", 20, screenSettings, marginSettings,"Valentine Ocal");
      drawAreaChart(data, "#chart21", 21, screenSettings, marginSettings,"Valentine Penguin");
      drawAreaChart(data, "#chart22", 22, screenSettings, marginSettings,"Wizard Penguin");

      drawAreaChart2(data, "#chart23", 0, screenSettings, marginSettings,"Bookworm Penguin");
      drawAreaChart2(data, "#chart24", 1, screenSettings, marginSettings,"Crafty Penguin");
      drawAreaChart2(data, "#chart24", 2, screenSettings, marginSettings,"Cyclist Penguin");
      drawAreaChart2(data, "#chart26", 3, screenSettings, marginSettings,"Drunken Penguin");
      drawAreaChart2(data, "#chart27", 4, screenSettings, marginSettings,"Easter Penguin");
      drawAreaChart2(data, "#chart28", 5, screenSettings, marginSettings,"Ebook Penguin");
      drawAreaChart2(data, "#chart29", 6, screenSettings, marginSettings,"Farmer Penguin");
      drawAreaChart2(data, "#chart30", 7, screenSettings, marginSettings,"Gentleman Penguin");
      drawAreaChart2(data, "#chart31", 8, screenSettings, marginSettings,"Judo Penguin");
      drawAreaChart2(data, "#chart32", 9, screenSettings, marginSettings,"Moana Penguin");
      drawAreaChart2(data, "#chart33", 10, screenSettings, marginSettings,"Painter Penguin");
      drawAreaChart2(data, "#chart34", 11, screenSettings, marginSettings,"Grill Penguin");
      drawAreaChart2(data, "#chart35", 12, screenSettings, marginSettings,"Pharaoh Penguin");
      drawAreaChart2(data, "#chart36", 13, screenSettings, marginSettings,"Pilot Penguin");
      drawAreaChart2(data, "#chart37", 14, screenSettings, marginSettings,"Pinga Corr");
      drawAreaChart2(data, "#chart38", 15, screenSettings, marginSettings,"Pixie Penguin");
      drawAreaChart2(data, "#chart39", 16, screenSettings, marginSettings,"Sailor Penguin");
      drawAreaChart2(data, "#chart40", 17, screenSettings, marginSettings,"Santa Penguin");
      drawAreaChart2(data, "#chart41", 18, screenSettings, marginSettings,"Tauch Penguin");
      drawAreaChart2(data, "#chart42", 19, screenSettings, marginSettings,"Tux");
      drawAreaChart2(data, "#chart43", 20, screenSettings, marginSettings,"Valentine Ocal");
      drawAreaChart2(data, "#chart44", 21, screenSettings, marginSettings,"Valentine Penguin");
      drawAreaChart2(data, "#chart45", 22, screenSettings, marginSettings,"Wizard Penguin");
    });
  });

  //Previous button

    d3.select("#prev")
      .on("click", function(d){
        console.log("Prev button clicked");
        dataP.then(function(data)
        {
          drawLineChart(data, "#chart0", 0, screenSettings, marginSettings,"Bookworm Penguin");
          drawLineChart(data, "#chart1", 1, screenSettings, marginSettings,"Crafty Penguin");
          drawLineChart(data, "#chart2", 2, screenSettings, marginSettings,"Cyclist Penguin");
          drawLineChart(data, "#chart3", 3, screenSettings, marginSettings,"Drunken Penguin");
          drawLineChart(data, "#chart4", 4, screenSettings, marginSettings,"Easter Penguin");
          drawLineChart(data, "#chart5", 5, screenSettings, marginSettings,"Ebook Penguin");
          drawLineChart(data, "#chart6", 6, screenSettings, marginSettings,"Farmer Penguin");
          drawLineChart(data, "#chart7", 7, screenSettings, marginSettings,"Gentleman Penguin");
          drawLineChart(data, "#chart8", 8, screenSettings, marginSettings,"Judo Penguin");
          drawLineChart(data, "#chart9", 9, screenSettings, marginSettings,"Moana Penguin");
          drawLineChart(data, "#chart10", 10, screenSettings, marginSettings,"Painter Penguin");
          drawLineChart(data, "#chart11", 11, screenSettings, marginSettings,"Grill Penguin");
          drawLineChart(data, "#chart12", 12, screenSettings, marginSettings,"Pharaoh Penguin");
          drawLineChart(data, "#chart13", 13, screenSettings, marginSettings,"Pilot Penguin");
          drawLineChart(data, "#chart14", 14, screenSettings, marginSettings,"Pinga Corr");
          drawLineChart(data, "#chart15", 15, screenSettings, marginSettings,"Pixie Penguin");
          drawLineChart(data, "#chart16", 16, screenSettings, marginSettings,"Sailor Penguin");
          drawLineChart(data, "#chart17", 17, screenSettings, marginSettings,"Santa Penguin");
          drawLineChart(data, "#chart18", 18, screenSettings, marginSettings,"Tauch Penguin");
          drawLineChart(data, "#chart19", 19, screenSettings, marginSettings,"Tux");
          drawLineChart(data, "#chart20", 20, screenSettings, marginSettings,"Valentine Ocal");
          drawLineChart(data, "#chart21", 21, screenSettings, marginSettings,"Valentine Penguin");
          drawLineChart(data, "#chart22", 22, screenSettings, marginSettings,"Wizard Penguin");

          drawLineChart2(data, "#chart23", 0, screenSettings, marginSettings,"Bookworm Penguin");
          drawLineChart2(data, "#chart24", 1, screenSettings, marginSettings,"Crafty Penguin");
          drawLineChart2(data, "#chart25", 2, screenSettings, marginSettings,"Cyclist Penguin");
          drawLineChart2(data, "#chart26", 3, screenSettings, marginSettings,"Drunken Penguin");
          drawLineChart2(data, "#chart27", 4, screenSettings, marginSettings,"Easter Penguin");
          drawLineChart2(data, "#chart28", 5, screenSettings, marginSettings,"Ebook Penguin");
          drawLineChart2(data, "#chart29", 6, screenSettings, marginSettings,"Farmer Penguin");
          drawLineChart2(data, "#chart30", 7, screenSettings, marginSettings,"Gentleman Penguin");
          drawLineChart2(data, "#chart31", 8, screenSettings, marginSettings,"Judo Penguin");
          drawLineChart2(data, "#chart32", 9, screenSettings, marginSettings,"Moana Penguin");
          drawLineChart2(data, "#chart33", 10, screenSettings, marginSettings,"Painter Penguin");
          drawLineChart2(data, "#chart34", 11, screenSettings, marginSettings,"Grill Penguin");
          drawLineChart2(data, "#chart35", 12, screenSettings, marginSettings,"Pharaoh Penguin");
          drawLineChart2(data, "#chart36", 13, screenSettings, marginSettings,"Pilot Penguin");
          drawLineChart2(data, "#chart37", 14, screenSettings, marginSettings,"Pinga Corr");
          drawLineChart2(data, "#chart38", 15, screenSettings, marginSettings,"Pixie Penguin");
          drawLineChart2(data, "#chart39", 16, screenSettings, marginSettings,"Sailor Penguin");
          drawLineChart2(data, "#chart40", 17, screenSettings, marginSettings,"Santa Penguin");
          drawLineChart2(data, "#chart41", 18, screenSettings, marginSettings,"Tauch Penguin");
          drawLineChart2(data, "#chart42", 19, screenSettings, marginSettings,"Tux");
          drawLineChart2(data, "#chart43", 20, screenSettings, marginSettings,"Valentine Ocal");
          drawLineChart2(data, "#chart44", 21, screenSettings, marginSettings,"Valentine Penguin");
          drawLineChart2(data, "#chart45", 22, screenSettings, marginSettings,"Wizard Penguin");
        });
      });
};
