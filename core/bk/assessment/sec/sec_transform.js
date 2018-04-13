var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Scaling marks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform1')\">1. Linear scaling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simple linear scaling of a set of marks can change the mean and standard deviation to any desired values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform2')\">2. Piecewise linear scaling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simple linear scaling can change the top marks too much. A piecewise linear scaling changes the extreme marks less.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('transform3')\">3. Doing it in Excel</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Piecewise linear scaling can be done easily in Excel.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
