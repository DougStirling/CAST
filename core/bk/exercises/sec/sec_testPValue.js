var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Properties of p-values</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue1')\">1. Generic interpretation of a p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two exercises on this page give p-values for hypothesis tests and ask you to pick the correct conclusion from the test. The first exercise has options in terms of the strength of evidence against the null hypothesis; the second is harder with options referring to the alternative hypothesis also.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue2')\">2. Interpretation of p-values (in context)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise gives the p-value for a test and asks you to pick the correct conclusion, worded in terms of the problem context.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPValue3')\">3. Interpretation of p-values (harder)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar to the previous one but the wordings of the conclusions are harder.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
