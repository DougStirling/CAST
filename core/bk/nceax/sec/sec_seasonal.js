var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Seasonal data</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seasonal1')\">1. Seasonal patterns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is an example of a time series with a seasonal pattern.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seasonal2')\">2. Smoothing out seasonal variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram applies n-point moving averages to a monthly data set and shows that 12-point moving averages remove seasonal variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seasonal3')\">3. Estimating the seasonal effect</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows 12-point moving averages on a monthly time series. Clicking on any value highlights all residuals for that month and shows that the seasonal effect for that month is the average of these residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seasonal4')\">4. Deseasonalised data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the seasonal effects are subtracted from each raw value in the time series, giving deseasonalised values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seasonal5')\">5. Putting it all together</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram allows the three components -- seasonal, trend and residual -- to be removed from a series and displayed separately.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seasonal6')\">6. Forecasting with seasonal data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the seasonal and trend components can be extended into the future and added to forecast future values. </dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
