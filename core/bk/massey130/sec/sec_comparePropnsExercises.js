var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupPropn1')\">1. CI for difference between two proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two exercises on this page ask confidence intervals about the difference between two group proportions based on sample proportions; the second is a little harder than the first.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupPropn2')\">2. Test about difference between two proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for the hypotheses, p-value and conclusion when testing whether two group proportions are equal, both with one- and two-tailed alternatives.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_indep1')\">3. Expected cell counts in contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows a contingency table and asks for the expected cell count in one of the table cells, assuming the row and column variables are independent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_indep2')\">4. Chi-squared test for independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the test statistic and p-value are provided for a chi-squared test applied to a contingency table. You are asked to interprete the result of the test.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
