var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Model with common standard deviation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup_b1')\">1. Model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To compare the means of several groups, a model of normal distributions in all groups is used but all group standard deviations must be assumed to be the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiGroup2')\">2. Parameter estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The sample standard deviations in the separate groups can be combined to give a pooled estimate of the common standard deviation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
