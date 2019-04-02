var dataP = d3.json("gradeData.json");

dataP.then(function(data)
{
  console.log("data",data);
  drawChart(data, "#Line");
  drawChart(data, "Area")
},
function(err)
{
  console.log(err);
});

var drawChart = function(data, idname)
{
