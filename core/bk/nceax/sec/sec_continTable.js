var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contingency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat1')\">1. Contingency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how contingency tables are formed from raw data -- either from lists of categories in several groups or two categorical variables in a data matrix.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat2')\">2. Contingency table examples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Examples show contingency tables from experiments and surveys.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_groupedCat3')\">3. Proportions within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows an example in which the groups have different sizes. It shows that changing the counts into proportions (or percentages) makes it easier to compare groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_structures4')\">4. Categorical variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing how groups can be represented by a categorical variable and a categorical variable can split data into groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat4')\">5. Marginal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram uses dynamic stacking of the bars in clustered bar charts to show the marginal proportions for X and Y.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat5')\">6. Conditional distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows a table of joint frequencies that can be changed into a table of conditional proportions. Clicking rows or columns shows the calculations underlying these conditional proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_bivarCat7')\">7. Conditional vs marginal distns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a kind of Venn diagram in which the areas equal the joint proportions. The rectangles can be changed in shape to show (the marginal propns for X and conditional propns for Y) or (the marginal propns for Y and conditional propns for X).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
