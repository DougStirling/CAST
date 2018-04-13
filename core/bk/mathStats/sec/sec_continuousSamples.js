var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Random samples</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousSamples1')\">1. Independence and random samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two continuous random variables are independent if knowing the value of one provides no information about the value of the other. A collection of n independent random variables with the same distribution is a random sample.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continuousSamples2')\">2. Distribution of sample sum and mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Formulae are given for the mean and variance of the sum and mean of a random sample. The sum and mean are both approximately normal in large samples.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
