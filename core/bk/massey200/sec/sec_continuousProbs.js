var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Finding probabilities</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousProbs1')\">1. Probabilities by integration</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The probability of a value within any range is the area under the pdf above it. This can be found by integrating the pdf.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousProbs2')\">2. Rectangular distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simplest continuous distribution is a rectangular one in which each value between two constants is equally likely. Probabilities can be found by geometry or integration.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousProbs3')\">3. Other examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Finding probabilities by integration is illustrated with another two examples.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousProbs4')\">4. Cumulative distribution function</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The cumulative distribution function, F(x), is the probability of value less than or equal to x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousProbs5')\">5. Quantiles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p'th quantile of a distribution is the value x such that the probability of a value less than x is p.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
