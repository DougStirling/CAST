var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bar and pie charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat1')\">1. Drawing a bar chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will draw the bar chart corresponding to a frequency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat2')\">2. Proportions and percentages from bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows bar charts for data sets with ordered categories, augmented with a graph of the cumulative frequencies. You are asked to find proportions and percentages from the diagram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat3')\">3. Pareto diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will produce a Pareto diagram by reordering the bars of a bar chart, then find a proportion or percentage relating to the most important or least important categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat4')\">4. Drawing a pie chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will draw the pie chart corresponding to a frequency table, using either the individual frequencies or the cumulative frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat5')\">5. Matching bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar and pie charts display the same information in different ways. This exercise displays bar and pie charts for four data sets and asks you to match them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat6')\">6. Percentages from pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays the pie chart for either an ordinal categorical variable or a categorical variable in which the categories have been arranged in decreasing order of their frequencies. You are asked to estimate the percentage in some adjacent categories 'by eye' from the pie chart.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
