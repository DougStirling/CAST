var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Testing regression parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest1')\">1. Importance of zero slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the model's slope is zero, the response distribution does not depend on the explanatory variable. This special case is particularly meaningful in many studies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest2')\">2. Testing whether slope is zero</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for testing whether a linear model's slope is zero is the probability that its least squares estimate is as far from zero as the recorded value.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
