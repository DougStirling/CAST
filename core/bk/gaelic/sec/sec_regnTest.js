var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Testing regression parameters</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest1')\">1. Importance of zero slope</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the model's slope is zero, the response distribution does not depend on the explanatory variable. This special case is particularly meaningful in many studies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest2')\">2. Testing whether slope is zero</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The p-value for testing whether a linear model's slope is zero is the probability that its least squares estimate is as far from zero as the recorded value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest3')\">3. Strength of evidence and relationship</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is important to distinguish the strength of a relationship (summarised by the correlation coefficient) and the strength of evidence for existence of a relationship (summarised by the p-value).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('regnTest4')\">4. Properties of p-values</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>As with other tests, all p-values between 0 and 1 are equally likely if the null hypothesis holds (model slope is zero), but p-values near 0 are more likely if the alternative hypothesis holds (model slope is non-zero).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
