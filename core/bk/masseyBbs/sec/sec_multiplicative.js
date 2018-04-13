var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Multiplicative models and more</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative1')\">1. Additive and multiplicative models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some time series, the different components affect the data multiplicatively rather than additively. If the data are replaced by their logs, a multiplicative model becomes additive.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative2')\">2. Properties of multiplicative models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In a multiplicative model, the seasonal pattern has greater amplitude when the trend is higher.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative3')\">3. Forecasting with multiplicative models</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A multiplicative model is fitted by using an additive model with the log data. The resulting forecasts are also of the log data, and so must be back-transformed to give a forecast in the original units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative4')\">4. Analysing the right data</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many types of data should be modified before attempting to interpret them in a time series plot. Seasonal adjustment, transforming to constant dollars and use of per capita data are examples.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiplicative5')\">5. Types of time series data</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Time series can describe processes that are discrete or continuous, and the measurements of continuous processes can be aggregates or snap-shots. The values can also be either discrete or continuous.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
