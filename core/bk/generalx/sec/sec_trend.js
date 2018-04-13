var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Long-term trend</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_trend1')\">1. Linear trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, you can drag a line to describe linear trend in a time series and estimate its parameters by least squares. The diagram also shows that 'year' can be replaced by (year - xxx) to make the coefficients smaller.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_trend2')\">2. Quadratic trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is similar to the one above but allows a quadratic curve to be fitted to describe the trend..</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_trend3')\">3. Forecasting</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, a linear or quadratic model can be used to forecast into the future.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_trend4')\">4. Polynomial trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram allows the degree to be increased of a least squares polynomial describing trend. It shows that high-degree polynomial models may smoothly describe nonlinear trend but that their forecasts are often wildly dependent on the polynomial degree.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_trend5')\">5. Detrending a time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The trend in a time series can be removed with a slider in this diagram, showing that the detrended values are simply the least squares residuals.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
