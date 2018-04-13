var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('spread1')\">1. Range and interquartile range</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The range in a data set is the difference between the maximum and minimum values. A better measure of spread is the difference between the upper and lower quartiles.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('spread2')\">2. Distance from k</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean absolute error and root mean square error summarise how close a data set is to a target, k.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('spread3')\">3. Measures of spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation describes how close the values are to the centre of the distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
