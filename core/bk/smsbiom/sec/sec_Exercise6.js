var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Exercises</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable1')\">1. Types of variables</a>&nbsp;&nbsp;&nbsp;<span class='note'>(also in Topic 1)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You classify various measurements as numerical (continuous or discrete) or categorical (ordinal or nominal).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable2')\">2. Proportions from frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>From a frequency tables you find the proportion or percentage qual, or not equal, to a particular value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_freqTable3')\">3. Proportions for ordered categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is similar to the previous exercise but asks questions about values greater than, greater than or equal to, etc. a value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat1')\">4. Drawing a bar chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You draw the bar chart corresponding to a frequency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat2')\">5. Proportions and percentages from bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You find proportions or percentages from bar charts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat4')\">6. Drawing a pie chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>You draw the pie chart corresponding to a frequency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_groupedCat1')\">7. Creating a 2-way table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise presents a list of values of two categorical variables; you must generate a table summarising the data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_groupedCat2')\">8. Proportions from a 2-way table</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise you are shown 2-way tables and asked to find a proportion.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
