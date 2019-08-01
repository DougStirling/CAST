var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Transformations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform_e1')\">1. Mean and st devn after linear transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The exercise on this page asks for the mean and standard deviation of a data set after linear transformation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_transform_e2')\">2. Power transformations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are asked to find a power transformation that makes a distribution reasonably symmetric.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
