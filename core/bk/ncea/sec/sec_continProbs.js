var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Proportions from tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat1')\">1. Relationships between variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some contingency tables, either the rows or columns can be used to split the individuals into groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat4')\">2. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two marginal distributions are found by adding the joint frequencies (or proportions) across rows or down columns of a contingency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat5')\">3. Conditional distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Conditional distributions are obtained by scaling the rows (or columns) of a contingency table to make them all sum to 1.0.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat7')\">4. Conditional vs marginal distns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Proportional Venn diagrams are a useful way to display joint distributions and to understand the relationships between conditional and marginal distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_groupedCat2')\">5. Exercise:   Proportions from contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise you are shown contingency tables and asked to find a joint, marginal or conditional proportion.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
