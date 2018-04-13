var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contingency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat1')\">1. Contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Categorical data collected from different groups can be shown in a contingency table. It contains a simple frequency table for each group.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupedCat_b2')\">2. Contingency table examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Contingency tables sometimes arise from experiments. Data collected from surveys are often presented in contingency tables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('continTable3')\">3. Proportions within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is easier to compare groups using the proportions within each group rather than the frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat1')\">4. Categorical variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In some contingency tables, either the rows or columns can be used to split the individuals into groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat4')\">5. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The two marginal distributions are found by adding the joint frequencies (or proportions) across rows or down columns of a contingency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat5')\">6. Conditional distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Conditional distributions are obtained by scaling the rows (or columns) of a contingency table to make them all sum to 1.0.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('bivarCat7')\">7. Conditional vs marginal distns</a>&nbsp;&nbsp;&nbsp;<span class='note'>Optional (not examined)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Proportional Venn diagrams are a useful way to display joint distributions and to understand the relationships between conditional and marginal distributions.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
