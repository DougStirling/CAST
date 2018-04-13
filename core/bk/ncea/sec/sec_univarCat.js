var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Bar and pie charts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat1')\">1. Bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A bar chart displays the frequencies in a frequency table graphically.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat3')\">2. Chartjunk and misleading bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The temptation to embellish simple barcharts should be resisted. Some such 'artistic' embellishments are misleading.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat4')\">3. Stacked bar charts and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>These are alternatives to a bar chart for categorical data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat5')\">4. Comparison of bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar charts distinguish better the proportions in single categories. Pie charts are better for showing the proportion in a groups of categories.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat6')\">5. Chartjunk for pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three-dimensional pie charts are often drawn. If a pie chart holds little information, it is better to draw it small than to enhance it in this way.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('univarCat7')\">6. Bar and pie charts for quantities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar and pie charts can be used to display any data where a total quantity is split into parts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat1')\">7. Exercise: Draw a bar chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will draw the bar chart corresponding to a frequency table.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat2')\">8. Exercise: Find proportion from bar chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise shows bar charts for data sets with ordered categories, augmented with a graph of the cumulative frequencies. You are asked to find proportions and percentages from the diagram.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat4')\">9. Exercise: Draw a pie chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this exercise, you will draw the pie chart corresponding to a frequency table, using either the individual frequencies or the cumulative frequencies.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat5')\">10. Exercise: Match bar and pie charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Bar and pie charts display the same information in different ways. This exercise displays bar and pie charts for four data sets and asks you to match them.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_univarCat6')\">11. Exercise: Proportions from pie chart</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise displays the pie chart for either an ordinal categorical variable or a categorical variable in which the categories have been arranged in decreasing order of their frequencies. You are asked to estimate the percentage in some adjacent categories 'by eye' from the pie chart.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
