var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre and spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread_e1')\">1. Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you should summarise the difference between two distributions in terms of their different centres and spreads.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_centerSpread_e2')\">2. Calculate summary statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For the exercises in this page, you will need to export a data set and calculate summary statistics in an external statistical program.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
