var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Long-term trend</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section is based on fitting a straight line (or curve) to the data in a time series plot. Methods for fitting  lines to data are described in much more detail in a <a href=&#0022;javascript:top.showNamedPage('leastSqrs')&#0022;>section about Least Squares</a> in the NCEA unit <em>S3.5 Bivariate Data</em>, so we recommend that you read that section while studying the first page below.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend1')\">1. Linear trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many time series steadily increase or decrease over time and a linear model may describe the trend. This kind of model can be fitted by least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend2')\">2. Quadratic trend</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the trend is nonlinear, a quadratic model might describe the trend better and can also be fitted by least squares.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('trend3')\">3. Forecasting</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Linear and quadratic models can be used to forecast future values.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
