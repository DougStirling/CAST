var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('center1')\">1. Centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two important aspects of a distribution are its centre and its spread.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('center2')\">2. Summaries of Centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean and median are descriptions of the 'centre' of a distribution. The mode is another description of a 'typical' value for discrete data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('center3')\">3. Comparison of median and mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median is less sensitive to outliers and is easier to interpret than the mean. However there are more 'advanced' uses of means than medians.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('center4')\">4. Mean of discrete data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean of discrete data does not need to be a whole number.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('center5')\">5. Quartiles, deciles and percentiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median splits a data set into two. The quartiles split it into four, deciles into 10, and percentiles into 100.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
