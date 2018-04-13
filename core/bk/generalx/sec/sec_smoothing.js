var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Smoothing</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_smoothing1')\">1. Moving averages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates how moving averages can smooth a time series for an example with large random fluctuations. It initially only allows moving averages of odd numbers of values but can also show centred moving averages with even run lengths.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_smoothing2')\">2. Robust smoothing with medians</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, one value in the time series can be dragged to turn it into an outlier. The diagram shows the effect of the outlier on moving averages but shows that running medians are virtually unaffected.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_smoothing3')\">3. Running medians then means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates the use of low-order running medians to remove the effect of outliers followed by moving averages for greater smoothness. One value can be dragged to turn it into an outlier.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_smoothing4')\">4. Exponential smoothing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates exponential smoothing and shows that it gives smooth values up to the end of the series. However a different example shows that it systematically underestimates the values when there is an upward trend.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_smoothing5')\">5. Lowess smoothing of time series</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram explains lowess smoothing for time series. Clicking on any cross shows the window of adjacent crosses, the least squares line fitted to them, and the smoothed value that is obtained as the least squares fitted value for the point. The window width can be adjusted for smoothness.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_smoothing6')\">6. Lowess smoothing of scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Although not about time series, this page illustrates the use of lowess to describe a nonlinear regression relationship.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
