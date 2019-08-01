var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about means</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testMean1')\">1. Hypothesis test, assuming known σ</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to perform a hypothesis test about the mean of a normal population whose standard deviation, &sigma;, is known. The hypotheses must be specified, a z-score evaluated, the p-value found and the conclusion given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testMean2')\">2. T test (unknown sigma)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the population standard deviation is unknown, so the test statistic must use the sample standard deviation and the p-value must be looked up from a t distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
