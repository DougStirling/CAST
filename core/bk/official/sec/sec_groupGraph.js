var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph0')\">1. Overview</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page is an overview of the section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph1')\">2. Two-way tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Data for comparing groups are often displayed in a two-way table with either the rows or columns corresponding to the different groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph2')\">3. Proportions within groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the values in each group are partitions of a group total such as a frequency table, a table or bar chart of percentages within the groups highlights the differences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph3')\">4. Clustered bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The bars can be clustered together by group or by category.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph4')\">5. Stacked bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are many groups, stacking the bars often makes it easier to compare the groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph5')\">6. Two categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If there are only two categories in each group, there is no need to present both proportions. A simple bar chart of one proportion is sufficient and allows the scale to be expanded if the proportion is small for all groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('groupGraph6')\">7. Chartjunk</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three-dimensional versions of clustered and stacked bar charts make it harder to understand the data and can be misleading.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
