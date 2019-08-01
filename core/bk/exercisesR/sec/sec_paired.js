var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Paired data</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPaired1')\">1. 2-sample or paired t-test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents 3 different scenarios and asks whether the two means in each scenario should be compared with a 2-sample or a paired t-test.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testPaired2')\">2. Conduct paired t-test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you are presented with a set of paired data and asked to perform a test about whether the two means are equal.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
