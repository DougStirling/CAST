var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Time series plots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_timePlot1')\">1. Time series plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that a time series plot is a scatterplot with time on the horizontal axis. Crosses can be joined by lines.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_timePlot2')\">2. Time series: trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example shows a time series with trend.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_timePlot3')\">3. Time series: seasonal pattern</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example shows a time series with a seasonal pattern.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_timePlot4')\">4. Time series: autocorrelation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example shows a time series in which successive values are autocorrelated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_timePlot5')\">5. Time series: random fluctuations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example shows a time series in which the main feature is unpredictable random fluctuations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_timePlot6')\">6. Multiple time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This example shows four different time series on the same graph.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
