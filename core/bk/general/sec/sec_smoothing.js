var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Smoothing</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing1')\">1. Moving averages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Moving averages are a simple way to smooth out irregularities in a time series.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing2')\">2. More about moving averages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When an even number of values is used for the moving averages, the smoothed values are at times half-way between those of the raw data. The method can be modified to give smoothed values at the times of the original values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing3')\">3. Robust smoothing</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Using running medians instead of means avoids the effect of outliers, but the result often looks 'stepped'. The use of running medians, followed by running means, is a good compromise.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing4')\">4. Exponential smoothing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Exponential smoothing replaces each value with a weighted average of it and previous values. Unlike moving averages, it can be used right up to the end of the series.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing5')\">5. Lowess smoothing of time series</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An alternative smoothing method that provides smoothed values to both ends of a time series is to obtain the smoothed value from a least squares line fitted to adjacent values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing6')\">6. Lowess smoothing of scatterplots</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A similar method can be used to draw a 'smooth' curve to represent a nonlinear relationship on a scatterplot.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
