var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_sumDiff_old_1')\">1. Probabilities about sums and differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives an exercise that asks for a probability relating to the sum of difference of two independent variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf_old_1')\">2. Exercises about confidence intervals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page contains an exercise that gives practice in calculating a 95% confidence interval for the difference between two means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf_old_2')\">3. Exercises about tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page contains an exercise that gives practice in doing 1- and 2-tailed tests about the difference between two means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupPropn_old_1')\">4. Confidence interval exercises</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page contains an exercise that gives practice in calculating 95% confidence intervals for the difference between two proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupPropn_old_2')\">5. Exercises about testing hypotheses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page provides an exercise that gives practice in evaluating p-values for hypothesis tests and interpreting them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
