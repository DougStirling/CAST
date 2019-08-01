var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Least squares</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs_e1')\">1. Slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to find the equation of the least squares line describing the relationship between two variables</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs_e2')\">2. Interpreting the slope and intercept</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to select one of four statements that correctly describes the slope or intercept of a least squares line in the context of the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_leastSqrs_e3')\">3. Predictions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page describes a data set. You should find the least squares line and use it to predict the response, given a value for the explanatory variable.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
