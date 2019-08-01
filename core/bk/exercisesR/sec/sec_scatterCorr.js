var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Scatterplots and correlation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_scatterplot_e1')\">1. Information from scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise expects you to interpret four scatterplots in terms of the relationship between the variables, clusters and outliers. Scatterplots of the data sets must be produced in an external statistics program.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_correlation_e1')\">2. Correlation coefficient, r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will use an external statistical program to find the correlation coefficient between two variables.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
