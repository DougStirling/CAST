var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Time series plots</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot_b1')\">1. Time series plots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A time series plot is similar to a scatterplot with 'time' as the variable on the horizontal axis. Successive values are usually joined by lines to emphasise systematic movements in the series.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot_b2')\">2. Patterns in time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few examples show time series with trend, seasonal pattern and other oscillations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timePlot3')\">3. Multiple time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows four different time series on the same graph.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
