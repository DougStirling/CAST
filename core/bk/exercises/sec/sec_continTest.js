var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Association in contingency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_indep1')\">1. Expected cell counts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows a contingency table and asks for the expected cell count in one of the table cells, assuming the row and column variables are independent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_indep2')\">2. Chi-squared test for independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, the test statistic and p-value are provided for a chi-squared test applied to a contingency table. You are asked to interprete the result of the test.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
