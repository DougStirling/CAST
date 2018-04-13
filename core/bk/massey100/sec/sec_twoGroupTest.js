var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing means in two groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf4')\">1. Testing a hypothesis</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A hypothesis test is developed for testing whether two group means are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf5')\">2. One-tailed tests for differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the alternative hypothesis is for one particular mean to be greater, then the p-value for the test is found from only one tail of the t distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
