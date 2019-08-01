var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Varying hazard rate</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('weibull1')\">1. Weibull distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An item's lifetime has an exponential distribution if its hazard rate remains constant. The Weibull distribution allows the hazard rate to increase or decrease over time.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('weibull2')\">2. Mean, variance and shape</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The Weibull distribution's mean and variance are derived.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('weibull3')\">3. Calculating Weibull probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two examples show how probabilities can be calculated for Weibull random variables.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
