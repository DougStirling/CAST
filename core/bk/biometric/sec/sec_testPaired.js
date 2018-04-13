var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Paired t test</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired_b1')\">1. Paired data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Paired data are a type of bivariate data in which two similar measurements are made from each individual. We are usually interested in testing whether the means of both measurements are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired_b2')\">2. Analysis of differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For paired data, differences between the two measurements hold all information about whether the means of both variables are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired3')\">3. Paired t-test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Testing for a difference between the means of the measurements is done with an ordinary t-test for whether the mean difference is zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired4')\">4. Pairing and experimental design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>To estimate or test the difference between two means, it is sometimes possible to collect data from two independent samples or from paired units. If the paired units are similar, a pair data gives more accurate results.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
