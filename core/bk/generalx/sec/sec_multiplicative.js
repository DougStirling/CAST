var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multiplicative models</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiplicative1')\">1. Multiplicative examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three examples are shown on this page. In each, a slider applies a log transformation to linearise, give constant amplitude to seasonal variation or make residual variation more constant.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiplicative2')\">2. Properties of multiplicative models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram gives an example of quarterly data where an additive model does underestimates the amplitude of variation at the end of the series. When the model is applied to the log data, it fits better. This multiplicative model can also be displayed on the original axes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_multiplicative3')\">3. Forecasting with multiplicative models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how a multiplicative model can provide forecasts. It shows forecasts of the linear, seasonal and cyclical components on a log scale. A slider can transform these back to the original units.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
