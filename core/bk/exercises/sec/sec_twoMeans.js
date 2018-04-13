var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing two means</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_sumDiff1')\">1. Probabilities about sums and differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives an exercise that asks for a probability relating to the sum of difference of two independent variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf1')\">2. Probabilities about differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page asks for a probability about either the difference between two single variables or two group means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf2')\">3. CI for difference between two means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two exercises on this page ask confidence intervals about the difference between two group means based on sample means and standard deviations; the second is a little harder than the first.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf3')\">4. Testing group means for equality</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page provides an exercise that gives practice in evaluating p-values for hypothesis tests and interpreting them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
