var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tests about means</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean1')\">1. Introduction</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For numerical populations, the null and alternative hypotheses usually specify values for the population mean. Tests are based on the sample mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean4')\">2. The t distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the population standard deviation is unknown, a different test statistic must be used. It has a standard distribution known as a t distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testMean5')\">3. The t test for a mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The t distribution is used to obtain a p-value for tests about a population mean when the standard deviation is unknown.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
