var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Short-term fluctuations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic1')\">1. Autocorrelation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Even after removal of trend, successive values in a time series are often correlated -- values above the trend are often followed by others above it and, similarly, values below the trend often occur together.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic2')\">2. AR(1) model for autocorrelation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The similarity of successive values in a time series (or detrended time series) can be modelled by a linear model that forecasts each value (or detrended value) as a linear function of the previous one.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic3')\">3. AR(1) model and trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The trend should be removed before fitting an autoregressive model then added back to forecast future values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic4')\">4. Trend or autocorrelation?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simple mechanism of autocorrelation of successive residuals can give the impression of trend when none is present in the underlying process.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('cyclic5')\">5. Cyclical patterns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some time series vary in regular or irregular cycles. Irregular cycles can be modelled and forecast using the methods of this section but regular cycles (seasonal patterns) should be forecast with different methods.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
