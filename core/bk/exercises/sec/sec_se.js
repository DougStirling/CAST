var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard error</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean1')\">1. Standard error of mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page shows a data set with the sample mean and st devn. The standard error of the mean must be calculated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean2')\">2. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise states the value of either the standard deviation or the standard error or the mean. The question asks for an interval containing about 95% of the values or an interval with 95% confidence of including the popn mean.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_seMean3')\">3. Factors affecting the standard deviation and standard error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks 3 questions about the effect of sample size and spread of sample values on the sd and se, and about the interpretation of the se and sd.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
