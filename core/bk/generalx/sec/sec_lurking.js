var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Marginal relationships</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_lurking1')\">1. Misleading marginal correlation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example in which the marginal correlation between Y and X is positive, but the conditional correlations (conditional on Z) are nearly zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_lurking2')\">2. Misleading marginal difference in means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The overall mean can increase from one year to the next, even though the means within sub-groups all decrease.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_lurking3')\">3. Simpsons paradox</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example in which the marginal and conditional relationships between two categorical variables are in different directions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_lurking4')\">4. Explanation of Simpsons paradox</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A proportional Venn diagram helps to explain the 'paradox'.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
