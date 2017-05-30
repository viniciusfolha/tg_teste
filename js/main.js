var pathData = "data/hurdat2-1851-2016_CONVERTED.json";
var pathConfig = "data/hur.config";

var readData = new ReadData(pathData,pathConfig );
readData.readConfig();

var map = new MapL("map");

var color  = d3.scaleOrdinal(d3.schemeCategory20b);



var mySVG = d3.select("body")
	    				.append("svg")
	    				.attr("width","1100")
	    				.attr("height","600");

var bar_chart = new BarChart("barchart1",mySVG,100,100,400,300);

var line_chart = new LineChart("linechart1",mySVG,600,100,400,300);
console.log(readData.data)