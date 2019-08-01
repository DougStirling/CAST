var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bar and pie charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat_e1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar charts display categorical data graphically. In this exercise, you should draw bar pie charts for four data sets and match them to the data set names.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat_e2')\">2. Pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Pie charts display the same information in a different way. This exercise asks you to match pie charts for four data sets to their data set names.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
