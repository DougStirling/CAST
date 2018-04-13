var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Short-term fluctuations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_cyclic1')\">1. Autocorrelation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates autocorrelation with a scatterplot of values against the previous ones. The example has trend and can be detrended first.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_cyclic2')\">2. AR(1) model for autocorrelation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram uses a data set without trend. A line on the scatterplot of values against lagged ones is used for forecasting. It can be dragged or set by least squares; the resulting forecasts are superimposed on the time series plot.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_cyclic3')\">3. AR(1) model and trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is similar to the one on the previous page but the example has an increasing trend. AR(1) forecasts can be applied to the raw data or first detrended, with the trend added back to the AR(1) forecasts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_cyclic4')\">4. Trend or autocorrelation?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that trend can appear by chance in series with no underlying trend if there is autocorrelation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_cyclic5')\">5. Cyclical patterns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is an example of data with cyclical pattern (not seasonal).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
